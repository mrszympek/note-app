<template>
	<div class="topbar">

		<div class="topbar-categories">
			<a class="_active" @click="setCategory()">All</a>
			<a @click="setCategory('PROJECTS')">Projects</a>
			<a @click="setCategory('BUSINESS')">Business</a>
			<a @click="setCategory('PERSONAL')">Personal</a>
		</div>

		<a class="btn btn-add" @click="$emit('open')">Add new note</a>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'

	export default {
		data() {
			return {
				showModal: false
			}
		},
		methods: mapActions([
			'filterCategory',
			'setCategory'
		])
	}
</script>