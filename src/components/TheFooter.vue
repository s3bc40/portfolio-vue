<template>
    <footer class="footer">
        <p class="footer-title">{{ $t('footer_intro') }}</p>
        <div class="footer-media">
            <a href="https://www.linkedin.com/in/sgoncalvesclaro-bioinfo/" class="media" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.codingame.com/profile/016b8e8b6be28fbface53fe3576d4aae8937642" class="media" target="_blank"><i class="fas fa-globe"></i></a>
            <a href="https://github.com/s3bc40" class="media" target="_blank"><i class="fab fa-github"></i></a>
            <a href="mailto:s.goncalvesclaro@gmail.com" class="media" target="_blank"><i class="far fa-envelope"></i></a>
            <a href="/assets/docs/CLARO_Sebastien_EN_DevWeb.pdf" class="media" v-show="$i18n.locale == 'en'" download><i class="fas fa-arrow-circle-down"></i></a>
            <a href="/assets/docs/CLARO_Sebastien_FR_DevWeb.pdf" class="media" v-show="$i18n.locale == 'fr'" download><i class="fas fa-arrow-circle-down"></i></a>
        </div>
        <p class="footer-text">
            {{ $t('footer_made') }}
            <br>{{ $t('footer_host') }}
            <br>{{ $t('footer_source') }} <a href="https://github.com/s3bc40/portfolio-vue" class="text-source" target="_blank">{{ $t('footer_here') }}</a>
            <br>Claro Sebastien <span class="text-year">@2021</span>
        </p>
    </footer>
</template>

<i18n src="../locales/TheFooter.json"></i18n>

<script>
export default {
    name: 'TheFooter',
}
</script>

<style lang="postcss" scoped>
    .footer {
        @apply
            static
            bottom-0
            flex
            flex-col
            place-content-around
            p-6
            items-center
            w-full
            h-80
            bg-purple-600
    }
    .footer-title {
        @apply
            text-white
            text-lg
            text-center
            font-bold
    }
    .footer-media {
        @apply
            md:space-x-8
            flex
            space-x-2
    }
    .media {
        @apply
            hover:text-purple-600
            hover:bg-white
            text-white
            font-bold
            text-3xl
            py-2
            px-3
            rounded-full
            border-2
            ring-offset-white
            transition-colors
    }
    .footer-text {
        @apply
            text-sm
            text-white
            text-center
            place-self-center 
            font-normal
    }
    .text-source{
        @apply
            hover:underline
            font-bold
    }
    .text-year{
        @apply
            font-bold
    }
</style>