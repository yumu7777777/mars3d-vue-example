define(["./defaultValue-69ee94f4","./Matrix2-1509208a","./RuntimeError-ac440aa5","./EllipsoidGeometry-954ef938","./VertexFormat-e68722dd","./ComponentDatatype-a9820060","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-bf323bcf","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./GeometryAttribute-71155085","./GeometryAttributes-1b4134a9","./IndexDatatype-1cbc8622"],(function(e,t,i,r,o,a,n,s,c,d,l,m,u,p){"use strict";function f(i){const o=e.defaultValue(i.radius,1),a={radii:new t.Cartesian3(o,o,o),stackPartitions:i.stackPartitions,slicePartitions:i.slicePartitions,vertexFormat:i.vertexFormat};this._ellipsoidGeometry=new r.EllipsoidGeometry(a),this._workerName="createSphereGeometry"}f.packedLength=r.EllipsoidGeometry.packedLength,f.pack=function(e,t,i){return r.EllipsoidGeometry.pack(e._ellipsoidGeometry,t,i)};const y=new r.EllipsoidGeometry,G={radius:void 0,radii:new t.Cartesian3,vertexFormat:new o.VertexFormat,stackPartitions:void 0,slicePartitions:void 0};return f.unpack=function(i,a,n){const s=r.EllipsoidGeometry.unpack(i,a,y);return G.vertexFormat=o.VertexFormat.clone(s._vertexFormat,G.vertexFormat),G.stackPartitions=s._stackPartitions,G.slicePartitions=s._slicePartitions,e.defined(n)?(t.Cartesian3.clone(s._radii,G.radii),n._ellipsoidGeometry=new r.EllipsoidGeometry(G),n):(G.radius=s._radii.x,new f(G))},f.createGeometry=function(e){return r.EllipsoidGeometry.createGeometry(e._ellipsoidGeometry)},function(t,i){return e.defined(i)&&(t=f.unpack(t,i)),f.createGeometry(t)}}));
