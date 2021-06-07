<template lang="pug">
.ma-3
	quill-editor(:ref='`block${ed.id}`', :content='ed.content', :options='editorOption',
	:class="checkUser(ed.id)" v-for="ed in edits" :key="ed.id")
	
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'

export default {
	components: {
		quillEditor,
	},
	methods: {
		checkUser (e) {
			switch (this.user) {
				case 1:
					if (e === 3 || e === 1) { return 'dis' }
					break;
				case 17:
					if (e === 2 || e === 1) { return 'dis' }
					break;
				default:
					return ''
			}
		},
	},
	computed: {
		edits () {
			return this.$store.getters.edits
		},
		user () {
			return this.$store.getters.user
		},
		editMode() {
			return this.$store.getters.editMode
		},
		editor1() {
			return this.$refs.block1[0].quill
		},
		editor2() {
			return this.$refs.block2[0].quill
		},
		editor3() {
			return this.$refs.block3[0].quill
		},
	},
	mounted() {
		// console.log(this.$refs)
		this.editor1.enable(false)
		this.editor2.enable(false)
		this.editor3.enable(false)
		// this.editor1.focus()
		// console.log(this.editor1.hasFocus())
	},
	watch:  {
		// activeEditor: function(newval) {
		// },
		editMode: function (newval) {
			if ( newval === true ) {
				switch (this.user) {
					case 0:
					 this.editor1.enable()
					 this.editor2.enable()
					 this.editor3.enable()
					 break
					case 1:
					 this.editor1.enable(false)
					 this.editor2.enable()
					 this.editor3.enable(false)
					 break
					case 17:
					 this.editor1.enable(false)
					 this.editor2.enable(false)
					 this.editor3.enable()
					 break
					default:
					 this.editor1.enable(false)
					 this.editor2.enable(false)
					 this.editor3.enable(false)
					 break
				}
			} else {
			 this.editor1.enable(false)
			 this.editor2.enable(false)
			 this.editor3.enable(false)
			}
		}
	},
	data() {
		return {
			activeEditor: null,
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
						[{ 'indent': '-1'}, { 'indent': '+1' }], 
						['link', 'image'],
						['clean'],
					],
				},
			},
		}
	},
}
</script>

<style scoped lang="scss">
/* @import '@/assets/css/colors'; */
</style>
