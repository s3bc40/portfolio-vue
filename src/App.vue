<template>
  <div id="app">
    <the-nav-bar
      :tabs="tabs"
      :currentTab="currentTab"
      @changeComponent="onChangeComponent"
    ></the-nav-bar>
    <keep-alive>
      <component class="component-container" :is="currentTab"></component>
    </keep-alive>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'
import TheFooter from './components/TheFooter'

import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
    About,
    Work,
    Contact
  },
  data() {
    return {
      tabs: ['About', 'Work', 'Contact'],
      currentTab: 'About',
    }
  },
  methods: {
    onChangeComponent(componentName) {
      this.currentTab = componentName;
    }
  }
}
</script>

<style lang="postcss">
  body {
    @apply
      bg-white
      text-black
  }
  .component-container {
    @apply
      pt-16
      mb-12
  }
</style>
