<template>
	<div class="col-md-3">
		<div class="note">
			<h3>{{ note.title }}</h3>
			<p>{{ note.description }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['note']
	}
</script>