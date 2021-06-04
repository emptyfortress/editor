<template lang="pug">
.ma-3
	quill-editor.editor(
		ref='myTextEditor',
		:content='content',
		:options='editorOption',
		@change='onEditorChange($event)'
	)
		.output.ql-bubble
			.ql-editor(v-html='content')
	.another
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'

export default {
	components: {
		quillEditor,
	},
	data() {
		return {
			editorOption: {
				theme: 'bubble',
				placeholder: 'every contentï¼support html',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						[{ list: 'ordered' }, { list: 'bullet' }],
						[{ header: [1, 2, 3, 4, 5, 6, false] }],
						[{ color: [] }, { background: [] }],
						[{ font: [] }],
						[{ align: [] }],
						['link', 'image'],
						['clean'],
					],
				},
			},
			content: `
          <h1 class="ql-align-center"><s class="ql-font-serif">I am bubble example!</s></h1><p><br></p><p><span class="ql-font-serif">Whenever you play the game of thrones, you either win or die. There is no middle ground.</span></p><p><strong class="ql-font-serif">Some war against sword and spear to win, and the others the crow and the paper to win.</strong></p><p><br></p><p><u class="ql-font-serif">Dead history is write in ink, the living sort in blood.</u></p><p><em class="ql-font-serif">They're only numbers. Numbers on paper. Once you understand that, it's easy to make them behave.</em></p><p><br></p><p><span class="ql-font-serif">Every time we deal with an enemy, we create two more.</span></p><p><span class="ql-font-serif">So the king has decreed. The small council consents.</span></p><p><br></p><p><span class="ql-font-serif">Chaos not is a pit, chaos is a ladder.</span></p><p><span class="ql-font-serif">A chain needs all sorts of metals, and a land needs all sorts of people.</span></p><p><br></p><p><span class="ql-font-serif">When the snows fall and the white winds blow, the lone wolf dies, but the pack survives.</span></p>
        `,
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';
.another {
	height: 200px;
	border: 2px dotted #ccc;
	background: #eee;
}
</style>
