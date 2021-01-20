<template>
    <div class="content-work">
        <h1 class="work-title">Work</h1>
        <p class="work-subtitle">
            Here are a some of my personnal projects. <br>Check other projects on my Github
            <a href="https://github.com/s3bc40" target="_blank"><i class="fab fa-github-alt git-link"></i></a>
        </p>
        <div class="work-projects">
            <button class="project">
                <a href="https://s3bc40.github.io/" target="_blank">
                    <img src="../assets/img/resumeMD.png" class="project-image" alt="Resume Markdown">
                    <div class="project-text">
                        <h2 class="text-title">
                            Resume Markdown
                        </h2>
                        <p class="text-content">
                            Github Pages maintained by Jekyll to render markdown
                            as HTML page. I used Jekyll (Ruby) locally to work on
                            it and I took Sass for styling the website. My resume
                            is online and printable as a pdf, in french or english.
                        </p>
                        <p class="text-status">Status : Online and updated</p> 
                    </div>
                </a>
            </button>
            <button class="project">
                <a href="https://github.com/s3bc40/teague-bot" target="_blank">
                    <img src="../assets/img/teagueBot.png" class="project-image" alt="Teague Bot Discord">
                    <div class="project-text">
                        <h2 class="text-title">
                            Discord bot Teague
                        </h2>
                        <p class="text-content">
                            Bot deployed on Heroku and on our Discord server.
                            Launched on a Node server and developed with the library Discord.js 
                            to interact with Discord. It is still a work in progress but some
                            command are already implemented.
                        </p>
                        <p class="text-status">Status : Online and work in progres</p>
                    </div>
                </a>
            </button>
            <button class="project">
                <a href="https://s3bc40.github.io/binary-converter" target="_blank">
                    <img src="../assets/img/binary.png" class="project-image" alt="Binary Converter">
                    <div class="project-text">
                        <h2 class="text-title">
                            Binary converter
                        </h2>
                        <p class="text-content">
                            First step with Vue.js to understand how it works.
                            A simple binary converter from binary to number,
                            number to binary or text to binary. It is a single page
                            application, developed with Vue CLI.
                        </p>
                        <p class="text-status">Status : Online and updated</p>
                    </div>
                </a>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Work',
}
</script>

<style lang="postcss" scoped>
    .content-work {
        @apply
            space-y-2
            w-11/12
            mx-auto
    }
    .work-subtitle {
        @apply
            sm:prose
            prose-sm
            mx-auto
            text-center
            font-medium
    }
    .git-link {
        @apply
            sm:text-2xl
            hover:bg-purple-800
            py-1
            px-2
            bg-purple-600
            text-white
            text-xl
            rounded-full
            transition-colors

    }
    .work-projects {
        @apply
            lg:grid-cols-3
            grid
            grid-cols-1
            grid-flow-row
            gap-6
            justify-items-center
    }
    .project {
        @apply
            focus:outline-none
            relative
            rounded-lg
            shadow-lg
            border
            border-gray-200
            max-w-md
    }
    .project-image {
        @apply
            rounded-lg
            object-cover
            w-full
    }
    .project-text {
        @apply
            hover:opacity-100
            hover:scale-y-100
            absolute
            top-0
            flex
            flex-col
            items-center
            justify-center
            h-full
            w-full
            bg-purple-600
            transition-all
            transform
            opacity-0
            scale-y-75
            origin-bottom
            rounded-lg
    }
    .text-title {
        @apply
            text-2xl
            text-white
            font-bold
    }
    .text-content {
        @apply
            prose-sm
            text-center
            text-white
            p-2
            font-medium
    }
    .text-status {
        @apply
            text-xs
            text-white
            font-normal
            italic
    }
</style>