<template>
    <div class="content-work">
        <h1 class="work-title">{{ $t('Work') }}</h1>
        <p class="work-subtitle">
            {{ $t('work_subtitle') }}
            <a href="https://github.com/s3bc40" target="_blank"><i class="fab fa-github-alt git-link"></i></a>
        </p>
        <div class="work-projects">
            <button class="project">
                <a href="https://s3bc40.github.io/" target="_blank">
                    <img @load="$emit('loadedResume')" :src="resume_img" class="project-image" alt="Resume Markdown">
                    <div class="project-text">
                        <h2 class="text-title">{{ $t('work_resume_title') }}</h2>
                        <p class="text-content">{{ $t('work_resume_detail') }}</p>
                        <p class="text-status">{{ $t('status_online_updt') }}</p> 
                    </div>
                </a>
            </button>
            <button class="project">
                <a href="https://github.com/s3bc40/teague-bot" target="_blank">
                    <img @load="$emit('loadedBot')" :src="bot_img" class="project-image" alt="Teague Bot Discord">
                    <div class="project-text">
                        <h2 class="text-title">{{ $t('work_bot_title') }}</h2>
                        <p class="text-content">{{ $t('work_bot_detail') }}</p>
                        <p class="text-status">{{ $t('status_online_wip') }}</p>
                    </div>
                </a>
            </button>
            <button class="project">
                <a href="https://s3bc40.github.io/binary-converter" target="_blank">
                    <img @load="$emit('loadedBinary')" :src="binary_img" class="project-image" alt="Binary Converter">
                    <div class="project-text">
                        <h2 class="text-title">{{ $t('work_binary_title') }}</h2>
                        <p class="text-content">{{ $t('work_binary_detail') }}</p>
                        <p class="text-status">{{ $t('status_online_updt') }}</p>
                    </div>
                </a>
            </button>
        </div>
    </div>
</template>

<i18n src="../locales/Titles.json"></i18n>
<i18n src="../locales/Work.json"></i18n>

<script>
export default {
    name: 'Work',
    data() {
        return {
            resume_img: '/assets/img/resumeMD.png',
            bot_img: '/assets/img/teagueBot.png',
            binary_img: '/assets/img/binary.png',
        }
    },
    emits: ['loadedResume', 'loadedBot', 'loadedBinary'],
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
            hover:text-purple-600
            hover:bg-white
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