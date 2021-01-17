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
            sm:text-2xl
            sm:pl-4
            text-base
            italic
            font-extrabold
            pl-2
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
            flex
            flex-row
            justify-end
            space-x-2
            text-sm
            pr-2
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