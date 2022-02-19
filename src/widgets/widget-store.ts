/**
 * 功能示例 的 widget配置（更多请参考基础项目Vue版）
 * @copyright 火星科技 mars3d.cn
 * @author 火星吴彦祖 2022-2-19
 */
import { defineAsyncComponent, markRaw } from "vue"
import { WidgetState } from "@mars/widgets/common/store/widget"
import { StoreOptions } from "vuex"

const store: StoreOptions<WidgetState> = {
  state: {
    widgets: [
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/query-poi/index.vue"))),
        name: "query-poi",
        autoDisable: true
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-basemap/index.vue"))),
        name: "manage-basemap",
        group: "manage"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/manage-layers/index.vue"))),
        name: "manage-layers",
        group: "manage",
        disableOther: ["roamfly"]
      },
      {
        component: markRaw(
          defineAsyncComponent(() => import(/* webpackChunkName: "layer-tree" */ "@mars/widgets/basic/manage-layers/layer-tree.vue"))
        ),
        name: "layer-tree"
      },
      {
        component: markRaw(
          defineAsyncComponent(
            () => import(/* webpackChunkName: "layer-picture-heatmap" */ "@mars/widgets/basic/manage-layers/layer-picture-heatmap.vue")
          )
        ),
        name: "layer-picture-heatmap"
      },
      {
        component: markRaw(
          defineAsyncComponent(
            () => import(/* webpackChunkName: "layer-picture-guihua" */ "@mars/widgets/basic/manage-layers/layer-picture-guihua.vue")
          )
        ),
        name: "layer-picture-guihua"
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/graphic-editor/index.vue"))),
        name: "graphic-editor",
        meta: {
          props: {
            position: {
              left: 50,
              top: 10,
              bottom: 50
            }
          }
        }
      },
      {
        component: markRaw(defineAsyncComponent(() => import("@mars/widgets/basic/tools-button/index.vue"))),
        name: "tools-button",
        disableOther: false,
        autoDisable: false
      }
    ],
    openAtStart: ["tools-button"]
  }
}

export default store
