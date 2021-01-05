<template>
    <div class="component-content">
        <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
        <div class="profile-stats">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque erat lacus, condimentum vitae tortor in, aliquam rhoncus ipsum. Sed gravida tincidunt enim. Morbi magna nisi, facilisis vel scelerisque sed, eleifend feugiat diam. Nulla laoreet sollicitudin turpis in aliquet. Phasellus mollis ultricies placerat. Duis vitae placerat magna, vel maximus magna. Maecenas et ultricies velit. Nunc feugiat ipsum sit amet dolor cursus maximus. Mauris suscipit a est nec porta. Morbi sem dolor, tempor a velit a, tincidunt cursus nunc. Donec in odio iaculis, ultricies risus eu, convallis ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et cursus diam, ut porttitor ex.
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
}
</script>

<style lang="postcss" scoped>
    .component-content {
        @apply
            grid
            grid-cols-3
            gap-4
            px-4
    }
    .profile-img {
        @apply
            sm:w-96
            col-span-1
            border-2
            border-pink-400
            rounded-lg
            ring
            ring-yellow-400
            ring-offset-2
    }
    .profile-stats {
        @apply
            md:prose-lg
            prose-sm
            col-span-2
    }
</style>