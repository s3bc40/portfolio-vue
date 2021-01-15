<template>
    <div class="content-profile">
        <img class="profile-img" src="../assets/img/profile_pic.png" alt="Seb Claro">
        <p class="profile-intro">
            I'm just an average guy, with an average life, but with <b class="text-green-400">AWESOME</b> coding skills!
            I also have a dog, so if you are team dog I already love you !
        </p>
        <profile-bar-experience
            :experience_gained="experience_gained"
            :experience_all="experience_all"
        ></profile-bar-experience>
        <profile-traits></profile-traits>
    </div>
</template>

<script>
import moment from 'moment'

import ProfileBarExperience from './ProfileBarExperience'
import ProfileTraits from './ProfileTraits'

export default {
    name: 'Profile',
    components: {
        ProfileBarExperience,
        ProfileTraits
    },
    data() {
        return {
            birthday: moment('1993-08-25'),
            experience_gained: 0,
            experience_all: 0,
        }
    },
    computed: {
        currentLevel() {
            /* Get your age as a Level of RPG */
            return moment().diff(this.birthday, 'years')
        },
    },
    mounted() {
        // Compute all experience
       this.computeExperience()
    },
    methods: {
        computeExperience() {
            /* Compute experience gained each year from your birthdate */
            // Init start and end date difference
            const last_birthdate = this.birthday.clone()
            last_birthdate.set('years', moment().year() - 1)
            const next_birthdate = this.birthday.clone()
            next_birthdate.set('years', moment().year())

            this.experience_gained = moment().diff(last_birthdate, 'minutes')
            this.experience_all = next_birthdate.diff(last_birthdate, 'minutes')
        },
    },
}
</script>

<style lang="postcss" scoped>
    .content-profile {
        @apply
            space-y-2
    }
    .profile-img {
        @apply
            w-64
            h-64
            rounded-full
            mx-auto
            object-cover
            object-top
    }
    .profile-intro {
        @apply
            text-center
            prose
            mx-auto
    }
</style>