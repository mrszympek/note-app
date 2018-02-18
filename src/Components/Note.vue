<template>
    <div class="col-xs-8 col-sm-4 col-md-3">
        <div class="note">
            <div class="note-header">
                <p>{{ note.date }}</p>
                <p class="note-category">{{ note.category }}</p>
            </div>
            <div class="note-body">
                <h3 class="note-title">{{ note.title }}</h3>
                <p class="note-desc">{{ note.description }}</p>
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