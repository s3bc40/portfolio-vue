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
          @click="$emit('changeComponent',tab)"
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
            bg-gray-800
            text-white
    }
    .navbar-title {
        @apply
            text-2xl
            pl-4
            italic
            font-extrabold
            text-yellow-400
    }
    .title-link {
        @apply
            hover:text-blue-600
    }
    .navbar-components {
        @apply
            flex
            flex-row
            justify-end
            space-x-6
            pr-4
            text-lg
    }
    .tab-component {
        @apply
            hover:text-blue-500
            focus:outline-none
    }
    .active {
        @apply
            text-yellow-400
    }
</style>