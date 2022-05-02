define(["./arrayRemoveDuplicates-fe254feb","./Transforms-c84edde7","./Matrix2-e6265fb0","./RuntimeError-ac440aa5","./ComponentDatatype-a9820060","./CoplanarPolygonGeometryLibrary-63ae199f","./defaultValue-69ee94f4","./GeometryAttribute-7a46074b","./GeometryAttributes-1b4134a9","./GeometryInstance-19ac39d5","./GeometryPipeline-57ae8a09","./IndexDatatype-1cbc8622","./PolygonGeometryLibrary-6c1ecc39","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./OrientedBoundingBox-06b4fccc","./EllipsoidTangentPlane-1cf39c37","./AxisAlignedBoundingBox-6808e68a","./IntersectionTests-93a038e3","./Plane-042297c7","./AttributeCompression-6e71d14f","./EncodedCartesian3-20914bf5","./ArcType-e1641d8d","./EllipsoidRhumbLine-94e77fa4","./PolygonPipeline-968b19bd"],(function(e,t,n,o,r,i,a,c,y,l,s,u,p,d,m,f,g,b,h,P,G,L,T,E,H,A){"use strict";function C(e){const t=e.length,n=new Float64Array(3*t),o=u.IndexDatatype.createTypedArray(t,2*t);let i=0,a=0;for(let r=0;r<t;r++){const c=e[r];n[i++]=c.x,n[i++]=c.y,n[i++]=c.z,o[a++]=r,o[a++]=(r+1)%t}const l=new y.GeometryAttributes({position:new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new c.Geometry({attributes:l,indices:o,primitiveType:c.PrimitiveType.LINES})}function k(e){const t=(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=p.PolygonGeometryLibrary.computeHierarchyPackedLength(t)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=a.defaultValue(e,a.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,n){return n=a.defaultValue(n,0),t[n=p.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,n)]=e.packedLength,t};const _={polygonHierarchy:{}};return k.unpack=function(e,t,n){t=a.defaultValue(t,0);const o=p.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t);t=o.startingIndex,delete o.startingIndex;const r=e[t];return a.defined(n)||(n=new k(_)),n._polygonHierarchy=o,n.packedLength=r,n},k.createGeometry=function(o){const r=o._polygonHierarchy;let a=r.positions;if(a=e.arrayRemoveDuplicates(a,n.Cartesian3.equalsEpsilon,!0),a.length<3)return;if(!i.CoplanarPolygonGeometryLibrary.validOutline(a))return;const y=p.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===y.length)return;const u=[];for(let e=0;e<y.length;e++){const t=new l.GeometryInstance({geometry:C(y[e])});u.push(t)}const d=s.GeometryPipeline.combineInstances(u)[0],m=t.BoundingSphere.fromPoints(r.positions);return new c.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return a.defined(t)&&(e=k.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}}));
