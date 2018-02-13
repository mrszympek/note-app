<template>
	<div id="app">
		<div class="wrap">
			<notes></notes>
			<addButton/>

			<modal v-if="showModal" @close="showModal = false"></modal>
			<button id="show-modal" @click="showModal = true">New Post</button>

			{{ showModal }}
		</div>
	</div>
</template>
<script>
	import notes from './Notes.vue'
	import addButton from './AddButton.vue'

	export default {
		data() {
			return {
				showModal: false
			}
		},

		components: {
			notes,
			addButton
		}
	}
</script>
