<template>
  <div id="app">
    <transition 
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >  
      <div v-if="onLoading">
        <the-loading-page></the-loading-page>
      </div>
    </transition>
    <div class="locale">
      <select v-model="$i18n.locale">
        <option>en</option>
        <option>fr</option>
      </select>
    </div>
    <the-nav-bar
      :tabs="tabs"
      :currentTab="currentTab"
      @changeComponent="onChangeComponent"
    ></the-nav-bar>
    <div class="components-container">
      <profile 
        id="Profile" 
        :loaded="!onLoading"
        @loadedProfile="imgProfile = true"
      ></profile>
      <skills id="Skills"></skills>
      <gears id="Gears"></gears>
      <interests 
        id="Interests" 
        @loadedEnv="imgEnv = true"
        @loadedHiking="imgHiking = true"
        @loadedGaming="imgGaming = true"
      ></interests>
      <work 
        id="Work"
        @loadedResume="imgResume = true"
        @loadedBot="imgBot = true"
        @loadedBinary="imgBinary = true"
      ></work>
    </div>
    <the-footer></the-footer>
  </div>
</template>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

// import components 
import TheLoadingPage from './components/TheLoadingPage'
import TheNavBar from './components/TheNavBar'
import TheFooter from './components/TheFooter'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Gears from './components/Gears'
import Interests from './components/Interests'
import Work from './components/Work'

export default {
  name: 'App',
  components: {
    TheLoadingPage,
    TheNavBar,
    TheFooter,
    Profile,
    Skills,
    Gears,
    Interests,
    Work,
  },
  data() {
    return {
      tabs: [
        'Profile', 
        'Skills', 
        'Gears',
        'Interests',
        'Work', 
      ],
      currentTab: 'Profile',
      imgProfile: false,
      imgEnv: false,
      imgHiking: false,
      imgGaming: false,
      imgResume: false,
      imgBot: false,
      imgBinary: false,
    }
  },
  mounted() {
    // Hide Scroll bar to avoid animation acitvation
    document.body.classList.add('overflow-hidden')
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
  computed: {
    onLoading() {
      // Check if all images are loaded, else let loading page
      if ((this.imgProfile && this.imgEnv && this.imgHiking && this.imgGaming && this.imgResume && this.imgBot && this.imgBinary)){
        return this.showApplication()
      }
      return true
    }
  },
  methods: {
    showApplication () {
      // When all images are loaded, show ScrollBar and show content
      document.body.classList.remove('overflow-hidden')
      return false
    },
    beforeEnter(el) {
      // Animation entering loading page
      gsap.set(el, {
        opacity:0,
      })
    },
    enter(el, done) {
      // Animation entering loading page
      gsap.to(el, {
        opacity: 100,
        ease: 'inout',
        onComplete: done
      })
    },
    leave(el, done) {
      // Animation leaving loading page
      gsap.to(el, {
        opacity:0,
        ease: 'inout',
        onComplete: done
      })
    },
    onChangeComponent(tab) {
      this.currentTab = tab
      const idToScroll = `#${tab}`
      gsap.to(window, {duration: 1, scrollTo: {y: idToScroll, offsetY: 80}}) 
    }
  }
}
</script>

<style lang="postcss">
  #app {
    @apply
      bg-white
      text-gray-600
      font-sans
      subpixel-antialiased
  }
  .locale {
    @apply
      md:right-6
      sm:right-2
      sm:top-14
      fixed
      top-2
      right-2
      flex
      space-x-1
      place-items-center
      text-sm
      z-20
  }
  .locale select {
    @apply
      focus:outline-none
      bg-purple-600
      rounded-full
      text-white
      font-semibold
      p-1
  }
  .components-container {
    @apply
      pt-16
      mb-12
      space-y-16
  }
</style>
