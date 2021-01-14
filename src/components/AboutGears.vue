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
                        Intergrated development environment, allowing to code efficiently.
                        My preference, until there is better.Gain <span class="item-effect">30% of coding speed</span> 
                        and <span class="item-effect">40% of coding precision</span>.
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
                        My fuel to be the best developer you'll ever seen. But moderatly,
                        because I can become a little bit crazy. Allows to to gain
                        <span class="item-effect">60% of energy</span>.
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
                        Protection against extra bright screen. Very effective
                        during the night. It also improves my eyesight, by detecting 
                        the worst bugs. Gain <span class="item-effect">20% of energy</span> and
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
                        Encyclopedia with programming resources.
                        It is a space where we can share knowledge, or we can be crushed. 
                        Gain <span class="item-effect">"Unlimited power" status</span> or
                        <span class="item-effect">"Helpless developer" status</span>.
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
                        Required to be organised during the development of an application.
                        Really important to respect the deadlines, as much as possible with others. 
                        Improve <span class="item-effect">teamwork by 70%</span>.
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
                        The best dog of the world, I am objective. She seems to be
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
            w-5/6
            mx-auto
            space-y-2

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
            bg-green-800
            text-white
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
            text-green-600
    }
    .item-description {
        @apply
            prose-sm
            block
    }
    .item-effect {
        @apply
            text-green-500
            font-bold
    }
</style>