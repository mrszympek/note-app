<template>
	<div class="topbar">

		<div class="topbar-categories">
			<a v-for="(category, index) in categories" class="note-category" :class="[{ _active: isActive(category.type)}, getCategoryCls(category.type)]" @click="setCategory(category.type)">{{ category.name }}</a>
		</div>

		<a class="btn btn-add" @click="$emit('open')">Add new note</a>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	import * as categoryHelper from '../helpers/category'

	export default {
		data() {
			return {
				showModal: false,
				categories: [
					{
						name: 'All',
						type: null
					},
					...categoryHelper.getCategories()
				]
			}
		},
		methods: {
			isActive(category) {
				return this.$store.state.category === category;
			},
			getCategoryCls(categoryType) {
				return categoryHelper.getCategoryCls(categoryType);
			},
			...mapActions([
				'filterCategory',
				'setCategory'
			])
		}
	}
</script>