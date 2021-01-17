<template>
    <div class="profile-experience">
        <h1 class="experience-title"><i class="fas fa-code"></i> Web Developer</h1>
        <span class="experience-level">Level: {{ current_level }}</span>
        <div class="experience-bar">
            <div 
                class="bar-amount exp-animate">
            </div>
        </div>
        <span class="experience-text">{{ currentExperience }}</span>
    </div>
</template>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default {
    name: "ProfileBarExperience",
    props: {
        current_level: {
            type: Number
        },
        experience_gained: {
            type: Number
        },
        experience_all: {
            type: Number
        }
    },
    computed: {
        currentExperience() {
            /* Get your amount of experience (your age) in minutes  */
            return `${this.experience_gained} / ${this.experience_all} next level`
        },
    },
    updated() {
        // Animate experience bar GreenSock
        gsap.fromTo('.exp-animate',{
            scaleX: 0, 
            transformOrigin: "left",
            width: this.computeExperienceWidth()
        },
        {
            scaleX: 1,
            duration: 2,
            delay: 2
        })
    },
    methods: {
        computeExperienceWidth() {
            /* Get your experience bar amount (age) */
            const experience_percent = (100 * this.experience_gained) / this.experience_all
            return `${experience_percent.toFixed(1)}%`
        }
    }
}
</script>

<style lang="postcss" scoped>
    .profile-experience {
        @apply
            flex
            flex-wrap
            space-x-6
            space-y-2
            w-4/5
            mx-auto
            place-content-center
    }
    .experience-title {
        @apply
            text-4xl
            text-green-600
            italic
    }
    .experience-level {
        @apply
            text-base
            text-gray-400
            font-semibold
            self-center
    }
    .experience-bar {
        @apply
            w-full
            h-1
            rounded-full
            bg-green-300
    }
    .bar-amount {
        @apply 
            h-full
            rounded-full
            bg-green-600
    }
    .experience-text {
        @apply
            text-xs
            text-gray-400
            text-justify
    }
</style>