<template>
    <div class="col-md-3">
        <div class="note">
            <p>
                <small>{{ note.date }}</small>
            </p>
            <div class="note-body">
                <h3 class="note-title">{{ note.title }}</h3>
                <p class="note-desc">{{ note.description }}</p>
                <p class="note-category">{{ note.category }}</p>
            </div>
            <div class="note-footer">
                <a class="note-remove" @click="onRemove(note)">remove</a>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        props: ['note'],

        methods: mapActions([
            'onRemove'
        ])
    }
</script>