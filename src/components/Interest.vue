<template>
    <div class="content-interest">
        <h1 class="interest-title">Interests</h1>
        <div class="interest-cards">
            <div class="card">
                <div class="card-img">
                    <img src="https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif" alt="Environment">
                </div>
                <button class="card-title" @click="drop_env = !drop_env">
                    <h2>Environment</h2>
                    <i class="far fa-caret-square-down" :class="drop_env ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_env">
                        <p>
                            Due to his strong connection with Nature, Sebastien seeks new challenges
                            in favor of ecology. He enrolled to the guild of "Close to Zero Waste".
                        </p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif" alt="Hiking">
                </div>
                <button class="card-title" @click="drop_hiking = !drop_hiking">
                    <h2>Hiking</h2>
                    <i class="far fa-caret-square-down" :class="drop_hiking ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_hiking">
                        <p>
                            Hiking is a great way to do physical activity and to discover new landscape.
                            It allows him to share great memories with his comrades and his dog.
                        </p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <div class="card-img">
                    <img src="https://media.giphy.com/media/l8TwxjgFRhDASPGuXc/giphy.gif" alt="Gaming">
                </div>
                <button class="card-title" @click="drop_gaming = !drop_gaming">
                    <h2>Gaming</h2>
                    <i class="far fa-caret-square-down" :class="drop_gaming ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="drop_gaming">
                        <p>
                            Sebastien discovered the world of video games when he was an apprentice.
                            He keeps this hobby to meet new people and to share humorous moments.
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
            px-4
    }
    .interest-title {
        @apply
            md:text-center
            inline-block
            w-full
            text-4xl
            italic
            mb-4
    }
    .interest-cards {
        @apply
            md:grid-cols-3
            grid
            grid-flow-row
            gap-2
            px-6
    }
    .card {
        @apply
            md:w-full
            sm:w-96
            flex
            flex-col
            w-72
            h-full
            border-powderBlue
            place-self-center
    }
    .card-img {
        @apply
            w-full
    }
    .card-img > img {
        @apply
            w-full
            h-80
            place-self-center
            object-fill
            rounded-t-md
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