<template>
<div class="loading-page">
  <i class="spin-circle fas fa-circle-notch fa-spin fa-5x"></i>
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
    .spin-circle {
        @apply
            relative 
            block 
            top-1/2
            text-purple-600 
            opacity-75 
            w-1/2
            mx-auto
            text-center
    }
</style>
