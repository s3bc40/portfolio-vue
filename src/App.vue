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
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'

export default {
  name: 'App',
  components: {
    TheNavBar,
    About,
    Projects,
    Blog
  },
  data() {
    return {
      tabs: ['About', 'Projects', 'Blog'],
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
</style>
