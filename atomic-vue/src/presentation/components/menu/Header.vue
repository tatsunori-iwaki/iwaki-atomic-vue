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
@import "@/presentation/styles/menu/Header.scss";
</style>
