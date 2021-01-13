<template>
    <div class="about-content">
        <div class="content-profile">
            <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
            <div class="profile-content">
                <div class="profile-experience">
                    <h1 class="experience-title"><i class="fas fa-hat-wizard"></i> Coding Wizard</h1>
                    <span class="experience-level">Level: {{ currentLevel }}</span>
                    <div class="experience-bar">
                        <div 
                            class="bar-amount" 
                            :style="computeExperienceWidth" 
                            :class="{ 'bar-animation': animate_bar }">
                        </div>
                    </div>
                    <span class="experience-text">{{ currentExperience }}</span>
                </div>
                <about-profile-stats :animate_bar=animate_bar></about-profile-stats>
                <about-profile-data></about-profile-data>
            </div>
        </div>
        <about-gears></about-gears>
        <about-interest></about-interest>
    </div>
</template>

<script>
import moment from 'moment'

import AboutProfileStats from './AboutProfileStats'
import AboutProfileData from './AboutProfileData'
import AboutGears from './AboutGears'
import AboutInterest from './AboutInterest'

export default {
    name: 'About',
    components: {
        AboutProfileStats,
        AboutProfileData,
        AboutGears,
        AboutInterest
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            barClass: 'bar-amount',
            experience_gained: 0,
            experience_all: 0,
            animate_bar: true,
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
        computeExperienceWidth() {
            /* Get your experience bar amount (age) */
            const experience_percent = (100 * this.experience_gained) / this.experience_all
            return {
                width: `${experience_percent.toFixed(1)}%`, 
                }
        }
    },
    mounted() {
        // Compute all experience
       this.computeExperience()
       // Animation bar at start and remove it after
       setInterval(() => this.animate_bar = false, 4000)
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
    },
}
</script>

<style lang="postcss">
    .about-content {
        @apply
            space-y-4
    }
    .content-profile {
        @apply
            md:flex
            md:space-x-4
            px-4
    }
    .profile-img {
        @apply
            md:flex-shrink-0
            md:w-80
            md:h-auto
            md:rounded-lg
            md:translate-y-0
            transform
            w-64
            h-64
            rounded-full
            mx-auto
            shadow-lg
            object-cover
            object-top
    }
    .profile-experience {
        @apply
            flex
            flex-wrap
            space-x-6
            space-y-2
            m-2
    }
    .experience-title {
        @apply
            text-4xl
            text-prussian
            italic
    }
    .experience-level {
        @apply
            text-base
            text-celadonBlue
            font-semibold
    }
    .experience-bar {
        @apply
            w-full
            h-1
            rounded-full
            bg-powderBlue
    }
    .bar-amount {
        @apply 
            h-full
            rounded-full
            bg-prussian
    }
    .experience-text {
        @apply
            text-xs
            text-celadonBlue
            text-justify
    }
    .bar-animation {
        animation: barWidth 2s;
    }
</style>