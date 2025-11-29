<template>
  <div class="parent">
    <Vue3DraggableResizable
      v-for="(item, index) in list"
      :key="index"
      :initW="item.initW"
      :initH="item.initH"
      v-model:x="item.x"
      v-model:y="item.y"
      v-model:w="item.w"
      v-model:h="item.h"
      v-model:active="item.active"
      :draggable="item.draggable"
      :resizable="item.resizable"
      :parent="true"
      :disabledX="false"
      :disabledW="false"
      :disabledH="false"
      :disabledY="false"
      :lockAspectRatio="true"
      :blur="item.blur"
      :focus="item.isFocus"
      classNameHandle="my-handle"
      @activated="print('activated')"
      @deactivated="print('deactivated')"
      @drag-start="print('drag-start', $event)"
      @resize-start="print('resize-start', $event)"
      @dragging="print('dragging', $event)"
      @resizing="print('resizing', $event)"
      @drag-end="print('drag-end', $event)"
      @resize-end="print('resize-end', $event)"
    >
      {{ item.text }}
    </Vue3DraggableResizable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Vue3DraggableResizable from "./components/Vue3DraggableResizable";

const list = ref<any>([{
  initW: 140,
  initH: 30,
  x: 10,
  y: 20,
  w: 0,
  h: 0,
  active: false,
  draggable: true,
  resizable: true,
  blur: true,
  isFocus: true,
  text: 'example A'
}, {
  initW: 140,
  initH: 30,
  x: 10,
  y: 80,
  w: 0,
  h: 0,
  active: false,
  draggable: true,
  resizable: true,
  blur: true,
  isFocus: true,
  text: 'example B'
}])

const print = (_val: any, _e?: any) => {
  console.log('print:', _val, _e);
}
</script>

<style scoped lang="scss">
.parent {
  width: 300px;
  height: 300px;
  // position: absolute;
  // top: 100px;
  // left: 200px;
  position: relative;
  border: 1px solid #000;
  user-select: none;

  :deep(.vdr-container) {
    border-color: #999;
  }
}
</style>
