<template>
    <div class="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <input class="modal-input" type="text" placeholder="Note Title" v-model="note.title">
                    </div>
                    <div class="modal-body">
						<textarea class="modal-textarea " name="" id="" cols="30" rows="10"
                                                          v-model="note.description"
                                                          placeholder="body"></textarea>

                        <div class="modal-category">
                            <span class="mr-s">Category:</span>
                            <select class="modal-select" v-model="note.category">
                                <option v-for="category in categories" :value="category.type">{{category.name}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a class="btn btn-text-red" @click="$emit('close')">Close</a>
                        <a class="btn btn-text-green" @click="addNote(); $emit('close')">Add</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import * as categoryTypes from '../enums/category'
    import * as categoryHelper from '../helpers/category'

    const INITIAL_NOTE = {
	    title: '',
	    description: '',
	    category: categoryTypes.PROJECTS
    }

    export default {
        data() {
            return {
                note: { ...INITIAL_NOTE },
                categories: categoryHelper.getCategories(),
            }
        },

        methods: {
            addNote() {
                this.$store.dispatch('addNote', this.note);

                this.note = { ...INITIAL_NOTE };
            },
        },
    }
</script>

