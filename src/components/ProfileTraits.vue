<template>
    <div class="profile-traits">
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-users-cog"></i>
            </div>
            <span class="trait-text">{{ $t('teamwork') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>
        </div>
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-chess"></i>
            </div>
            <span class="trait-text">{{ $t('patience') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-balance-scale"></i>
            </div>
            <span class="trait-text">{{ $t('honesty') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-battery-three-quarters"></i>
            </div>
            <span class="trait-text">{{ $t('energy') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-bed"></i>
            </div>
            <span class="trait-text">{{ $t('laziness') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
        <div class="trait">
            <div class="trait-logo">
                <i class="fas fa-heart-broken"></i>
            </div>
            <span class="trait-text">{{ $t('selfish') }}:</span>
            <div class="trait-star">
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
            </div>
        </div>
    </div>
</template>

<i18n src="../locales/ProfileTraits.json"></i18n>

<script>
export default {
    name: 'ProfileTraits',
}
</script>

<style lang="postcss" scoped>
    .profile-traits {
        @apply
            grid
            grid-cols-2
            gap-4
            w-2/5
            mx-auto
    }
    .trait {
        @apply
            flex
            flex-wrap
            place-content-evenly
    }
    .trait-logo {
        @apply
            text-xl
            self-center
            text-purple-600
    }
    .trait-text {
        @apply
            flex-shrink-0
            w-20
            text-center
            prose
            font-medium
    }
    .trait-star {
        @apply
            flex
            text-purple-400
            space-x-0 
            self-center       
    }
    .trait-star > .fas, .trait-star > .far {
        @apply
            xl:text-base
            sm:text-sm
            text-xs
    }
</style>