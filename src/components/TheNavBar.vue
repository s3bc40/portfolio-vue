<template>
    <div class="navbar">
      <div class="navbar-title">
        <a class="title-link" href="https://s3bc40portfolio.netlify.app/">Claro Sebastien</a>
      </div>
      <div class="navbar-components">
        <button 
          v-for="tab in tabs"
          :key="tab"
          :class="['tab-component', {
            active: currentTab === tab
          }]"
          @click="$emit('changeComponent', tab)"
          >
          {{ $t(tab) }}
        </button>
      </div>
    </div>
</template>

<i18n src="../locales/Titles.json"></i18n>

<script>
export default {
    name: 'TheNavBar',
    props: {
        tabs: {
            type: Array,
            default: () => {
                return []
            }
        },
        currentTab: String
    },
    emits: ['changeComponent']
}
</script>

<style lang="postcss" scoped>
    .navbar {
        @apply
            fixed
            grid
            grid-cols-2
            w-screen
            p-2
            bg-white
            text-purple-400
            shadow-lg
            z-10
    }
    .navbar-title {
        @apply
            md:text-2xl
            md:pl-4
            sm:pl-2
            text-xl
            italic
            pl-1
            font-extrabold
    }
    .title-link {
        @apply
            text-purple-400
    }
    .navbar-components {
        @apply
            md:text-lg
            md:space-x-6
            md:pr-4
            sm:flex
            sm:text-sm
            sm:space-x-2
            sm:pr-2
            hidden
            flex-row
            justify-end
            space-x-1
            text-xs
            pr-1
    }
    .tab-component {
        @apply
            hover:text-purple-800
            focus:outline-none
            transition-colors
            font-extrabold
    }
    .active {
        @apply
            text-purple-600
            transition-colors
    }
</style>