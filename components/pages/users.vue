<template>
    <div>
        <h1>Users</h1>
        <div v-html="list">

        </div>
    </div>
</template>


<script>
export default {
    name: 'users',
    computed: {
        list() {
            return this.$store.getters['users/list']
        }
    }
}
</script>

