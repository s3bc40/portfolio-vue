<template>
  <div id="app">
    <the-nav-bar
      :tabs="tabs"
      :currentTab="currentTab"
      @changeComponent="onChangeComponent"
    ></the-nav-bar>
    <div class="components-container">
      <profile id="Profile"></profile>
      <skills id="Skills"></skills>
      <gears id="Gears"></gears>
      <interest id="Interest"></interest>
      <work id="Work"></work>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

import TheNavBar from './components/TheNavBar'
import TheFooter from './components/TheFooter'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Gears from './components/Gears'
import Interest from './components/Interest'
import Work from './components/Work'

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
  },
  data() {
    return {
      tabs: [
        'Profile', 
        'Skills', 
        'Gears',
        'Interest', 
        'Work', 
      ],
      currentTab: 'Profile',
    }
  },
  mounted() {
    // GreenSock ScrollTrigger change active tab Navbar
    for (const tab of this.tabs) {
      ScrollTrigger.create({
        trigger: `#${tab}`,
        onEnter: () => this.currentTab = tab,
        onEnterBack: () => this.currentTab = tab,
        start: "top center",
        end: "bottom center"
      })
    }
  },
  methods: {
    onChangeComponent(tab) {
      this.currentTab = tab
      const idToScroll = `#${tab}`
      gsap.to(window, {duration: 1, scrollTo: {y: idToScroll, offsetY: 80}}) 
    }
  }
}
</script>

<style lang="postcss">
  body {
    @apply
      bg-white
      text-gray-600
  }
  .components-container {
    @apply
      pt-16
      mb-12
      space-y-16
  }
</style>
