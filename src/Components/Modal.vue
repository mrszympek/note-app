<template>
	<div class="modal">
		<div class="modal-mask">
			<div class="modal-wrapper">
				<div class="modal-container">
					<div class="modal-header">
						<h3>New Note</h3>
					</div>
					<div class="modal-body">
						<input type="text" placeholder="Note title" v-model="note.title">
						<textarea name="" id="" cols="30" rows="10" v-model="note.description"></textarea>
						<select v-model="note.category">
							<option v-for="category in categories" :value="category.value">{{category.name}}</option>
						</select>
					</div>
					<div class="modal-footer">
						<button @click="$emit('close')">Close</button>
						<button @click="addNote(); $emit('close')">Add</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import * as category from '../enums/category'

	export default {
		data() {
			return {
				note: {
					date: '',
					title: '',
					description: '',
					category: ''
				},
				categories: [
					{
						value: category.PROJECTS,
						name: 'Projects',
					},
					{
						value: category.BUSINESS,
						name: 'Business',
					},
					{
						value: category.PERSONAL,
						name: 'Personal',
					}
				]
			}
		},
		methods: {
			addNote() {
				this.$store.dispatch('addNote', this.note);

				this.note = {
					date: '',
					title: '',
					description: ''
				};
			}
		}
	}
</script>

