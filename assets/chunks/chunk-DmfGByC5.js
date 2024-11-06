import{b3 as fe}from"./chunk-C4bXDfxA.js";import"./chunk-D_yTKJJf.js";import{d as ue,a as pe,b as he}from"./chunk-CW_9Je75.js";import{V as me}from"./chunk-DxsSVHaj.js";import{f as ge,v as ve,E as ye,g as we,w as xe,x as I,V as x,I as Se,y as Z,z as W,H as E,J as be,K as ie,L as F,U as se,N as C,o as _e,O,X as M,Y as ze,Z as Ee,b as N,M as Le,T as Me,_ as Ue,R as $,c as k,u as Ae,a as Pe,$ as Be}from"./chunk-c5QbCJQU.js";import{G as Te}from"./chunk-CQnLTZ-H.js";import{d as oe,w as Ce,R as Oe,r as De,q,z as je,b as Ge,p as Re,l as J,k as A,u as L}from"./chunk-CDohQU0g.js";import"./chunk--6mYOZ3I.js";import"./chunk-CIGiVJhy.js";function X(s,e,t){t===void 0&&(t={});var n={type:"Feature"};return(t.id===0||t.id)&&(n.id=t.id),t.bbox&&(n.bbox=t.bbox),n.properties=e||{},n.geometry=s,n}function We(s,e){e===void 0&&(e={});var t={type:"FeatureCollection"};return e.id&&(t.id=e.id),e.bbox&&(t.bbox=e.bbox),t.features=s,t}function Fe(s,e){var t,n,i,r,a,o,l,c,d,f,m=0,g=s.type==="FeatureCollection",S=s.type==="Feature",U=g?s.features.length:1;for(t=0;t<U;t++){for(o=g?s.features[t].geometry:S?s.geometry:s,c=g?s.features[t].properties:S?s.properties:{},d=g?s.features[t].bbox:S?s.bbox:void 0,f=g?s.features[t].id:S?s.id:void 0,l=o?o.type==="GeometryCollection":!1,a=l?o.geometries.length:1,i=0;i<a;i++){if(r=l?o.geometries[i]:o,r===null){if(e(null,m,c,d,f)===!1)return!1;continue}switch(r.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(r,m,c,d,f)===!1)return!1;break}case"GeometryCollection":{for(n=0;n<r.geometries.length;n++)if(e(r.geometries[n],m,c,d,f)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}m++}}function Ne(s,e){Fe(s,function(t,n,i,r,a){var o=t===null?null:t.type;switch(o){case null:case"Point":case"LineString":case"Polygon":return e(X(t,i,{bbox:r,id:a}),n,0)===!1?!1:void 0}var l;switch(o){case"MultiPoint":l="Point";break;case"MultiLineString":l="LineString";break;case"MultiPolygon":l="Polygon";break}for(var c=0;c<t.coordinates.length;c++){var d=t.coordinates[c],f={type:l,coordinates:d};if(e(X(f,i),n,c)===!1)return!1}})}function Ie(s){if(!s)throw new Error("geojson is required");var e=[];return Ne(s,function(t){e.push(t)}),We(e)}class He{constructor(e){this.positions=[],this.colors=[],this.shapes=[],this.transform=(t,n)=>[...t,0],this.options=e||{},this.transform=e?.transform||this.transform,this.lineOffsetZ=e?.lineOffsetZ||.2,this.geojson=e?.geojson}genShapePosition(){var e;if(!this.geojson)return;const t=Ie(this.geojson),n=new ge;(e=t.features)===null||e===void 0||e.forEach(i=>{const r=i.geometry.coordinates,a=new ve,o=[],l=[];r.forEach(c=>{c.forEach((d,f)=>{const[m,g,S]=this.transform(d,i);f===0&&a.moveTo(m,g),a.lineTo(m,g),o.push(m,g,S+this.lineOffsetZ),l.push(n.r,n.g,n.b)})}),this.shapes.push(a),this.positions.push(o),this.colors.push(l)}),this.extrudeGeometry=new ye(this.shapes,this.options)}set geojson(e){this._geojson=e,this.genShapePosition()}get geojson(){return this._geojson}}class Ve{constructor(){this.textureLoader=new we}load(e,t,n,i){const r=this.textureLoader.load(e,t,n,i);return r.colorSpace=xe,r}}const K=new I,P=new x;class re extends Se{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const e=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new Z(e,3)),this.setAttribute("uv",new Z(t,2))}applyMatrix4(e){const t=this.attributes.instanceStart,n=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(e),n.applyMatrix4(e),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new W(t,6,1);return this.setAttribute("instanceStart",new E(n,3,0)),this.setAttribute("instanceEnd",new E(n,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));const n=new W(t,6,1);return this.setAttribute("instanceColorStart",new E(n,3,0)),this.setAttribute("instanceColorEnd",new E(n,3,3)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new be(e.geometry)),this}fromLineSegments(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new I);const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;e!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(e),K.setFromBufferAttribute(t),this.boundingBox.union(K))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ie),this.boundingBox===null&&this.computeBoundingBox();const e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(e!==void 0&&t!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)P.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(P)),P.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(P));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}C.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new F(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};O.line={uniforms:se.merge([C.common,C.fog,C.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class H extends _e{constructor(e){super({type:"LineMaterial",uniforms:se.clone(O.line.uniforms),vertexShader:O.line.vertexShader,fragmentShader:O.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(e)}get color(){return this.uniforms.diffuse.value}set color(e){this.uniforms.diffuse.value=e}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(e){e===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(e){this.uniforms.linewidth&&(this.uniforms.linewidth.value=e)}get dashed(){return"USE_DASH"in this.defines}set dashed(e){e===!0!==this.dashed&&(this.needsUpdate=!0),e===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(e){this.uniforms.dashScale.value=e}get dashSize(){return this.uniforms.dashSize.value}set dashSize(e){this.uniforms.dashSize.value=e}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(e){this.uniforms.dashOffset.value=e}get gapSize(){return this.uniforms.gapSize.value}set gapSize(e){this.uniforms.gapSize.value=e}get opacity(){return this.uniforms.opacity.value}set opacity(e){this.uniforms&&(this.uniforms.opacity.value=e)}get resolution(){return this.uniforms.resolution.value}set resolution(e){this.uniforms.resolution.value.copy(e)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(e){this.defines&&(e===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),e===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const j=new M,Y=new x,Q=new x,u=new M,p=new M,v=new M,G=new x,R=new ze,h=new Ee,ee=new x,B=new I,T=new ie,y=new M;let w,_;function te(s,e,t){return y.set(0,0,-e,1).applyMatrix4(s.projectionMatrix),y.multiplyScalar(1/y.w),y.x=_/t.width,y.y=_/t.height,y.applyMatrix4(s.projectionMatrixInverse),y.multiplyScalar(1/y.w),Math.abs(Math.max(y.x,y.y))}function Ze(s,e){const t=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,a=Math.min(n.instanceCount,i.count);for(let o=0,l=a;o<l;o++){h.start.fromBufferAttribute(i,o),h.end.fromBufferAttribute(r,o),h.applyMatrix4(t);const c=new x,d=new x;w.distanceSqToSegment(h.start,h.end,d,c),d.distanceTo(c)<_*.5&&e.push({point:d,pointOnLine:c,distance:w.origin.distanceTo(d),object:s,face:null,faceIndex:o,uv:null,uv1:null})}}function $e(s,e,t){const n=e.projectionMatrix,r=s.material.resolution,a=s.matrixWorld,o=s.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,d=Math.min(o.instanceCount,l.count),f=-e.near;w.at(1,v),v.w=1,v.applyMatrix4(e.matrixWorldInverse),v.applyMatrix4(n),v.multiplyScalar(1/v.w),v.x*=r.x/2,v.y*=r.y/2,v.z=0,G.copy(v),R.multiplyMatrices(e.matrixWorldInverse,a);for(let m=0,g=d;m<g;m++){if(u.fromBufferAttribute(l,m),p.fromBufferAttribute(c,m),u.w=1,p.w=1,u.applyMatrix4(R),p.applyMatrix4(R),u.z>f&&p.z>f)continue;if(u.z>f){const z=u.z-p.z,b=(u.z-f)/z;u.lerp(p,b)}else if(p.z>f){const z=p.z-u.z,b=(p.z-f)/z;p.lerp(u,b)}u.applyMatrix4(n),p.applyMatrix4(n),u.multiplyScalar(1/u.w),p.multiplyScalar(1/p.w),u.x*=r.x/2,u.y*=r.y/2,p.x*=r.x/2,p.y*=r.y/2,h.start.copy(u),h.start.z=0,h.end.copy(p),h.end.z=0;const U=h.closestPointToPointParameter(G,!0);h.at(U,ee);const V=Le.lerp(u.z,p.z,U),ce=V>=-1&&V<=1,de=G.distanceTo(ee)<_*.5;if(ce&&de){h.start.fromBufferAttribute(l,m),h.end.fromBufferAttribute(c,m),h.start.applyMatrix4(a),h.end.applyMatrix4(a);const z=new x,b=new x;w.distanceSqToSegment(h.start,h.end,b,z),t.push({point:b,pointOnLine:z,distance:w.origin.distanceTo(b),object:s,face:null,faceIndex:m,uv:null,uv1:null})}}}class ke extends N{constructor(e=new re,t=new H({color:Math.random()*16777215})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const e=this.geometry,t=e.attributes.instanceStart,n=e.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let a=0,o=0,l=t.count;a<l;a++,o+=2)Y.fromBufferAttribute(t,a),Q.fromBufferAttribute(n,a),i[o]=o===0?0:i[o-1],i[o+1]=i[o]+Y.distanceTo(Q);const r=new W(i,2,1);return e.setAttribute("instanceDistanceStart",new E(r,1,0)),e.setAttribute("instanceDistanceEnd",new E(r,1,1)),this}raycast(e,t){const n=this.material.worldUnits,i=e.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=e.params.Line2!==void 0&&e.params.Line2.threshold||0;w=e.ray;const a=this.matrixWorld,o=this.geometry,l=this.material;_=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),T.copy(o.boundingSphere).applyMatrix4(a);let c;if(n)c=_*.5;else{const f=Math.max(i.near,T.distanceToPoint(w.origin));c=te(i,f,l.resolution)}if(T.radius+=c,w.intersectsSphere(T)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),B.copy(o.boundingBox).applyMatrix4(a);let d;if(n)d=_*.5;else{const f=Math.max(i.near,B.distanceToPoint(w.origin));d=te(i,f,l.resolution)}B.expandByScalar(d),w.intersectsBox(B)!==!1&&(n?Ze(this,t):$e(this,i,t))}onBeforeRender(e){const t=this.material.uniforms;t&&t.resolution&&(e.getViewport(j),this.material.uniforms.resolution.value.set(j.z,j.w))}}class ae extends re{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setPositions(n),this}setColors(e){const t=e.length-3,n=new Float32Array(2*t);for(let i=0;i<t;i+=3)n[2*i]=e[i],n[2*i+1]=e[i+1],n[2*i+2]=e[i+2],n[2*i+3]=e[i+3],n[2*i+4]=e[i+4],n[2*i+5]=e[i+5];return super.setColors(n),this}fromLine(e){const t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class ne extends ke{constructor(e=new ae,t=new H({color:Math.random()*16777215})){super(e,t),this.isLine2=!0,this.type="Line2"}}const qe=s=>!!s&&s.constructor===Object,le=(s,e)=>!s||!e?s??e??{}:Object.entries({...s,...e}).reduce((t,[n,i])=>({...t,[n]:qe(s[n])?le(s[n],i):i}),{});class Je extends Ue{constructor(e){super(),this.options=e,this.tLoader=new Ve,this.render()}dispose(){this.children.forEach(e=>{e&&(e instanceof N||e instanceof ne)&&(e.geometry.dispose(),Array.isArray(e.material)?e.material.forEach(t=>{t.dispose()}):e.material.dispose())}),this.clear(),this.removeFromParent()}refresh(){this.dispose(),this.render()}render(){if(!this.geojson)return;const{extrudeGeometry:e,positions:t,colors:n}=new He({geojson:this.geojson,depth:this.options.z,transform:o=>this.transform(o)});for(const[o,l]of t.entries()){const c=n[o],d=this.genLine(l,c);this.add(d)}const{gradationMaterial:i,gridMaterial:r}=this.genMapMaterial(),a=new N(e,[r,i]);this.add(a)}genTexture(e){return this.tLoader.load(e)}genMapMaterial(){const e=this.genTexture("/ssr/geojson-plane/gradation.png"),t=new F(.05,.05);e.repeat.set(t.x,t.y);const n=this.genTexture("/ssr/geojson-plane/texture.png"),i=new F(1e-4,1e-4);n.wrapS=$,n.wrapT=$,n.repeat.set(i.x,i.y);const r=new k({map:n});return{gradationMaterial:new k({map:e}),gridMaterial:r}}genLine(e,t){const n=new H({color:12031467,linewidth:.002,vertexColors:!0,dashed:!1,alphaToCoverage:!0}),i=new ae;i.setPositions(e),i.setColors(t);const r=new ne(i,n);return r.computeLineDistances(),r}set z(e){this.options.z=e}get z(){return this.options.z}}class Xe extends Me{constructor(e){super(),this.defaultOptions={z:2e3,offsetZ:10},this.options=le(this.defaultOptions,e||{})}setup(e){super.setup(e),this.geojsonPlane=new Je(this.options),this.geojsonPlane.transform=t=>{const n=this.getRenderTransform().createRenderCoordinatesSync([new fe({x:t[0],y:t[1],z:this.z+this.offsetZ})]);return[n[0],n[1],n[2]]},e.scene.add(this.geojsonPlane),this.ready()}refresh(){const e=this.getContext().scene;this.geojsonPlane.refresh(),e.add(this.geojsonPlane)}animate(e){e.renderNode?.requestRender()}dispose(){this.geojsonPlane.dispose()}get z(){return this.options.z}set z(e){this.options.z=e,this.geojsonPlane.z=e}get offsetZ(){return this.options.offsetZ}set offsetZ(e){this.options.offsetZ=e}}const Ke={source:{type:Object,default:()=>({})},z:{type:Number,default:2e3},offsetZ:{type:Number,default:10}},Ye={load:s=>s},Qe=oe({name:"VathGeoRegionLayer",props:Ke,emits:Ye,setup(s,{emit:e}){const t=new Xe({z:s.z,offsetZ:s.offsetZ}),n=Ae();return Ce([()=>s.z,()=>s.offsetZ,()=>s.source],([i,r,a])=>{t.z=i,t.offsetZ=r,t.geojsonPlane.geojson=a,t.refresh()}),e("load",{layer:t,renderer:n,view:n.view}),Pe(n,t),{}}});function et(s,e,t,n,i,r){return De(s.$slots,"default")}const D=Oe(Qe,[["render",et]]);D.install=s=>{s.component(D.name||"VathGeoRegionLayer",D)};const dt=oe({__name:"basic",setup(s){const e=new Be,t=q();e.load("/ssr/geojson-plane/nbs.json",o=>{t.value=JSON.parse(o)});const n={center:[121.62,29.87],zoom:8,viewingMode:"local",spatialReference:{wkid:102100}};let i;function r(o){i=o.layer}const a=q(null);return je(()=>{const o=new Te({container:a.value.$el});i.when().then(()=>{o.add(i.geojsonPlane,"visible")})}),(o,l)=>(Ge(),Re(L(he),{"default-options":n},{default:J(()=>[A(L(ue),{ref_key:"boxRef",ref:a,position:"top-right"},null,512),A(L(pe),{type:"vec_w","spatial-reference":{wkid:102100}}),A(L(me),null,{default:J(()=>[A(L(D),{source:t.value,z:2e3,"offset-z":100,onLoad:r},null,8,["source"])]),_:1})]),_:1}))}});export{dt as default};
