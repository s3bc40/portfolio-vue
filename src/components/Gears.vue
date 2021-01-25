<template>
    <div class="content-gears">
        <h1 class="content-title gears-title">{{ $t('Gears') }}</h1>
        <div class="gears-items">
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-laptop-code logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">VS Code IDE</h2>
                    <p class="item-description" v-html="$t('description_ide')"></p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-coffee logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">{{ $t('coffee') }}</h2>
                    <p class="item-description" v-html="$t('description_coffee')"></p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-glasses logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">{{ $t('glasses') }}</h2>
                    <p class="item-description" v-html="$t('description_glasses')"></p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fab fa-stack-overflow logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Stack-overflow</h2>
                    <p class="item-description" v-html="$t('description_stackOVF')"></p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fab fa-trello logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Trello</h2>
                    <p class="item-description" v-html="$t('description_trello')"></p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-dog logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Yuki</h2>
                    <p class="item-description" v-html="$t('description_yuki')"></p>  
                </div>
            </div>
        </div>
    </div>
</template>

<i18n src="../locales/Titles.json"></i18n>
<i18n src="../locales/Gears.json"></i18n>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'AboutGears',
    mounted() {
        // Animate translation of grid items
        const tl = gsap.timeline({ 
            defaults: {ease: "inout"},
            scrollTrigger: {
                trigger: ".item-logo",
                start: "top center",
            },
            paused:true
        })
        tl.from(".item-logo", {
            opacity:0, 
            duration: 0.5
        })
        .from(".item-info", {
            opacity:0,
            y: 500,
            duration: 1
        })
    }
}
</script>

<style lang="postcss" scoped>
    .content-gears {
        @apply
            w-5/6
            mx-auto
            space-y-2

    }
    .gears-items {
        @apply
            lg:grid-cols-3
            md:grid-cols-2
            grid
            grid-cols-1
            grid-flow-row
            gap-8
    }
    .item-container {
        @apply
            flex
            space-y-2
    }
    .item-logo {
        @apply
            sm:w-14
            sm:h-14
            w-12
            h-12
            flex-shrink-0
            bg-purple-800
            text-white
            text-center
            rounded-md
    }
    .logo-fa {
        @apply
            sm:text-4xl
            text-2xl
            block
            mt-2
    }
    .item-info {
        @apply
            pl-4
            space-y-2
    }
    .item-title {
        @apply
            sm:text-lg
            text-sm
            block
            font-bold
            text-purple-600
    }
    .item-description {
        @apply
            prose-sm
            leading-relaxed
            block
            font-medium
    }
    .item-effect {
        @apply
            text-purple-500
            font-bold
    }
</style>