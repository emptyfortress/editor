<template lang="pug">
div
	.doc
		.zg заголовок
		.but кнопки действий
		.main основная.область
		.attr атрибуты

	br
	quill-editor(
		ref='myQuillEditor',
		v-model='content',
		:options='editorOption',
		@blur='onEditorBlur($event)',
		@focus='onEditorFocus($event)',
		@ready='onEditorReady($event)'
	)

	quill-editor(
		ref='myQuillEditor',
		v-model='content1',
		:options='editorOption',
		@blur='onEditorBlur($event)',
		@focus='onEditorFocus($event)',
		@ready='onEditorReady($event)'
	)
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
	data() {
		return {
			content: 'fuck',
			content1: 'laksjlkaj laksj lkajs lkj ',
		}
	},
	components: {
		quillEditor,
	},
	// methods: {
	// 	onEditorFocus($event) {
	// 		console.log($event)
	// 		this.$refs.myQuillEditor.$el.classList.add('editor')
	// 	},
	//
	// 	onEditorBlur($event) {
	// 		console.log($event)
	// 		this.$refs.myQuillEditor.$el.classList.remove('editor')
	// 	}
	// }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.doc {
	margin-bottom: 5rem;
	display: grid;
	gap: 0.5rem;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat (min-content, auto);
	> div {
		background: #ccc;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zg {
		grid-column: span 6;
		@media (max-width: 1200px) {
			grid-column: span 8;
		}
	}
	.but {
		grid-column: span 2;
		grid-row: span 2;
		height: 150px;
		@media (max-width: 1200px) {
			grid-column: 7/9;
			grid-row: 2/3;
		}
		@media (max-width: 900px) {
			grid-column: 1/9;
			grid-row: 2/3;
			height: 50px;
		}
	}
	.main {
		grid-column: span 6;
		grid-row: span 2;
		height: 300px;
		@media (max-width: 900px) {
			grid-column: 1/6;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
	.attr {
		grid-column: 7/9;
		height: 200px;
		@media (max-width: 900px) {
			grid-column: 6/9;
		}
		@media (max-width: 800px) {
			grid-column: 1/9;
		}
	}
}
</style>
