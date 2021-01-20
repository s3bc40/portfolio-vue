<template>
    <div class="profile-skills">
        <h1 class="skills-title">Skills</h1>
        <!-- Python -->
        <div v-for="skill in skills" :key="skill" class="skill-container">
            <div class="skill-logo">
                <i :class="skill.fa"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">{{ skill.name }}</span>
            </div>
            <div class="skill-bar">
                <div class="skill-animate bar-fill" :style="{ width: skill.width }"></div>
                <div class="bar-percent">{{ skill.width }}</div>
            </div>
        </div>
    </div>
</template>

<script>
// Importing GreenSock
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export default {
    name: 'AboutProfileSkills',
    data() {
        return {
            skills: [
                {name: 'JavaScript', fa: 'fab fa-js-square', width: '56%'},
                {name: 'Vue.js', fa: 'fab fa-vuejs', width: '55%'},
                {name: 'Python', fa: "fab fa-python", width: '54%'},
                {name: 'Git', fa: 'fab fa-git-alt', width: '53%'},
                {name: 'Linux', fa: 'fab fa-linux', width: '45%'},
                {name: 'Bash', fa: 'fas fa-terminal', width: '43%'},
                {name: 'SQL', fa: 'fas fa-database', width: '42%'},
                {name: 'CSS3', fa: 'fab fa-css3-alt', width: '40%'},
                {name: 'PHP', fa: 'fab fa-php', width: '38%'},
                {name: 'Symfony', fa: 'fab fa-symfony', width: '30%'},
            ]
        }
    },
    mounted() {
        const tl = gsap.timeline({ 
            scrollTrigger: {
                trigger: ".skill-animate",
                start: "top center"
            },
        })
        // Add ScrollIntoView plugin GSAP
        tl.from(".skill-animate", {
            scaleX: 0,
            transformOrigin: "left",
            duration: 2,
        })
        // Animate percent text
        .from('.bar-percent',{
            opacity: 0,
            x: -100, 
            duration: 1
        })
    },
}
</script>

<style lang="postcss" scoped>
    .profile-skills {
        @apply 
            grid
            grid-cols-1
            grid-flow-row
            space-y-2
            w-4/5
            mx-auto
    }
    .skill-container {
        @apply
            flex
            space-x-0
            text-white
    }
    .skill-logo {
        @apply
            md:block
            hidden
            bg-purple-600
            border
            rounded-l-full
            w-1/12
            p-1
            text-lg
            text-center
    }
    .skill-name {
        @apply
            md:text-base
            md:rounded-l-none
            md:w-1/5
            sm:text-sm
            bg-purple-400
            border
            p-1
            w-2/5
            text-xs
            rounded-l-full
            text-center
            font-semibold
            italic
            justify-center
    }
    .skill-bar {
        @apply
            flex
            space-x-1
            border
            h-full
            w-full
            bg-gray-200
    }
    .bar-fill {
        @apply
            hover:bg-purple-600
            h-full
            bg-purple-300
            transition-colors
    }
    .bar-percent {
        @apply
            self-center
            text-xs
            text-gray-400
    }
</style>