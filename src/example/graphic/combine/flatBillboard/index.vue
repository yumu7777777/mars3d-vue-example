<template>
  <mars-dialog :visible="true" right="10" top="10">
    <graphic-layer-state :defaultCount="1000" :enabledDraw="false" />

    <div class="f-mb">
      <a-space>
        <span class="mars-pannel-item-label">样例数据:</span>
        <mars-button @click="addDemoGraphic1">东南风场</mars-button>
      </a-space>
    </div>
  </mars-dialog>
</template>

<script setup lang="ts">
import GraphicLayerState from "@mars/components/mars-sample/graphic-layer-state.vue"
import * as mapWork from "./map.js"

const addDemoGraphic1 = () => {
  mapWork.addDemoGraphic1()
}
</script>
