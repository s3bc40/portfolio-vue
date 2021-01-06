<template>
    <div class="component-content">
        <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
        <div class="profile-experience">
            <span class="experience-title"><i class="fas fa-hat-wizard"></i> Coding Wizard</span>
            <span class="experience-level">Level: {{ currentLevel }}</span>
            <div class="experience-bar bar-background">
                <div class="bar-amount" :style="computeExperienceWidth"></div>
            </div>
            <span class="experience-text">{{ currentExperience }}</span>
        </div>
        <div class="profile-stats">
            <!-- Empathy -->
            <div class="stats-container">
                <div class="stats-logo">
                    <i class="fas fa-users-cog"></i>
                </div>
                <div class="stats-name">
                    <span class="stats-txt">Empathy</span>
                </div>
                <div class="stats-bar bar-background">
                    <div class="bar-empathy"></div>
                </div>
            </div>
            <!-- Laziness -->
            <div class="stats-container">
                <div class="stats-logo">
                    <i class="fas fa-bed"></i>
                </div>
                <div class="stats-name">
                    <span class="stats-txt">Laziness</span>
                </div>
                <div class="stats-bar bar-background">
                    <div class="bar-laziness"></div>
                </div>
            </div>
            <!-- Patience -->
            <div class="stats-container">
                <div class="stats-logo">
                    <i class="fas fa-chess"></i>
                </div>
                <div class="stats-name">
                    <span class="stats-txt">Patience</span>
                </div>
                <div class="stats-bar bar-background">
                    <div class="bar-patience"></div>
                </div>
            </div>            
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'About',
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
            this.experience_all = next_birthdate.diff(moment(), 'minutes')
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
            container
            px-4
            space-y-4
    }
    .profile-img {
        @apply
            float-left
            max-w-xs
            mr-4
            border-2
            border-pink-400
            rounded-lg
            ring
            ring-yellow-400
            ring-offset-2
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
            text-gray-800
            capitalize
            italic
    }
    .experience-level {
        @apply
            text-base
            text-gray-700
            font-semibold
    }
    .experience-bar {
        @apply
            w-full
            h-1
            rounded-full
    }
    .bar-background {
        @apply 
            bg-gray-200
    }
    .bar-amount {
        @apply 
            h-full
            rounded-full
            bg-blue-400   
    }
    .experience-text {
        @apply
            text-xs
            text-gray-400
            text-justify
    }
    .profile-stats {
        @apply 
            grid
            grid-cols-1
            grid-flow-row
            space-y-2
    }
    .stats-container {
        @apply
            flex
            space-x-0
            text-gray-800
    }
    .stats-logo {
        @apply
            bg-gray-300
            border
            rounded-l-full
            w-1/12
            p-1
            text-sm
            text-center
    }
    .stats-name {
        @apply
            bg-gray-300
            border
            w-1/6
            p-1
            text-sm
            italic
    }
    .stats-bar {
        @apply
            border
            h-full
            w-full
    }
    .bar-empathy {
        @apply 
            h-full
            w-11/12
            bg-indigo-600     
    }
    .bar-laziness {
        @apply 
            h-full
            w-1/6
            bg-green-300     
    }
    .bar-patience {
        @apply 
            h-full
            w-3/4
            bg-yellow-300     
    }
</style>