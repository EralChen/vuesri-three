<script lang="ts" setup>
import { useSceneView } from '@vuesri/core'
import { subclass } from '@arcgis/core/core/accessorSupport/decorators'
import RenderNode from '@arcgis/core/views/3d/webgl/RenderNode'
import { Arrays, BufferInfo, ProgramInfo, VertexArrayInfo, createBufferInfoFromArrays, createProgramInfo, createVertexArrayInfo, drawBufferInfo, setUniforms } from 'twgl.js'

const view = useSceneView()

@subclass('vuesri.three.LuminanceRenderNode')
class LuminanceRenderNode extends RenderNode {
  consumes: __esri.ConsumedNodes = {
    required: ['composite-color'],
  }
  produces: __esri.RenderNodeOutput = 'composite-color'



  get enabled () {
    return this.produces != null
  }
  set enabled (value) {
    this.produces = value ? 'composite-color' : (null as any)
    this.requestRender()
  }

  destroy () {
    if (this.programInfo) {
      this.gl.deleteProgram(this.programInfo.program)
    }
  }
  

  render (inputs:  __esri.ManagedFBO[]) {
    const input = inputs.find(({ name }) => name === 'composite-color')
    if (!input) {
      throw new Error('composite-color input is required')
    }
    const color = input.getTexture()
    const output = this.acquireOutputFramebuffer()
    const gl = this.gl as WebGL2RenderingContext

    gl.clearColor(0, 0, 0, 1)
    gl.colorMask(true, true, true, true)
    gl.clear(gl.COLOR_BUFFER_BIT)

    if (!this.programInfo) {
      this.setupShaderProgram(gl)
    }
    if (!this.programInfo) {
      throw new Error('Failed to create shader program')
    }

    gl.useProgram(this.programInfo.program)

    // 使用 twgl 绑定和激活纹理
    setUniforms(this.programInfo, { colorTex: color.glName })

    // 绘制屏幕空间四边形，使用 VAO 和 bufferInfo
    if (this.vertexArrayInfo?.vertexArrayObject) {
      gl.bindVertexArray(this.vertexArrayInfo.vertexArrayObject)
      drawBufferInfo(gl, this.vertexArrayInfo)
    }

  
    output.attachDepth(input.getAttachment(gl.DEPTH_STENCIL_ATTACHMENT))
    return output
  }


  programInfo?: ProgramInfo
  bufferInfo?: BufferInfo
  vertexArrayInfo?: VertexArrayInfo
  setupShaderProgram (gl: WebGLRenderingContext){
    
    // 定义顶点和片元着色器
    const vs = /*glsl*/ `#version 300 es

                    in vec2 position;
                    out vec2 uv;

                    void main() {
                        gl_Position = vec4(position, 0.0, 1.0);
                        uv = position * 0.5 + vec2(0.5);
                    }`

    const fs = /*glsl*/ `#version 300 es
    
                        precision highp float;
                        out lowp vec4 fragColor;
    
                        in vec2 uv;
                        uniform sampler2D colorTex;
    
                        void main() {
                            vec4 color = texture(colorTex, uv);
                            fragColor = vec4(
                              vec3(
                                dot(
                                  color.rgb, 
                                  vec3(0.2126, 0.7152, 0.0722)
                                )
                              ), 
                              color.a
                            );
                        }`

    // 使用twgl简化着色器和程序的创建
    this.programInfo = createProgramInfo(gl, [vs, fs])


    const vertices = new Float32Array([-1.0, -1.0, 3.0, -1.0, -1.0, 3.0])

    
    // 定义一个全屏四边形的顶点数据
    const arrays: Arrays = {
      position: { 
        numComponents: 2, 
        data: vertices,
      },
    }
    this.bufferInfo = createBufferInfoFromArrays(gl, arrays)
    this.vertexArrayInfo = createVertexArrayInfo(
      gl, 
      this.programInfo, 
      this.bufferInfo,
    )

  }
}

new LuminanceRenderNode({ view })



</script>
<template>
  <slot></slot>
</template>
