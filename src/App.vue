<template>
  <div id="app">
    <TheNavBar
      :tabs="tabs"
      :currentTab="currentTab"
      @changeComponent="onChangeComponent"
    />
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
      bg-gray-100
  }
  .component-container {
    @apply
      pt-16
  }
</style>
