<template>
  <div id="app">
    <the-nav-bar
      :tabs="tabs"
      :currentTab="currentTab"
      @changeComponent="onChangeComponent"
    ></the-nav-bar>
    <div class="components-container">
      <profile></profile>
      <skills></skills>
      <gears></gears>
      <interest></interest>
      <work></work>
      <contact></contact>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'
import TheFooter from './components/TheFooter'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Gears from './components/Gears'
import Interest from './components/Interest'
import Work from './components/Work'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
    Profile,
    Skills,
    Gears,
    Interest,
    Work,
    Contact
  },
  data() {
    return {
      tabs: [
        'Profile', 
        'Skills', 
        'Gears',
        'Interest', 
        'Work', 
        'Contact'
      ],
      currentTab: 'Profile',
    }
  },
  methods: {
    onChangeComponent(tab) {
      this.currentTab = tab
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
  .components-container {
    @apply
      pt-16
      mb-12
      space-y-16
  }
</style>
