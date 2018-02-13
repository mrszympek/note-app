<template>
		<div class="note col-md-3">
			<h3>{{ note.title }}</h3>
			<p>{{ note.description }}</p>
		</div>
</template>

<script>
	export default {
		props: ['note']
	}
</script>