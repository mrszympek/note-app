<template>
	<div class="notes">
		<div class="row center-xs">
			<note v-for="(note, index) in sortByCategory" :note="note" :key="index"/>
		</div>
	</div>
</template>

<script>
	import note from './Note.vue'

	export default {
		components: {
			note
		},
		computed: {
			sortByCategory() {
				if(this.$store.state.category) {
					return this.$store.state.notes.filter(notes => notes.category === this.$store.state.category)
				} else {
					return this.$store.state.notes
				}
			}
		}
	}
</script>