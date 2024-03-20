
import { subclass } from '@arcgis/core/core/accessorSupport/decorators'
import RenderNode from '@arcgis/core/views/3d/webgl/RenderNode'
import { AmbientLight, AxesHelper, Color, DirectionalLight, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import { ThreeLayerCollection } from '@vuesri-three/components/three-renderer'
import { ThreeNodeComponent, ThreeRenderNodeProerties } from './types'
import { reactiveUtils } from '@vuesri/core/arcgis/4.23'



@subclass('vuesri.three.ThreeRenderNode')
export class ThreeRenderNode extends RenderNode {

  consumes: __esri.ConsumedNodes = {
    required: [],
  }
  produces: __esri.RenderNodeOutput = 'composite-color'


  layers: ThreeLayerCollection<ThreeNodeComponent> = new ThreeLayerCollection()
      
  private renderer?: WebGLRenderer
  getRenderer () {
    if (!this.renderer) {
      throw new Error('no renderer available')
    }
    
    return this.renderer 
  }

  readonly scene = new Scene()
  readonly threeCamera = new PerspectiveCamera()
  

  private ambient = new AmbientLight(0xffffff, 0.5)
  private sun = new DirectionalLight(0xffffff, 0.5)


  constructor (e: ThreeRenderNodeProerties) {
    super(e)
  
    if (e.axesHelper) {
      this.scene.add(new AxesHelper(10000000))
    }
    
  }

  initialize (): void {
    this.addHandles(
      reactiveUtils.watch(
        () => this.view.ready,
        (ready) => {
          if (ready) {
            this.setup()
          } else {
            this.dispose()
          }
        },
        { initial: true },
      ),
    )
  }


  setup () {

    const gl = this.gl as WebGL2RenderingContext
    this.renderer = new WebGLRenderer({
      context: gl,
      premultipliedAlpha: false,
      preserveDrawingBuffer: true,
    })

    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.renderer.setViewport(0, 0, this.view.width, this.view.height)

    this.resize()

    this.view.watch(['width', 'height'], () => {
      this.resize()
    })


    this.renderer.autoClear = false
    this.renderer.autoClearDepth = false // 定义renderer是否清除深度缓存
    this.renderer.autoClearStencil = false // 定义renderer是否清除模板缓存
    this.renderer.autoClearColor = false // 定义renderer是否清除颜色缓存

    // setup scene lighting
    this.scene.add(this.ambient)
    this.scene.add(this.sun)


    const ctx = {
      context: this,
      renderer: this.renderer as WebGLRenderer,
      scene: this.scene,
      view: this.view,
      renderNode: this,
    }


    this.layers.forEach(layer => {
      layer.setup(ctx)
    })

    
    const animate = () => {
      this.layers.forEach(layer => {
        layer.animate?.(ctx)
      })
      requestAnimationFrame(animate)
    }
    animate()
    

    this.resetWebGLState()
  }


  render (inputs: __esri.ManagedFBO[]): __esri.ManagedFBO {
    this.renderer?.resetState()
    const output = this.bindRenderTarget()

    this.syncCamera()
    this.syncSunlight()

    this.layers.forEach(layer => {
      layer.render?.({
        renderer: this.getRenderer(),
        scene: this.scene,
        view: this.view,
        renderNode: this,
        inputs: inputs,
        context: this,
      })
    })

    this.renderer?.render(this.scene, this.threeCamera)

    this.resetWebGLState()

    return output

  }

  dispose (): void {
    this.layers.forEach(layer => {
      layer.dispose({
        context: this,
        renderer: this.renderer as WebGLRenderer,
        scene: this.scene,
        view: this.view,
        renderNode: this,
      })
    })
    this.scene.remove(this.ambient)
    this.scene.remove(this.sun)
    this.ambient.dispose()
    this.sun.dispose()
    this.renderer?.dispose()
  }

  destroy (): void {
    this.dispose()
    super.destroy()
  }

  private syncCamera () {
    this.threeCamera.position.set(this.camera.eye[0], this.camera.eye[1], this.camera.eye[2])
    this.threeCamera.up.set(this.camera.up[0], this.camera.up[1], this.camera.up[2])
    this.threeCamera.lookAt(this.camera.center[0], this.camera.center[1], this.camera.center[2])
    this.threeCamera.projectionMatrix.fromArray(this.camera.projectionMatrix)
  }

  private syncSunlight () {
    const sunLight = this.sunLight
    
    this.sun.position.set(
      sunLight.direction[0],
      sunLight.direction[1],
      sunLight.direction[2],
    )
    
    this.sun.intensity = sunLight.diffuse.intensity
    
    this.sun.color = new Color(
      sunLight.diffuse.color[0],
      sunLight.diffuse.color[1],
      sunLight.diffuse.color[2],
    )
    
    this.ambient.intensity = sunLight.ambient.intensity
    
    this.ambient.color = new Color(
      sunLight.ambient.color[0],
      sunLight.ambient.color[1],
      sunLight.ambient.color[2],
    )
    
  }
  
  public resize () {
    const aspect = this.view.width / this.view.height
    const renderer = this.getRenderer()
    if (isNaN(aspect)) return
    this.threeCamera.aspect = aspect
    this.threeCamera.updateProjectionMatrix()
    renderer.setSize(this.view.width, this.view.height)

  }


}


