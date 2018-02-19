<template>
	<div class="topbar">

		<div class="topbar-categories">
			<a v-for="(category, index) in categories" :class="{ _active: isActive(category.type) }" @click="setCategory(category.type)">{{ category.name }}</a>
		</div>

		<a class="btn btn-add" @click="$emit('open')">Add new note</a>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import * as category from '../enums/category'

	export default {
		data() {
			return {
				showModal: false,
				categories: [
					{
						name: 'All',
						type: null
					},
					{
						name: 'Projects',
						type: category.PROJECTS
					},
					{
						name: 'Business',
						type: category.BUSINESS
					},
					{
						name: 'Personal',
						type: category.PERSONAL
					},
				]
			}
		},
		methods: {
			isActive(category) {
				return this.$store.state.category === category;
			},
			...mapActions([
				'filterCategory',
				'setCategory'
			])
		}
	}
</script>