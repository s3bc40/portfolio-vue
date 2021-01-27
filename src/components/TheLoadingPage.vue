<template>
<div class="loading-page">
    <h1 class="loading-text">Loading...</h1>
</div>
</template>

<style lang="postcss" scoped>
    .loading-page {
        @apply
            fixed 
            top-0 
            left-0 
            inline-block 
            w-full 
            h-full 
            bg-white
            z-50
    }
    .loading-text {
        @apply
            relative 
            block 
            animate-bounce
            top-1/2
            w-1/2
            mx-auto
            text-center
    }
</style>
