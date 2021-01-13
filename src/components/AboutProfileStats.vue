<template>
    <div class="profile-stats">
        <!-- Teamwork -->
        <div class="stats-container">
            <div class="stats-logo">
                <i class="fas fa-users-cog"></i>
            </div>
            <div class="stats-name">
                <span class="stats-txt">Teamwork</span>
            </div>
            <div class="stats-bar">
                <div class="bar-teamwork bar-fill" :class="{ 'bar-animation': animate_bar }"></div>
            </div>
        </div>
        <!-- Laziness -->
        <div class="stats-container">
            <div class="stats-logo">
                <i class="fas fa-bed"></i>
            </div>
            <div class="stats-name">
                <span class="stats-txt">Laziness</span>
            </div>
            <div class="stats-bar">
                <div class="bar-laziness bar-fill" :class="{ 'bar-animation': animate_bar }"></div>
            </div>
        </div>
        <!-- Patience -->
        <div class="stats-container">
            <div class="stats-logo">
                <i class="fas fa-chess"></i>
            </div>
            <div class="stats-name">
                <span class="stats-txt">Patience</span>
            </div>
            <div class="stats-bar">
                <div class="bar-patience bar-fill" :class="{ 'bar-animation': animate_bar }"></div>
            </div>
        </div>
        <!-- Dedication -->
        <div class="stats-container">
            <div class="stats-logo">
                <i class="fas fa-balance-scale"></i>
            </div>
            <div class="stats-name">
                <span class="stats-txt">Honesty</span>
            </div>
            <div class="stats-bar">
                <div class="bar-honesty bar-fill" :class="{ 'bar-animation': animate_bar }"></div>
            </div>
        </div>
        <!-- Energy -->
        <div class="stats-container">
            <div class="stats-logo">
                <i class="fas fa-battery-three-quarters"></i>
            </div>
            <div class="stats-name">
                <span class="stats-txt">Energy</span>
            </div>
            <div class="stats-bar">
                <div class="bar-energy bar-fill" :class="{ 'bar-animation': animate_bar }"></div>
            </div>
        </div>          
    </div>
</template>

<script>
export default {
    name: 'AboutProfileStats',
    props: {
        animate_bar: {
            type: Boolean
        }
    }
}
</script>

<style lang="postcss" scoped>
    .profile-stats {
        @apply 
            grid
            grid-cols-1
            grid-flow-row
            space-y-2
            text-prussian
            my-4
    }
    .stats-container {
        @apply
            flex
            space-x-0
            text-honeydew
    }
    .stats-logo {
        @apply
            flex-shrink-0
            bg-prussian
            border
            rounded-l-full
            w-1/12
            p-1
            text-sm
            text-center
    }
    .stats-name {
        @apply
            flex-shrink-0
            bg-prussian
            border
            w-32
            p-1
            text-sm
            italic
    }
    .stats-bar {
        @apply
            border
            h-full
            w-full
            bg-powderBlue
    }
    .bar-fill {
        @apply
            bg-celadonBlue
    }
    .bar-teamwork {
        
        @apply 
            h-full
            w-11/12
    }
    .bar-laziness {
        @apply 
            h-full
            w-1/6
    }
    .bar-patience {
        @apply 
            h-full
            w-3/4
    }
    .bar-honesty {
        @apply 
            h-full
            w-4/6
    }
    .bar-energy {
        @apply 
            h-full
            w-5/6
    }
</style>