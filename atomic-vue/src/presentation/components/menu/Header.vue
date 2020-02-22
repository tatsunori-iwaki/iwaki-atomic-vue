<template>
  <div class="Header">{{ navModel.title }}</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { NavModel } from "../../../domain/model/menu/NavModel";

@Component
export default class Header extends Vue {
  @Prop()
  private navModel?: NavModel;
}
</script>

<style lang="scss">
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 35px;
  padding: 10px;
  background-color: #000000;
  color: #bbbbbb;
  font-size: 28px;
}
.Contents {
  width: 100%;
  overflow: auto;
}
</style>
