<template>
    <div class="content-gears">
        <h1 class="content-title gears-title">Gears</h1>
        <div class="gears-items">
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-laptop-code logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">VS Code IDE</h2>
                    <p class="item-description">
                        Mystical weapon, unknown from every normal being.
                        It allows to summon powerfull spells, each of them
                        having their own language. Gain <span class="item-effect">30%
                        of casting speed</span> and <span class="item-effect">40% of coding power</span> .
                    </p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-coffee logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Coffee</h2>
                    <p class="item-description">
                        Divine potion coming from the ancient Goron village.
                        The recipe is unknown, but it seems to improve the Coding
                        power of a wizard. Allows to to gain <span class="item-effect">60% of energy</span>.
                    </p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-glasses logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Glasses</h2>
                    <p class="item-description">
                        Protection against extra bright crystal screen. Very effective
                        during the night. It also improves the eyesight of a wizard, by detecting 
                        evil bugs. Gain <span class="item-effect">20% of energy</span> and
                        <span class="item-effect">30% of patience</span>.
                    </p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fab fa-stack-overflow logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Stack-overflow</h2>
                    <p class="item-description">
                        Ancient encyclopedia with resources about coding spells.
                        It is a space where great wizards share their knowledge, or crush other wizards. 
                        Gain <span class="item-effect">"Unlimited power" status</span> or
                        <span class="item-effect">"Helpless wizard" status</span>.
                    </p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fab fa-trello logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Trello</h2>
                    <p class="item-description">
                        Spell manager storing effective combination, to cast alone or with others.
                        Some spells are time limited, so it is important to respect the deadlnes. 
                        Improve by <span class="item-effect">70% teamwork</span> and reduce by
                        <span class="item-effect">50% laziness</span>.
                    </p>  
                </div>
            </div>
            <div class="item-container">
                <div class="item-logo">
                    <i class="fas fa-dog logo-fa"></i>
                </div>
                <div class="item-info">
                    <h2 class="item-title">Yuki</h2>
                    <p class="item-description">
                        Charming beast devoted to his wizard, Sebastien. She seems to be
                        an angel, but she has a strong temper, so be careful. 
                        <span class="item-effect">Refuel energy and patience</span> to the
                        maximum.
                    </p>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutGears',
}
</script>

<style lang="postcss" scoped>
    .content-gears {
        @apply
            px-4
    }
    .gears-title {
        @apply
            md:text-center
            inline-block
            w-full
            text-4xl
            text-prussian
            italic
            my-4
    }
    .gears-items {
        @apply
            md:grid-cols-3
            sm:grid-cols-2
            grid
            grid-cols-1
            grid-flow-row
            gap-8
    }
    .item-container {
        @apply
            flex
            space-y-2
    }
    .item-logo {
        @apply
            flex-shrink-0
            bg-oxfordBlue
            text-honeydew
            w-14
            h-14
            text-center
            rounded-md
    }
    .logo-fa {
        @apply
            block
            text-4xl
            mt-2
    }
    .item-info {
        @apply
            pl-4
            space-y-2
    }
    .item-title {
        @apply
            block
            text-lg
            font-bold
    }
    .item-description {
        @apply
            prose-sm
            block
    }
    .item-effect {
        @apply
            text-celadonBlue
            font-bold
    }
</style>