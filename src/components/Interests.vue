<template>
    <div class="content-interest">
        <h1 class="interest-title">{{ $t('Interests') }}</h1>
        <div class="interest-cards">
            <div class="card">
                <img class="card-img" @load="$emit('loadedEnv')" :src="env_img" alt="Environment">
                <button class="card-title" @click="env_drop = !env_drop">
                    <h2>{{ $t('environment') }}</h2>
                    <i class="far fa-caret-square-down" :class="env_drop ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="env_drop">
                        <p>{{ $t('environment_detail') }}</p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <img class="card-img" @load="$emit('loadedHiking')" :src="hiking_img" alt="Hiking">
                <button class="card-title" @click="hiking_drop = !hiking_drop">
                    <h2>{{ $t('hiking') }}</h2>
                    <i class="far fa-caret-square-down" :class="hiking_drop ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="hiking_drop">
                        <p>{{ $t('hiking_detail') }}</p>
                    </div>
                </transition>
            </div>
            <div class="card">
                <img class="card-img" @load="$emit('loadedGaming')" :src="gaming_img" alt="Gaming">
                <button class="card-title" @click="gaming_drop = !gaming_drop">
                    <h2>{{ $t('gaming') }}</h2>
                    <i class="far fa-caret-square-down" :class="gaming_drop ? 'card-dropped' : 'card-not-dropped'"></i>
                </button>
                <transition name="fade">
                    <div class="card-content" v-show="gaming_drop">
                        <p>{{ $t('gaming_detail') }}</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<i18n src="../locales/Titles.json"></i18n>
<i18n src="../locales/Interests.json"></i18n>

<script>
export default {
    name: 'AboutInterest',
    data() {
        return {
            env_img: 'https://media.giphy.com/media/l1KVcrdl7rJpFnY2s/giphy.gif',
            env_drop: true,
            hiking_img: 'https://media.giphy.com/media/3oxRmGNqKwCzJ0AwPC/giphy.gif', 
            hiking_drop: true,
            gaming_img: 'https://media.giphy.com/media/l8TwxjgFRhDASPGuXc/giphy.gif', 
            gaming_drop: true,
        }
    },
    emits: ['loadedEnv', 'loadedHiking', 'loadedGaming'],
}
</script>

<style lang="postcss" scoped>
    .content-interest {
        @apply
            space-y-2
            w-11/12
            mx-auto
    }
    .interest-cards {
        @apply
            lg:grid-cols-3
            grid
            grid-flow-row
            gap-6
            justify-items-center
    }
    .card {
        @apply
            xl:w-5/6
            lg:w-full
            sm:w-7/12
            w-full
            flex
            flex-col
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
            sm:text-lg
            focus:outline-none
            grid
            grid-cols-2
            bg-purple-600
            text-white
            text-base
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
            prose-sm
            bg-purple-200
            p-4
            h-full
            rounded-b-md
            shadow-xl
            font-medium
    }
</style>