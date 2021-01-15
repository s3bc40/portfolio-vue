<template>
    <div class="profile-skills">
        <h1 class="skills-title">Skills</h1>
        <!-- Python -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-python"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Python</span>
            </div>
            <div class="skill-bar">
                <div class="skill-animate w-11/12 bar-fill"></div>
            </div>
        </div>
        <!-- Git -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-git-alt"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Git</span>
            </div>
            <div class="skill-bar">
                <div class="w-10/12 bar-fill skill-animate"></div>
            </div>
        </div>
        <!-- Javascript -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-js-square"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">JavaScript</span>
            </div>
            <div class="skill-bar">
                <div class="w-9/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- Vue.js -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-vuejs"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Vue.js</span>
            </div>
            <div class="skill-bar">
                <div class="w-9/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- Vue.js -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-linux"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Linux</span>
            </div>
            <div class="skill-bar">
                <div class="w-9/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- Bash -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fas fa-terminal"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Bash</span>
            </div>
            <div class="skill-bar">
                <div class="w-8/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- SQL -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fas fa-database"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">SQL</span>
            </div>
            <div class="skill-bar">
                <div class="w-8/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- CSS3 -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-css3-alt"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">CSS3</span>
            </div>
            <div class="skill-bar">
                <div class="w-7/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- PHP -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-php"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">PHP</span>
            </div>
            <div class="skill-bar">
                <div class="w-6/12 bar-fill skill-animate" ></div>
            </div>
        </div>
        <!-- Symfony -->
        <div class="skill-container">
            <div class="skill-logo">
                <i class="fab fa-symfony"></i>
            </div>
            <div class="skill-name">
                <span class="skill-txt">Symfony</span>
            </div>
            <div class="skill-bar">
                <div class="w-6/12 bar-fill skill-animate" ></div>
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
    mounted() {
        // Add ScrollIntoView plugin GSAP
        gsap.from(".skill-animate", {
            scrollTrigger: {
                trigger: ".skill-animate",
                start: "top center"
            },
            scaleX: 0,
            transformOrigin: "left",
            duration: 2,
            delay: 2,
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
            flex-shrink-0
            bg-green-600
            border
            rounded-l-full
            w-1/12
            p-1
            text-lg
            text-center
    }
    .skill-name {
        @apply
            flex-shrink-0
            bg-green-400
            border
            w-32
            p-1
            text-base
            text-center
            font-bold
            italic
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
            h-full
            bg-green-300
    }
</style>