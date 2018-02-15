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
	export default {
		data() {
			return {
				note: {
					date: '',
					title: '',
					description: ''
				}
			}
		},
		methods: {
			addNote(){
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

