<template>
    <div class="component-content">
        <div class="content-profile">
            <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
            <div class="profile-content">
                <div class="profile-experience">
                    <span class="experience-title"><i class="fas fa-hat-wizard"></i> Coding Wizard</span>
                    <span class="experience-level">Level: {{ currentLevel }}</span>
                    <div class="experience-bar">
                        <div class="bar-amount" :style="computeExperienceWidth"></div>
                    </div>
                    <span class="experience-text">{{ currentExperience }}</span>
                </div>
                <about-profile-stats></about-profile-stats>
                <about-profile-data></about-profile-data>
            </div>
        </div>
        <about-gears></about-gears>
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
                    <transition name="slide-fade">
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
                    <transition name="slide-fade">
                        <div class="card-content" v-show="drop_hiking">
                            The wizard travelled a lot, and still he loves to discover new landscape.
                            Hiking allows him to share great memories with his fellow comrades and his dog.
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
                    <transition name="slide-fade">
                        <div class="card-content" v-show="drop_gaming">
                            Sebastien discovered the world of video games when he was an apprentice.
                            He keeps this hobby to meet new people and to share humorous moments.
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import AboutProfileStats from './AboutProfileStats'
import AboutProfileData from './AboutProfileData'
import AboutGears from './AboutGears'

export default {
    name: 'About',
    components: {
        AboutProfileStats,
        AboutProfileData,
        AboutGears,
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            barClass: 'bar-amount',
            experience_gained: 0,
            experience_all: 0,
            datacollection: null,
            drop_env: false,
            drop_hiking: false,
            drop_gaming: false,
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
        // Fill the data for the Radar chart
        this.fillData()
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
        fillData() {
            /* Fill data for the Radar Chart with personal traits */
            this.datacollection = {
                labels: ['Adaptability', 'Perseverance', 'Patience', 'Honesty', 'Reliability'],
                datasets: [
                    {
                        data: [90, 80, 75, 75, 85]
                    }
                ]
            }
        },
        onClickDrop() {
            if (this.drop_env) {
                return
            }
        }
    },
}
</script>

<style lang="postcss" scoped>
    .component-content {
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
            md:h-full
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
    .content-interest {
        @apply
            bg-oxfordBlue
            text-honeydew
            py-6
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
            grid
            grid-cols-3
            grid-flow-row
            gap-1
    }
    .card {
        @apply
            flex
            flex-col
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
            object-cover
            rounded-t-md
    }
    .card-title {
        @apply
            focus:outline-none
            grid
            grid-cols-2
            bg-celadonBlue
            text-lg
            font-bold
            p-2
            items-center
            text-left
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
            bg-powderBlue
            text-prussian
            prose-sm
            p-4
            h-36
    }
    .slide-fade-enter-active {
        @apply
            transition
            duration-500
            ease-out
    }
    .slide-fade-leave-active {
        @apply
            transition
            duration-200
            ease-in
    }
    .slide-fade-enter-from, 
    .slide-fade-leave-to {
        @apply
            opacity-0
    }
</style>