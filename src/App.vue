<template>
  <div id="app">
    <div v-if="isLoading">
      <the-loading-page></the-loading-page>
    </div>
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
        :imgProfile="imgs.imgProfile"
        :loaded="!isLoading"
      ></profile>
      <skills id="Skills"></skills>
      <gears id="Gears"></gears>
      <interests 
        id="Interests" 
        :imgEnv="imgs.imgInterestsEnv"
        :imgHiking="imgs.imgInterestsHiking"
        :imgGaming="imgs.imgInterestsGaming"
      ></interests>
      <work 
        id="Work"
        :imgResume="imgs.imgWorkResume"
        :imgBot="imgs.imgWorkBot"
        :imgBinary="imgs.imgWorkBinary"
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
      isLoading: true,
      tabs: [
        'Profile', 
        'Skills', 
        'Gears',
        'Interests',
        'Work', 
      ],
      currentTab: 'Profile',
      imgs: {
        imgProfile: '/assets/img/profile_pic.png', 
        imgInterestsEnv: 'https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif',
        imgInterestsHiking: 'https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif', 
        imgInterestsGaming: 'https://media.giphy.com/media/l8TwxjgFRhDASPGuXc/giphy.gif', 
        imgWorkResume: '/assets/img/resumeMD.png',
        imgWorkBot: '/assets/img/teagueBot.png',
        imgWorkBinary: '/assets/img/binary.png',
      }
    }
  },
  mounted() {
    // Loading page of 5 secondes
    this.loadingApp()
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
    loadingApp() {
      // Hide Scroll bar to avoid animation acitvation
      document.body.classList.add('overflow-hidden')
      // Preload all imgs with the Image object
      for (const key in this.imgs) {
        const preloadImg = new Image()
        preloadImg.onload = () => {return true}
        preloadImg.src = this.imgs[key]
      }
      // When all img are loaded (add 2 sec of intervall)
      setInterval(() => {
        document.body.classList.remove('overflow-hidden')
        this.isLoading = false
      }, 2000)
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
