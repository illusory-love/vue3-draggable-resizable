<template>
  <div class="parent">
    <template v-for="(item) in list">
      <Vue3DraggableResizable
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
        classNameOperation=".oper"
        classNameHandle="my-handle"
        @activated="onActivated(item)"
        @deactivated="onDeactivated"
        @drag-start="print('drag-start', $event)"
        @resize-start="print('resize-start', $event)"
        @dragging="onDragging"
        @resizing="print('resizing', $event)"
        @drag-end="print('drag-end', $event)"
        @resize-end="print('resize-end', $event)"
      >
        {{ item.text }}
      </Vue3DraggableResizable>
      <div v-if="dragObj.show" class="oper abc" :style="{left: dragObj.x, top: dragObj.y}">
        <div class="add">添加</div>
        <div class="edit">编辑</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { nextTick, reactive, ref } from 'vue';
import Vue3DraggableResizable from "./components/Vue3DraggableResizable";

const list = ref<any>([{
  initW: 140,
  initH: 30,
  x: 10,
  y: 50,
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
  x: 100,
  y: 150,
  w: 0,
  h: 0,
  active: false,
  draggable: true,
  resizable: true,
  blur: true,
  isFocus: true,
  text: 'example B'
}])
let data = {} as any;

const dragObj = reactive<any>({
  x: 0,
  y: 0
})

const print = (_val: any, _e?: any) => {
  console.log('print:', _val, _e);
}

const onActivated = async (item: any) => {
  console.log('activated');
  dragObj.show = true;
  data = item;
  await nextTick();
  updatePointer(item.x, item.y);
}
const onDeactivated = () => {
  console.log('deactivated');
  dragObj.show = false;
  data = {};
}

const onDragging = ({x, y}: any) => {
  updatePointer(x, y);
}
const updatePointer = (x: number, y: number) => {
  // 操作元素
  const el = document.querySelector('.oper') as HTMLDivElement;
  const operW = el.offsetWidth;
  const operH = el.offsetHeight;
  // 编辑元素
  const {w: editW, h: editH} = data;

  let _x = x + (editW - operW) / 2;
  let _y = y - operH - 5;

  // 无法显示的顶部
  _y < 0 && (_y = y + editH + 5);

  dragObj.x = _x + 'px';
  dragObj.y = _y + 'px';
}
</script>

<style scoped lang="scss">
.parent {
  width: 375px;
  height: 375px;
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

.oper {
  position: absolute;
  left: 0;
  top: 0;
  font-size: 12px;
  padding: 5px;
  background: #fff;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba($color: #000000, $alpha: .2);
  display: flex;

  > div {
    width: 30px;
  }
}
</style>
