<template>
    <div class="user">
        This is the User page.
        {{ $route.params.id }}
    </div>
</template>

<script>
    export default {
        name: 'User'
    }
</script>

<style>

</style>