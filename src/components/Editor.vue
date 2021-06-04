<template lang="pug">
.ma-3
	quill-editor(
		ref='block1',
		:content='content1',
		:options='editorOption',
		@change='onEditorChange($event)'
	)
		.output.ql-bubble
			.ql-editor(v-html='content1')
	

	quill-editor(
		ref='block2',
		:content='content2',
		:options='editorOption',
		@change='onEditorChange($event)'
	)
		.output.ql-bubble
			.ql-editor(v-html='content2')


	quill-editor(
		ref='block3',
		:content='content3',
		:options='editorOption',
		@change='onEditorChange($event)'
	)
		.output.ql-bubble
			.ql-editor(v-html='content3')
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
	computed: {
		user () {
			return this.$store.getters.user
		},
		editMode() {
			return this.$store.getters.editMode
		},
		editor1() {
			return this.$refs.block1.quill
		},
		editor2() {
			return this.$refs.block2.quill
		},
		editor3() {
			return this.$refs.block3.quill
		},
	},
	mounted() {
		this.editor1.enable(false)
		this.editor2.enable(false)
		this.editor3.enable(false)
	},
	watch:  {
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
					 this.editor1.enable()
					 this.editor2.enable()
					 this.editor3.enable()
					 break
				}
			} else {
			 this.editor1.enable(false)
			 this.editor2.enable(false)
			}
		}
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
			content3: `
			<h4>Оплата по договору</h4>
			<ol><li>Оплата услуг по договору производится по ценам, указанным в Приложении № 1, безналичным образом, если стороны не предусмотрят иной способ оплаты.</li><li>Срок оплаты - 7 банковских дней с момента проведения мероприятия при расчете в рублях, 7 банковских дней с момента проведения мероприятия при расчете в иностранной валюте.</li><li>Питание индивидуальных туристов может быть оплачено наличным образом.</li><li>Допускается внесение Заказчиком предварительной оплаты в счет стоимости услуг, которые будут оказаны по настоящему договору в будущем.</li></ol>
			`,
			content2: `
			<h4>Оплата по договору</h4>
			<ol><li>Оплата услуг по договору производится по ценам, указанным в Приложении № 1, безналичным образом, если стороны не предусмотрят иной способ оплаты.</li><li>Срок оплаты - 7 банковских дней с момента проведения мероприятия при расчете в рублях, 7 банковских дней с момента проведения мероприятия при расчете в иностранной валюте.</li><li>Питание индивидуальных туристов может быть оплачено наличным образом.</li><li>Допускается внесение Заказчиком предварительной оплаты в счет стоимости услуг, которые будут оказаны по настоящему договору в будущем.</li></ol>
			`,
			content1: `
			<h2 class="ql-align-center">Договор</h2>
			<p>ООО "Трактир Сельская кухня", именуемое - "Исполнитель и/или Ресторан" с одной стороны и ООО "Вокруг света", именуемое далее - "Заказчик", с другой стороны, заключили настоящий договор о нижеследующем: </p>
			<br/>
			<h4>Предмет договора</h4>
			<ol>
			<li>Согласно настоящему договору Ресторан принимает на себя
			обязанности по организации обедов и ужинов для туристических групп и
			индивидуальных туристов, а Заказчик обязуется оплатить данные услуги.</li>
			<li>Исполнитель обязуется оказать услуги лично.</li>
			<li>Объем услуг по настоящему договору на момент его заключения не определен, и формируется из заявок Заказчика по тарифам, указанным в меню - Приложении № 1.</li>
			</ol>
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
p {
	font-size: 1.3rem;
}
</style>
