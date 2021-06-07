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
			edits: [
				{ id: 1, ref: "block1",
					content: `
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
					`
				},
				{ id: 2, ref: "block2",
					content: `
						<h4>Оплата по договору</h4>
						<ol><li>Оплата услуг по договору производится по ценам, указанным в Приложении № 1, безналичным образом, если стороны не предусмотрят иной способ оплаты.</li><li>Срок оплаты - 7 банковских дней с момента проведения мероприятия при расчете в рублях, 7 банковских дней с момента проведения мероприятия при расчете в иностранной валюте.</li><li>Питание индивидуальных туристов может быть оплачено наличным образом.</li><li>Допускается внесение Заказчиком предварительной оплаты в счет стоимости услуг, которые будут оказаны по настоящему договору в будущем.</li></ol>
					`
				},
				{ id: 3, ref: "block3",
					content: `
						<h4>Ответственность сторон</h4>
						<ol><li>В случае неисполнения или ненадлежащего исполнения Рестораном своих обязательств по настоящему договору, он обязан возместить Заказчику понесенные убытки в рамках действующего гражданского законодательства.</li><li>Заказчик несёт ответственность в следующем объеме:</li><li class="ql-indent-1">в случае, если по вине Заказчика, туристическая группа в ресторан не явилась, Заказчик компенсирует Исполнителю стоимость холодных закусок, указанных в приложении № 1.</li><li class="ql-indent-1">если на обслуживание прибыло меньше туристов, чем было указано в заявке, и о данных изменениях Ресторан не был проинформирован в сроки, указанные в п.2.2.2 настоящего Договора, Заказчик компенсирует разницу в стоимости фактически поставленных, но не потребленных холодных закусок.</li><li>Стороны могут предусмотреть иной способ компенсации убытков по настоящему договору.</li><li>В случае нарушения п.2.2 Договора начисляется пеня в размере ___% с просроченной суммы за каждый день просрочки.</li><li>Уплата пени не освобождает Стороны от выполнения лежащих на них обязательств по Договору.</li></ol>
					`
				},
			],
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
