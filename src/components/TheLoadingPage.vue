<template>
<div class="loading-page">
  <span class="spin-circle">
    <i class="fas fa-circle-notch fa-spin fa-5x"></i>
  </span>
</div>
</template>

<style lang="postcss" scoped>
    .loading-page {
        @apply
            fixed 
            top-0 
            left-0 
            block 
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
            w-0 h-0
            text-purple-600 
            opacity-75 
            my-0 
            mx-auto 
    }
</style>
