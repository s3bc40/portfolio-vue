<template>
    <div class="about-content">
        <div class="content-profile">
            <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
            <p class="profile-intro">
                I'm just an average guy, with an average life, but with <b class="text-green-400">AWESOME</b> coding skills!
                I also have a dog, so if you are team dog I already love you !
            </p>
            <div class="profile-experience">
                <h1 class="experience-title"><i class="fas fa-code"></i> Web Developer</h1>
                <span class="experience-level">Level: {{ currentLevel }}</span>
                <div class="experience-bar">
                    <div 
                        class="bar-amount exp-animate">
                    </div>
                </div>
                <span class="experience-text">{{ currentExperience }}</span>
            </div>
            <about-profile-traits></about-profile-traits>
        </div>
        <about-profile-skills></about-profile-skills>
        <about-gears></about-gears>
        <about-interest></about-interest>
    </div>
</template>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

import moment from 'moment'

import AboutProfileTraits from './AboutProfileTraits'
import AboutProfileSkills from './AboutProfileSkills'
import AboutGears from './AboutGears'
import AboutInterest from './AboutInterest'

export default {
    name: 'About',
    components: {
        AboutProfileSkills,
        AboutProfileTraits,
        AboutGears,
        AboutInterest
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            barClass: 'bar-amount',
            experience_gained: 0,
            experience_all: 0,
        }
    },
    computed: {
        currentLevel() {
            /* Get your age as a Level of RPG */
            return moment().diff(this.birthday, 'years')
        },
        currentExperience() {
            /* Get your amount of experience (your age) in minutes  */
            return `${this.experience_gained} / ${this.experience_all} next level`
        },
    },
    mounted() {
        // Compute all experience
       this.computeExperience()
       // Animate experience bar GreenSock
       gsap.fromTo('.exp-animate',{scaleX: 0, transformOrigin: "left",}, {
           width: this.computeExperienceWidth(),
           scaleX: 1,
           duration: 2,
           delay: 2
       })
    },
    methods: {
        computeExperience() {
            /* Compute experience gained each year from your birthdate */
            // Init start and end date difference
            const last_birthdate = this.birthday.clone()
            last_birthdate.set('years', moment().year() - 1)
            const next_birthdate = this.birthday.clone()
            next_birthdate.set('years', moment().year())

            this.experience_gained = moment().diff(last_birthdate, 'minutes')
            this.experience_all = next_birthdate.diff(last_birthdate, 'minutes')
        },
        computeExperienceWidth() {
            /* Get your experience bar amount (age) */
            const experience_percent = (100 * this.experience_gained) / this.experience_all
            return `${experience_percent.toFixed(1)}%`
        }
    },
}
</script>

<style lang="postcss" scoped>
    .about-content {
        @apply
            space-y-24
    }
    .content-profile {
        @apply
            space-y-2
    }
    .profile-img {
        @apply
            w-64
            h-64
            rounded-full
            mx-auto
            object-cover
            object-top
    }
    .profile-intro {
        @apply
            text-center
            prose
            mx-auto
    }
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