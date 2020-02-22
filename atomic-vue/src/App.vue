<template>
  <div id="app">
    <Header :nav-model="navModel" />
    <Nav
      :nav-models="navModels"
      @click-router-link-event="handlClickRouterLinkEvent"
    />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavModel } from "./domain/model/menu/NavModel";

@Component({
  components: {
    Header: () => import("@/presentation/components/menu/Header.vue"),
    Nav: () => import("@/presentation/components/menu/Nav.vue"),
    HelloWorld: () => import("@/presentation/components/HelloWorld.vue")
  }
})
export default class App extends Vue {
  private navModels: NavModel[] = [];
  private navModel: NavModel = new NavModel("/", "home");

  created() {
    this.navModels.push(new NavModel("/", "home"));
    this.navModels.push(new NavModel("/about", "about"));
  }

  private handlClickRouterLinkEvent(navModel: NavModel) {
    this.navModel = navModel;
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Amatic+SC:700");

html {
  background: #222222;
}
#app {
  background: #222222;
  color: #bbbbbb;
  font-family: "Amatic SC", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
