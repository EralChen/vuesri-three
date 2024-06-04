import type MarkdownIt from 'markdown-it'
import type Token from 'markdown-it/lib/token'
import container from 'markdown-it-container'
import fs from 'fs'
import path from 'path'
import { fixPath } from '@lib-env/build-utils'
import { createSourceFile, ScriptTarget, SyntaxKind, VariableStatement, Statement, ObjectLiteralExpression, JSDoc, PropertyName, PropertyAssignment, Identifier, AsExpression, Expression, TypeReferenceNode, EntityName, TypeNode, QualifiedName, StringLiteral, NumericLiteral, FunctionExpression, createPrinter, EmitHint, ArrayTypeNode, UnionTypeNode, LiteralTypeNode, IndexedAccessTypeNode } from 'typescript'
import { NormalObject } from '@vunk/core'
import { getSubBlockquoteContent } from '../utils'

export interface PropsOptions {
  componentsPath: string
}

export const vuePropsContainerPlugin = (
  md: MarkdownIt,
  options: PropsOptions,
) => {
  const componentsPath = options.componentsPath

  md.use(container, 'props', {
    validate (params: string) {
      return !!params.trim().match(/^props\s*(.*)$/)
    }, 
    render (tokens: Token[], idx: number) {
          
      // const m = tokens[idx].info.trim().match(/^props\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        // const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFilePath = sourceFileToken.children?.[0].content ?? ''
      
        if (sourceFileToken.type === 'inline') {
          source = fixPath(
            fs.readFileSync(
              path.resolve(componentsPath, `${sourceFilePath}.ts`),
              'utf-8',
            ),
          ) 
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFilePath}`)
  

        const sourceFile = createSourceFile(
          sourceFilePath,
          source,
          ScriptTarget.ESNext,
        )


 
        /* 过滤出 props 变量声明 */ 
        const isVariableStatement = (
          statement: Statement,
        ): statement is VariableStatement => {
          return statement.kind === SyntaxKind.VariableStatement
        }
        const statement = sourceFile.statements.find((item) => {
          if (isVariableStatement(item)) {
            const declarationList = item.declarationList
        
            const declaration = declarationList.declarations[0]
            const name = declaration?.name.kind === SyntaxKind.Identifier 
              ? declaration.name.text 
              : ''
            return name === 'props'
          }
        }) as VariableStatement | undefined
      
        /* end of 过滤出 props 变量声明  in statement */


        /* 获取变量定义下的所有属性  PropertyAssignment */
        function getProperties (statement: VariableStatement) {
          const initializer = statement.declarationList.declarations[0].initializer as ObjectLiteralExpression

          const properties = initializer.properties
          return properties
        }
        function getProperty (
          object: ObjectLiteralExpression, 
          name: string,
        ) {
          const properties = object.properties
          return properties.find((item) => {
            return item.kind === SyntaxKind.PropertyAssignment 
            && getName(item.name) === name
          }) as PropertyAssignment | undefined
        }
        function getName (value: PropertyName | EntityName |QualifiedName) {
          if (value.kind === SyntaxKind.Identifier) {
            return value.text
          }
          if (value.kind === SyntaxKind.StringLiteral) {
            return value.text
          }
          if (value.kind === SyntaxKind.NumericLiteral) {
            return value.text
          }
     
          if (value.kind === SyntaxKind.QualifiedName) {
            return getName(value.left) + '.' + getName(value.right)
          }
          return ''
        }

        function getFullTypeName (uktype: TypeNode): string {

          if (uktype.kind === SyntaxKind.TypeReference) {
            const type = uktype as TypeReferenceNode

            const typeName = getName(
              type.typeName,
            )
            const typeArguments = type.typeArguments

            if (typeArguments) {
              const typeArgs = typeArguments.reduce((a, value) => {
                a.push(getFullTypeName(value))
                return a
              }, [] as string[])

              return `${typeName}<${typeArgs.join(',')}>`

            } else {
              return typeName
            }

          }
          if (uktype.kind === SyntaxKind.ArrayType) {
            const type = uktype as ArrayTypeNode
            const typeName = getFullTypeName(type.elementType)

            return `${typeName}[]`
          }

          if (uktype.kind === SyntaxKind.UnionType) {
            const type = uktype as UnionTypeNode

            const types = type.types.reduce((a, value) => {
              a.push(getFullTypeName(value))
              return a
            }, [] as string[])
     

            return types.join(' | ')
          }

          if (
            [
              SyntaxKind.LiteralType, 
            ].includes(uktype.kind)
          ) {
            const uktypeTxt = createPrinter().printNode(
              EmitHint.Expression,
              (uktype as LiteralTypeNode).literal,
              undefined as never,
            )
            return uktypeTxt
          }

          if (uktype.kind === SyntaxKind.IndexedAccessType) {
            const type = uktype as IndexedAccessTypeNode
            const typeName = getFullTypeName(type.objectType)
            const indexName = getFullTypeName(type.indexType)
            return `${typeName}[${indexName}]`
          }

          console.warn('uktype', uktype)

          return ''

        }

        function getTypeFromInitializer (
          initializer: Expression,
        ): string {
          // if  Identifier
          if (initializer.kind === SyntaxKind.Identifier) {
            return (initializer as Identifier).text
          }
          // if AsExpression
          if (initializer.kind === SyntaxKind.AsExpression) {
            const _type = (initializer as AsExpression).type  
            if (_type.kind === SyntaxKind.TypeReference) {
              const type = _type as TypeReferenceNode

              const typeName = getName(
                (type as TypeReferenceNode).typeName,
              )

              if (typeName === 'PropType') { // vue PropType
                // 取出泛型
                const typeArguments = type.typeArguments
                if (typeArguments) {
                  const typeArgument = typeArguments[0]
                  const typeName = getFullTypeName(typeArgument)
                  return typeName
                }
              }
              return typeName

            }

          }

          return ''

        }

        function getValueFromInitializer (
          initializer: Expression,
        ) {
          if (initializer.kind === SyntaxKind.StringLiteral) {
            return (initializer as StringLiteral).text
          }
          if (initializer.kind === SyntaxKind.NumericLiteral) {
            return (initializer as NumericLiteral).text
          }
          if (initializer.kind === SyntaxKind.TrueKeyword) {
            return 'true'
          }
          if (initializer.kind === SyntaxKind.FalseKeyword) {
            return 'false'
          }

          if (initializer.kind === SyntaxKind.ArrowFunction
            || initializer.kind === SyntaxKind.FunctionExpression
          ) {
            // 获取函数返回值
            const returnStatement = (initializer as FunctionExpression).body
            const bodystr = createPrinter().printNode(
              EmitHint.Expression,
              returnStatement,
              undefined as never,
            )
            return bodystr
          }

          return ''



        }
        const properties = statement 
          ? getProperties(statement)
          : [] as unknown as ReturnType<typeof getProperties>


        const propRows = properties.reduce((a, value) => {
          if (value.kind === SyntaxKind.PropertyAssignment) {
            const initializer = value.initializer as ObjectLiteralExpression

            let prop = getName(value.name) 

            const jsdocs:JSDoc[] = (value as NormalObject).jsDoc ?? [] 

            // 找出 description
            const descriptions = jsdocs.reduce((a, value) => {
              const comment = value.tags?.find((item) => item.tagName.escapedText === 'description')?.comment || ''
              return a + comment
            }, '')

            const link = jsdocs.reduce((a, value) => {
              const comment = value.tags?.find((item) => item.tagName.escapedText === 'link')?.comment || ''
              return comment as string
            }, '')

            if (link) {
              prop = `[${prop}](${link})`
            }


            
            const typeProperty = getProperty(initializer, 'type')

            const type = typeProperty 
              ? getTypeFromInitializer(typeProperty.initializer) 
              : ''
            
            const defaultProperty = getProperty(initializer, 'default')

            const defaultStr = defaultProperty 
              ? getValueFromInitializer(defaultProperty.initializer)
              : ''
            
            const requiredProperty = getProperty(initializer, 'required')

            const required = requiredProperty 
              ? getValueFromInitializer(requiredProperty.initializer) != 'false' : false

            if (required) {
              prop = `${prop}*`
            }
         
      

            a.push({
              prop: prop || '-',
              // 联合类型中的 '|' 替换为换行 
              type: type.replaceAll('|', '<br>') || '-',
              default: defaultStr || '-',
              descriptions: descriptions || '-',
            })
            return a
          }
          return a
        }, [] as PropRow[])

        /* end of  获取变量定义下的所有属性 in propRows*/


        /* before add */
        const beforeRowsStr = getSubBlockquoteContent(
          tokens, 
          idx + 2, 
          'before',
        )
        /* end of before add  */
     


        return `<div class="vp-vue-props">` + md.render(
          `|prop|type|default|descriptions|` + '\n' +
          `|-|-|-|-|` + '\n' +

            `${
              beforeRowsStr ? beforeRowsStr + '\n' : ''
            }` +

            `${
              propRows.map((item) => {
                return `${item.prop}|${item.type}|${item.default}|${item.descriptions}`
              }).join('\n')
            }`,
        ) + `<!-- `

        

  

      } else {
        return '--></div>'
      }
    },
  })
  
  

}

/**
 * @description
 * ```md
 * |prop|type|default|descriptions|
   |-|-|-|-|
 * ```
 */
export interface PropRow {
  prop: string
  type: string
  default: string
  descriptions: string
}


