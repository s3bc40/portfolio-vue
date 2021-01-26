<template>
    <div class="content-profile">
        <img class="profile-img" @load="$emit('loadedProfile')" :src="imgProfile" alt="Seb Claro">
        <p class="profile-intro" v-html="$t('profile_intro')"></p>
        <div class="profile-experience">
            <h1 class="experience-title"><i class="fas fa-code"></i> {{ $t('profile_job') }}</h1>
            <span class="experience-level">
                {{ $t('profile_level') }}: {{ currentLevel }} {{ $t('profile_from') }} {{ birthday.format('MM-YYYY') }}
            </span>
            <div class="experience-bar">
                <div 
                    class="bar-amount exp-animate" :style="experienceWidth">
                </div>
            </div>
            <span class="experience-text">{{ currentExperience }} {{ $t('profile_level_next') }}</span>
        </div>
        <profile-traits></profile-traits>
    </div>
</template>

<i18n src="../locales/Profile.json"></i18n>

<script>
import moment from 'moment'
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

import ProfileTraits from './ProfileTraits'

export default {
    name: 'Profile',
    components: {
        ProfileTraits
    },
    props: {
        loaded: {
            type: Boolean
        }
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            currentLevel: 0,
            experience_gained: 0,
            experience_all: 0,
            imgProfile: '/assets/img/profile_pic.png'
        }
    },
    mounted() {
        //  Compute all experience
        this.computeExperience()
        this.computeLevel()
    },
    emits: ['loadedProfile'],
    computed: {
        currentExperience() {
            /* Get your amount of experience (your age) in minutes  */
            return `${this.experience_gained} / ${this.experience_all}`
        },
        experienceWidth() {
            /* Get your experience bar amount (age) */
            const experience_percent = (100 * this.experience_gained) / this.experience_all
            return { width: `${experience_percent.toFixed(1)}%` }
        },
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
        computeLevel() {
            /* Get your age as a Level of RPG */
            this.currentLevel =  moment().diff(this.birthday, 'years')
        },
    },
}
</script>

<style lang="postcss" scoped>
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
            sm:prose
            prose-sm
            w-5/6
            text-center
            mx-auto
            font-medium
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
            md:text-4xl
            text-2xl
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
            bg-purple-300
    }
    .bar-amount {
        @apply 
            h-full
            rounded-full
            bg-purple-600
    }
    .experience-text {
        @apply
            text-xs
            text-gray-400
            text-justify
    }
</style>