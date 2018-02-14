<template>
	<div id="app">
		<div class="wrap">
			<notes></notes>

			<modal v-show="showModal" @close="showModal = false">
				<h3 slot="header">Inny header</h3>
			</modal>
			<a class="btn btn-add" @click="showModal = true">Add new note</a>
		</div>
	</div>
</template>
<script>
	import notes from './Notes.vue'
	import modal from './Modal.vue'

	export default {
		data() {
			return {
				showModal: false
			}
		},

		components: {
			notes,
			modal
		}
	}
</script>
