<template>
    <div class="topbar">

        <div class="topbar-categories">
            <a href="#" class="_active">All</a>
            <a href="#">Projects</a>
            <a href="#">Buisness</a>
            <a href="#">Personal</a>
        </div>

        <a class="btn btn-add" @click="$emit('open')">Add new note</a>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showModal: false
            }
        }
    }
</script>