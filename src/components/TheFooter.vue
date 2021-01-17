<template>
    <footer class="footer">
        <p class="footer-title">To contact me, visits my social media or send me an email :</p>
        <div class="footer-media">
            <a href="https://www.linkedin.com/in/sgoncalvesclaro-bioinfo/" class="media" target="_blank"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/s3bc40" class="media" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://twitter.com/s_GClaro" class="media" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.reddit.com/user/s3bc40" class="media" target="_blank"><i class="fab fa-reddit-alien"></i></a>
            <a href="mailto:s.goncalvesclaro@gmail.com" class="media" target="_blank"><i class="far fa-envelope"></i></a>
        </div>
        <p class="footer-text">
            Made with Vue.js, GreenSock, TailwindCSS
            <br>Hosted by Netlify
            <br>Claro Sebastien <span class="text-year">@2021</span>
        </p>
    </footer>
</template>

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
            bg-green-600
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
            hover:text-green-600
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
    }
    .text-year{
        @apply
            font-bold
    }
</style>