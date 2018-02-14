<template>
    <div id="app">
        <div class="wrap">

            <topbar @open="showModal = true" />
            <notes />
            <modal v-show="showModal" @close="showModal = false">
                <h3 slot="header">Inny header</h3>
            </modal>

        </div>
    </div>
</template>
<script>
    import topbar from './Topbar.vue'
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
            modal,
            topbar
        }
    }
</script>
