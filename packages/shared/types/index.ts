
export interface ThreeComponent {
  setup (e: ThreeLayerContext): void;
  render(e: ThreeLayerContext): void;
  dispose(e: ThreeLayerContext): void;
}

export interface ThreeLayer extends ThreeComponent {
  title?: string;
}


export interface ThreeLayerContext {
  context: __esri.RenderContext
  renderer: THREE.WebGLRenderer
  scene: THREE.Scene
  view: __esri.SceneView
}




export {}