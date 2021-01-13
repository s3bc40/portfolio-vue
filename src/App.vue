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
import Projects from './components/Projects'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
    About,
    Projects,
    Contact
  },
  data() {
    return {
      tabs: ['About', 'Projects', 'Contact'],
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
      bg-honeydew
      text-prussian
      font-sans 
  }
  .component-container {
    @apply
      pt-16
      mb-12
  }
  @keyframes barWidth {
        from {width: 0%;}
  }
</style>
