<template>
    <div class="profile-data">
        <div class="data-skills p-2">
            <div class="skill">
                <i class="fab fa-vuejs"></i>
                <span class="skill-text">Vue.js:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="skill">
                <i class="fab fa-python"></i>
                <span class="skill-text">Django:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="skill">
                <i class="fab fa-css3-alt"></i>
                <span class="skill-text">Tailwind:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="skill">
                <i class="fas fa-database"></i>
                <span class="skill-text">SQL:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="skill">
                <i class="fab fa-git-alt"></i>
                <span class="skill-text">Git:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
            <div class="skill">
                <i class="fab fa-linux"></i>
                <span class="skill-text">Linux:</span>
                <div class="skill-star">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                </div>
            </div>
        </div>
        <div class="data-details">
            <h2 class="details-title">Lore</h2>
            <p class="details-content">
                Sebastien, the coding wizard, come from the Landes, the lost magical realm. 
                His powers are fueled by the mystical forest of pines and the unlimited cornfields. 
                He acquired a strong understanding of programming when he was fighting 
                during the war of the "Bugging netherrealm".
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutProfileData',
}
</script>

<style lang="postcss" scoped>
    .profile-data {
        @apply
            grid
            grid-cols-2
            grid-flow-row
            gap-4
    }
    .data-skills {
        @apply
            grid
            grid-cols-2
            gap-8
            p-6
            rounded-b-lg
            text-oxfordBlue        
    }
    .skill {
        @apply
            flex
            flex-wrap
            place-content-evenly
    }
    .fas, .fab, .far {
        @apply
            xl:text-lg
            sm:text-sm
            text-base
            self-center
    }
    .skill-text {
        @apply
            sm:text-base
            flex-shrink-0
            w-20
            text-center
            text-sm
    }
    .skill-star {
        @apply
            flex
            text-celadonBlue
            space-x-0 
            self-center       
    }
    .skill-star > .fas, .skill-star > .far {
        @apply
            xl:text-base
            sm:text-sm
            text-xs
    }
    .details-title {
        @apply
            sm:text-2xl
            block
            text-center
            text-base
            font-extrabold
            text-prussian
    }
    .details-content {
        @apply
            xl:leading-loose
            sm:text-left
            text-center
            prose-sm
    }
</style>