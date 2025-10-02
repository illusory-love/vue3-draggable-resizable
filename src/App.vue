<template>
  <div>
    x:{{ x }} <button @click="x += 10">+</button><button @click="x -= 10">-</button>
  </div>
  <div>
    y:{{ y }}<button @click="y += 10">+</button><button @click="y -= 10">-</button>
  </div>
  <div>
    w:{{ w }}<button @click="w += 10">+</button><button @click="w -= 10">-</button>
  </div>
  <div>
    h: {{ h }}<button @click="h += 10">+</button><button @click="h -= 10">-</button>
  </div>
  <div>active:{{ active }}<br /></div>
  <div class="parent">
    <Vue3DraggableResizable
      :initW="40"
      :initH="80"
      v-model:x="x"
      v-model:y="y"
      v-model:w="w"
      v-model:h="h"
      v-model:active="active"
      :draggable="draggable"
      :resizable="resizable"
      :parent="true"
      :disabledX="false"
      :disabledW="false"
      :disabledH="false"
      :disabledY="false"
      :lockAspectRatio="true"
      :blur="blur"
      :focus="isFocus"
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
      This is a test example
    </Vue3DraggableResizable>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Vue3DraggableResizable from "./components/Vue3DraggableResizable";

const x = ref<number>(0);
const y = ref<number>(0);
const w = ref<number>(0);
const h = ref<number>(0);
const active = ref<boolean>(false);
const draggable = ref<boolean>(false);
const resizable = ref<boolean>(false);
const blur = ref<boolean>(true);
const isFocus = ref<boolean>(true);

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
