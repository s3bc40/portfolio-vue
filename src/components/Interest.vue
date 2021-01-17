<template>
    <div class="content-interest">
        <h1 class="interest-title">Interests</h1>
        <div class="interest-cards">
            <div class="card">
                <img class="card-img" src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif" alt="Environment">
                <button class="card-title" @click="drop_env = !drop_env">
                    <h2>Environment</h2>
                    <i class="far fa-caret-square-down" :class="drop_env ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_env">
                        <p>
                            Sustainable development is the main challenge of our century. I am searching
                            for new challenges in favor of ecology or social purposes.
                        </p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <img class="card-img" src="https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif" alt="Hiking">
                <button class="card-title" @click="drop_hiking = !drop_hiking">
                    <h2>Hiking</h2>
                    <i class="far fa-caret-square-down" :class="drop_hiking ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_hiking">
                        <p>
                            Hiking is a great way to do physical activity and to discover new landscape.
                            I can share great memories with my friends, my family and my dog.
                        </p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <img class="card-img" src="https://media.giphy.com/media/l8TwxjgFRhDASPGuXc/giphy.gif" alt="Gaming">
                <button class="card-title" @click="drop_gaming = !drop_gaming">
                    <h2>Gaming</h2>
                    <i class="far fa-caret-square-down" :class="drop_gaming ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_gaming">
                        <p>
                            Geek since my childhood, I am still amazed by the evolution of gaming.
                            This hobby is great to meet new people and to share humorous moments.
                        </p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutInterest',
    data() {
        return {
            drop_env: true,
            drop_hiking: true,
            drop_gaming: true,
        }
    },
}
</script>

<style lang="postcss" scoped>
    .content-interest {
        @apply
            space-y-2
            px-4
    }
    .interest-cards {
        @apply
            lg:grid-cols-3
            grid
            grid-flow-row
            gap-6
            px-6
            place-content-center
    }
    .card {
        @apply
            flex
            flex-col
            max-w-md
            h-auto
    }
    .card-img {
        @apply
            flex-shrink-0
            h-60
            object-cover
            rounded-t-lg
    }
    .card-title {
        @apply
            focus:outline-none
            grid
            grid-cols-2
            bg-green-600
            text-white
            text-lg
            font-bold
            p-2
            items-center
            text-left
            shadow-xl
    }
    .card-title > .far {
        @apply
            justify-self-end
    }
    .card-dropped {
        @apply
            transform
            transition-transform
            rotate-180
    }
    .card-not-dropped {
        @apply
            transform
            transition-transform
            rotate-0
    }
    .card-content {
        @apply
            bg-green-200
            prose-sm
            p-4
            h-full
            rounded-b-md
            shadow-xl
    }
    .fade-enter-active {
        @apply
            transition
            duration-500
            ease-out
    }
    .fade-leave-active {
        @apply
            transition
            duration-200
            ease-in
    }
    .fade-enter-from, 
    .fade-leave-to {
        @apply
            opacity-0
    }
</style>