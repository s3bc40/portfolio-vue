<template>
    <div class="footer">
        <p class="footer-text">Claro Sebastien <span class="text-year">@2021</span></p>
    </div>
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
            items-center
            justify-center
            w-full
            h-20
            bg-green-600

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