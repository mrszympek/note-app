<template>
    <div class="col-md-3">
        <div class="note">
            <p>
                <small>{{ note.date }}</small>
            </p>
            <div class="note-body">
                <h3>{{ note.title }}</h3>
                <p class="note-desc">{{ note.description }}</p>
                <p>{{ note.category }}</p>
                <button @click="onRemove(note)">X</button>
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