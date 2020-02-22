<template>
  <div>
    <input id="nav_check" type="checkbox" role="button" title="menu" />
    <label
      for="nav_check"
      class="burger wrapper"
      aria-hidden="true"
      title="menu"
    >
      <span class="burger box">
        <span class="burger inner"></span>
      </span>
    </label>
    <nav>
      <ul>
        <li v-for="navModel in navModels" :key="navModel.uri">
          <router-link
            :to="navModel.uri"
            @click.native="clickRouterLinkEvent(navModel)"
            v-text="navModel.title"
          />
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import { NavModel } from "../../../domain/model/menu/NavModel";

@Component
export default class Nav extends Vue {
  @Prop()
  private navModels?: NavModel[];

  @Emit("click-router-link-event")
  private clickRouterLinkEvent(navModel: NavModel) {
    return navModel;
  }
}
</script>

<style lang="scss">
@import "@/presentation/styles/menu/Nav.scss";
</style>
