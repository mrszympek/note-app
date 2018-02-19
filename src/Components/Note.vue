<template>
    <div class="col-xs-8 col-sm-4 col-md-3">
        <div class="note">
            <div class="note-header">
                <p>{{ getDate(note.date) }}</p>
                <p class="note-category" :class="getCategoryCls(note.category)">{{ note.category }}</p>
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
    import moment from 'moment'
    import * as categoryHelper from '../helpers/category'

    export default {
        props: ['note'],

        methods: {
        	getDate(date) {
                return moment(date).format("D MMM YYYY");
            },
	        getCategoryCls(categoryType) {
		        return categoryHelper.getCategoryCls(categoryType);
	        },
            ...mapActions([
		        'onRemove'
	        ])
        }
    }
</script>