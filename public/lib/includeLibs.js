/**
 * 第3方公共类库配置文件
 *
 * @copyright 火星科技 mars3d.cn
 * @author 木遥 2021-11-26
 */
window.configLibs = {
  //////////////////////////Mars3D及其插件////////////////////////
  mars3d: [
    // 三维地球“主库”
    "Cesium/Widgets/widgets.css", // cesium
    "Cesium/Cesium.js",
    "turf/turf.min.js",
    "mars3d/mars3d.css", // mars3d
    "mars3d/mars3d.js"
  ],

  "mars3d-space": [
    // 卫星插件
    "mars3d/plugins/space/mars3d-space.js"
  ],
  "mars3d-echarts": [
    // echarts支持插件
    "echarts/echarts.min.js",
    "echarts/echarts-gl/echarts-gl.min.js",
    "mars3d/plugins/echarts/mars3d-echarts.js"
  ],
  "mars3d-mapv": [
    // mapv支持插件
    "mapV/mapv.min.js",
    "mars3d/plugins/mapv/mars3d-mapv.js"
  ],
  "mars3d-heatmap": [
    // heatmap热力图支持插件
    "mars3d/plugins/heatmap/heatmap.js",
    "mars3d/plugins/heatmap/mars3d-heatmap.js"
  ],
  "mars3d-wind": [
    // 风场图层插件
    "mars3d/plugins/wind/netcdfjs.js", // m10_windLayer解析nc
    "mars3d/plugins/wind/mars3d-wind.js"
  ],
  "mars3d-tdt": [
    // 天地图三维
    "mars3d/plugins/tdt/mars3d-tdt.js"
  ],
  "mars3d-supermap": [
    //超图S3M服务
    "mars3d/plugins/supermap/SuperMap3D.js", //s3m支持原生cesium的独立插件
    "mars3d/plugins/supermap/mars3d-supermap.js",//mars3d-supermap简化调用封装
  ],

  //////////////////////////cesium相关第3方插件////////////////////////
  "cesium-pbf": [
    // pbf矢量瓦片支持
    "mars3d/thirdParty/pbf/ol.js",
    "mars3d/thirdParty/pbf/olms.js",
    "mars3d/thirdParty/pbf/mvt.js",
    "mars3d/thirdParty/pbf/style/MapboxStreetsV6.js"
  ],
  "cesium-weiVectorTile": [
    // 项目矢量瓦片方式加载GeoJson插件
    "mars3d/thirdParty/weiVectorTile/CesiumVectorTile.min.js",
    "mars3d/thirdParty/weiVectorTile/WeiVectorTileLayer.js"
  ],
  "cesium-meshVisualizer": [
    //ammo物理引擎支持
    "three/three.js",
    "ammo/ammo.js",
    "ammo/ex/ConvexObjectBreaker.js", //仅convexBreak使用
    "ammo/ex/QuickHull.js", //仅convexBreak使用
    "ammo/ex/geometries/ConvexGeometry.js", //仅convexBreak使用
    "mars3d/thirdParty/meshVisualizer/CesiumMeshVisualizer.js"
  ],
  "cesium-sensorVolumes": [
    //支持agi_conicSensor，agi_customPatternSensor和agi_rectangularSensor展示的czml插件
    "mars3d/thirdParty/sensorVolumes/cesium-sensor-volumes.js"
  ],
  'olcesium': [
    "ol/ol.css",
    "ol/ol.js",
    "ol/ol-cesium/olcesium.js",
  ],

  //////////////////////////mars2d及其插件////////////////////////
  mars2d: [
    //地图 主库
    "https://unpkg.com/leaflet/dist/leaflet.css", //leaflet
    "https://unpkg.com/leaflet/dist/leaflet.js",
    "http://mars2d.cn/lib/mars2d/mars2d.css", //mars2d
    "http://mars2d.cn/lib/mars2d/mars2d.js",
    "http://mars2d.cn/lib/mars2d/plugins/esri/mars2d-esri.js"
  ],

  //////////////////////////其他地图渲染相关库////////////////////////
  echarts: ["echarts/echarts.min.js", "echarts/dark.js"],
  "echarts-gl": ["echarts/echarts.min.js", "echarts/echarts-gl/echarts-gl.min.js"],
  "echarts-liquidfill": ["echarts/echarts.min.js", "echarts/echarts-liquidfill/echarts-liquidfill.js"],
  terraformer: ["terraformer/terraformer-1.0.9.min.js", "terraformer/terraformer-wkt-parser-1.2.0.min.js"],
  kmlGeojson: [
    // 项目KML/KMZ解析加载GeoJson插件
    "kml/kml-geojson.js"
  ],
  kriging: ["kriging/kriging.min.js"],
  three: ["three/three.js"],
  hls: ["video/hls/hls.js"]
}

// 官网发布时用CDN服务
if (window.location.hostname.indexOf("mars") !== -1) {
  window.cdnLibsPath = "http://cdn.marsgis.cn/lib/"
}

//本地测试  localStorage.setItem("muyao-debugger",1)
if (localStorage.getItem("muyao-debugger") === "1") {
  for (let key in configLibs) {
    if (key.startsWith("mars3d")) {
      let arrUrl = configLibs[key]
      for (let index = 0; index < arrUrl.length; index++) {
        const url = arrUrl[index]
        const fileName = url?.substring(url.lastIndexOf("/") + 1, url.length)
        if (fileName.startsWith("mars3d")) {
          arrUrl[index] = arrUrl[index].replace(".js", "-src.js").replace(".css", "-src.css")
        } else  if (fileName.indexOf("Cesium")!=-1) {
          // arrUrl[index] = arrUrl[index].replace("Cesium", "CesiumUnminified")
        }
      }
    }
  }
  console.log("正在使用SDK调试版本")
}
