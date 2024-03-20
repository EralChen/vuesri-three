# Transform

`Transform` 提供了一些常用的转换函数，用于地理坐标系与 WebGL 坐标系之间的转换

## createTransformMatrix4

根据点位创建一个 `THREE.Matrix4` 矩阵，应用该矩阵变换，可以将 WebGL 坐标系中的点位转换到地理坐标系中

```ts
const geometry = new THREE.BoxGeometry(1000, 1000, 1000)
const material = new THREE.MeshBasicMaterial({ 
  color: 0xffff00,
})
this.mesh = new THREE.Mesh(geometry, material)
e.scene.add(this.mesh)

/* mesh 应用矩阵变换，调整到地理坐标系中 */
const transform = renderTransform.createTransformMatrix4(this.point)
this.mesh.applyMatrix4(transform)
```


## createRenderCoordinates / createRenderCoordinatesSync

根据地理坐标系点位，创建 WebGL 渲染点位（Float32Array） 

```ts
const wall: __esri.Point[] = [/* ... */]
const renderCoordinates = renderTransform.createRenderCoordinatesSync(
  wall,
)

const geometry = new BufferGeometry()
geometry.setAttribute(
  'position',
  new BufferAttribute(
    renderCoordinates, 
    3,
  ),
)
```