<template>
    <div class="navbar">
      <div class="navbar-title">
        <a class="title-link" href="#">Claro Sebastien</a>
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
          {{ tab }}
        </button>
      </div>
    </div>
</template>

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
    }
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
            text-green-400
            shadow-lg
            z-10
    }
    .navbar-title {
        @apply
            md:text-2xl
            md:pl-4
            sm:text-xl
            sm:pl-2
            text-sm
            italic
            font-extrabold
            pl-1
    }
    .title-link {
        @apply
            text-green-400
    }
    .navbar-components {
        @apply
            md:text-lg
            md:space-x-6
            md:pr-4
            sm:text-sm
            sm:space-x-2
            sm:pr-2
            flex
            flex-row
            justify-end
            space-x-1
            text-xs
            pr-1
    }
    .tab-component {
        @apply
            hover:text-green-800
            focus:outline-none
            transition-colors
            font-bold
    }
    .active {
        @apply
            text-green-600
            transition-colors
    }
</style>