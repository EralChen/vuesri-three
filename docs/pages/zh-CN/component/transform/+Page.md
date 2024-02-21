# Transform

`Transform` 提供了一些常用的转换函数，用于地理坐标系与 WebGL 坐标系之间的转换

## createTransformMatrix4

```ts
const geometry = new THREE.BoxGeometry(1000, 1000, 1000)
const material = new THREE.MeshBasicMaterial({ 
  color: 0xffff00,
})
this.mesh = new THREE.Mesh(geometry, material)
e.scene.add(this.mesh)

/* mesh 应用矩阵变换，调整到地理坐标系中 */
const transform = createTransformMatrix4(e.view, this.point)
this.mesh.applyMatrix4(transform)
```
