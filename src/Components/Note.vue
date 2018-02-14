<template>
    <div class="col-md-3">
        <div class="note">
            <p>
                <small>{{ note.date }}</small>
            </p>
            <div class="note-body">
                <h3>{{ note.title }}</h3>
                <p class="note-desc">{{ note.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['note']
    }
</script>