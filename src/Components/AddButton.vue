<template>
	<div class="modal">
		<modal v-if="showModal" @close="showModal = false"></modal>
		<button id="show-modal" @click="showModal = true">New Post</button>
	</div>
</template>

