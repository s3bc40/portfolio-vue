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
            bg-prussian
            text-powderBlue
            shadow-lg
    }
    .navbar-title {
        @apply
            text-2xl
            pl-4
            italic
            font-extrabold
    }
    .title-link {
        @apply
            hover:text-honeyYellow
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
            hover:text-honeyYellow
            focus:outline-none
            font-bold
    }
    .active {
        @apply
            text-honeydew
    }
</style>