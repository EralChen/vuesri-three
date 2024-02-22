import { externalRenderers } from '@vuesri/core/arcgis'
import { AmbientLight, AxesHelper, Color, DirectionalLight, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three'
import { ThreeLayer } from '@vuesri-three/components/layer'



export class ThreeRenderer {
  view: __esri.SceneView
  layers: ThreeLayerCollection = new ThreeLayerCollection()
    

  private renderer?: THREE.WebGLRenderer
  readonly scene: THREE.Scene = new Scene()
  readonly camera: THREE.PerspectiveCamera = new PerspectiveCamera()
  private ambient: THREE.AmbientLight = new AmbientLight(0xffffff, 0.5)
  private sun: THREE.DirectionalLight = new DirectionalLight(0xffffff, 0.5)


  getRenderer () {
    if (!this.renderer) {
      throw new Error('no renderer available')
    }

    return this.renderer 
  }

  constructor (e: {
    view: __esri.SceneView,
    axesHelper?: boolean,
  }) {
    this.view = e.view

    if (e.axesHelper) {
      this.scene.add(new AxesHelper(10000000))
    }

    externalRenderers.add(e.view, this)
  }


  public setup (context?: __esri.RenderContext): void {
    
    if (!context) {
      throw new Error('no context passed to setup, cannot work that way')
    }
    this.renderer = new WebGLRenderer({
      context: context.gl,
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

    this.layers.forEach(layer => {
      layer.setup({
        context,
        renderer: this.renderer as THREE.WebGLRenderer,
        scene: this.scene,
        view: this.view,
      })

    })


    context.resetWebGLState()
  }

  public render (context: __esri.RenderContext): void {

    this.camera.position.set(context.camera.eye[0], context.camera.eye[1], context.camera.eye[2])

    this.camera.up.set(context.camera.up[0], context.camera.up[1], context.camera.up[2])

    this.camera.lookAt(
      new Vector3(context.camera.center[0], context.camera.center[1], context.camera.center[2]),
    )

    this.camera.projectionMatrix.fromArray(context.camera.projectionMatrix)
    // this.camera.updateProjectionMatrix()

    const sunLight = context.sunLight

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

    
    this.layers.forEach(layer => {
      layer.render({
        context,
        renderer: this.renderer as THREE.WebGLRenderer,
        scene: this.scene,
        view: this.view,
      })
    })

    this.renderer?.resetState()

    context.bindRenderTarget()

    this.renderer?.render(this.scene, this.camera)

    externalRenderers.requestRender(this.view)

    context.resetWebGLState()
  }

  public dispose (context: __esri.RenderContext): void {

    this.layers.forEach(layer => {
      layer.dispose({
        context,
        renderer: this.renderer as THREE.WebGLRenderer,
        scene: this.scene,
        view: this.view,
      })
    })
    this.scene.remove(this.ambient)
    this.scene.remove(this.sun)
    this.ambient.dispose()
    this.sun.dispose()
    this.renderer?.dispose()
  }

  public resize () {
    const aspect = this.view.width / this.view.height
    const renderer = this.getRenderer()
    if (isNaN(aspect)) return
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
    renderer.setSize(this.view.width, this.view.height)

  }



}


export class ThreeLayerCollection extends Array<ThreeLayer> {
  add (layer: ThreeLayer): void {
    this.push(layer)
  }
  
  remove (layer: ThreeLayer): void {
    const index = this.indexOf(layer)
    if (index > -1) {
      this.splice(index, 1)
    }
  }

  removeAll (): void {
    this.length = 0
  }

}
