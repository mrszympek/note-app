<template>
	<div class="notes">
		<div class="row">
			<note v-for="(note, index) in $store.state.notes" :note="note"/>
		</div>
	</div>
</template>

<script>
	import note from './Note.vue'

	export default {
		components: {
			note
		}
	}
</script>