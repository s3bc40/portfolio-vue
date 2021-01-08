<template>
    <div class="component-content">
        <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
        <div class="profile-experience">
            <span class="experience-title"><i class="fas fa-hat-wizard"></i> Coding Wizard</span>
            <span class="experience-level">Level: {{ currentLevel }}</span>
            <div class="experience-bar">
                <div class="bar-amount" :style="computeExperienceWidth"></div>
            </div>
            <span class="experience-text">{{ currentExperience }}</span>
        </div>
        <about-profile-stats></about-profile-stats>
        <div class="profile-data">
            <div class="data-skills p-2">
                <div class="skill">
                    <i class="fab fa-vuejs"></i>
                    <span class="skill-text">Vue.js:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="skill">
                    <i class="fab fa-python"></i>
                    <span class="skill-text">Django:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="skill">
                    <i class="fab fa-css3"></i>
                    <span class="skill-text">Tailwind:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="skill">
                    <i class="fas fa-database"></i>
                    <span class="skill-text">SQL:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="skill">
                    <i class="fas fa-terminal"></i>
                    <span class="skill-text">Bash:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
                <div class="skill">
                    <i class="fab fa-linux"></i>
                    <span class="skill-text">Linux:</span>
                    <div class="skill-star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <i class="far fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="data-details">
                <span class="details-title">Lore</span>
                <span class="details-content">
                    Sebastien, the coding wizard, come from the magical realm
                    the Landes. His powers are fueled by the mystical forest of pines 
                    and the unlimited cornfields.
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

import AboutProfileStats from './AboutProfileStats'

export default {
    name: 'About',
    components: {
        AboutProfileStats
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            barClass: 'bar-amount',
            experience_gained: 0,
            experience_all: 0,
            datacollection: null,
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
        }
    },
}
</script>

<style lang="postcss" scoped>
    .component-content {
        @apply
            px-4
            space-y-4
    }
    .profile-img {
        @apply
            lg:float-left
            max-w-xs
            mr-4
            rounded-lg
            shadow-lg
    }
    .profile-experience {
        @apply
            flex
            flex-wrap
            space-x-6
            space-y-2
    }
    .experience-title {
        @apply
            text-4xl
            text-prussian
            capitalize
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
    .profile-data {
        @apply
            grid
            grid-cols-2
            grid-rows-3
            gap-4
    }
    .data-skills {
        @apply
            grid
            grid-cols-2
            gap-4
            p-6
            rounded-b-lg
            bg-celadonBlue
            text-honeydew
            border-2
            border-honeydew
            ring
            ring-powderBlue            
    }
    .skill {
        @apply
            flex
            flex-wrap
            place-content-evenly
    }
    .skill-text {
        @apply
            flex-shrink-0
            w-20
            text-center
            self-start
    }
    .skill-star {
        @apply
            text-sm
            text-honeydew 
            space-x-0        
    }
    .data-details {
        @apply
            row-span-3
            prose-sm
    }
    .details-title {
        @apply
            block
            text-2xl
            text-center
            italic
            font-extrabold
            text-honeyYellow
    }
</style>