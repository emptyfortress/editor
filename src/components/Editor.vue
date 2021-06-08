<template lang="pug">
.ma-3
	.rel(v-for="(ed, i) in edits")
		quill-editor(:ref='`block${ed.id}`',
			:content='ed.content', :options='editorOption',
			:class="checkUser(ed.id)" 
			@focus='onEditorFocus(i+1)'
			:key="ed.id")
		.action
			v-icon(@click="addBlock") mdi-plus-circle-outline
			v-icon(@click="shareBlock(ed.id)") mdi-share-variant
			v-icon(@click="deleteBlock()") mdi-trash-can-outline

	v-dialog(v-model="share" width="700")
		v-card.rel
			v-btn.close(icon @click="share = false" small)
				v-icon mdi-close
			v-card-title.text-h6 Доступ к блоку
			//- v-divider
			v-card-text
				v-form.form
					fieldset
						legend="Чтение"
						v-radio-group(v-model="read" )
							v-radio(label="Все" value="0")
							v-radio(label="Согласующие" value="1")
							v-radio(label="Только выбранные" value="2")
							v-radio(label="Кроме выбранных" value="3")

						v-autocomplete(v-model="friends" :items="people" chips label="Справочник сотрудников" multiple item-text="name" item-value="name" prepend-icon="mdi-book-open-page-variant")
							template(v-slot:selection="data")
								v-chip(color="blue lighten-4" v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove(data.item)")
									v-avatar( left color='blue lighten-5')
										v-img(:src="require(`@/assets/img/user${data.item.avatar}.svg`)")
									span {{ data.item.name }}
							
							template(v-slot:item="data")
								template(v-if="typeof data.item !== 'object'")
									v-list-item-content(v-text="data.item")
								template
									v-list-item-avatar(color='blue lighten-4')
										img(:src="require(`@/assets/img/user${data.item.avatar}.svg`)")
									
									v-list-item-content
										v-list-item-title(v-html="data.item.name")
										v-list-item-subtitle(v-html="data.item.group")


					fieldset.mt-3
						legend="Редактирование"
						v-radio-group(v-model="redact" )
							v-radio(label="Все" value="0")
							v-radio(label="Согласующие" value="1")
							v-radio(label="Только выбранные" value="2")
							v-radio(label="Кроме выбранных" value="3")

						v-autocomplete(v-model="enemy" :items="people" chips label="Справочник сотрудников" multiple item-text="name" item-value="name" prepend-icon="mdi-book-open-page-variant")
							template(v-slot:selection="data")
								v-chip(v-bind="data.attrs" :input-value="data.selected" close @click="data.select" @click:close="remove(data.item)")
									v-avatar( left color='blue lighten-4')
										v-img(:src="require(`@/assets/img/user${data.item.avatar}.svg`)")
									span {{ data.item.name }}
							
							template(v-slot:item="data")
								template(v-if="typeof data.item !== 'object'")
									v-list-item-content(v-text="data.item")
								template(v-else)
									v-list-item-avatar(color='blue lighten-4')
										img(:src="require(`@/assets/img/user${data.item.avatar}.svg`)")
									
									v-list-item-content
										v-list-item-title(v-html="data.item.name")
										v-list-item-subtitle(v-html="data.item.group")

			v-divider

			v-card-actions
				v-spacer
				v-btn(color="primary" text @click="share = false") Отмена
				v-btn(color="primary" text @click="share = false") Применить
</template>


<script>
import { v4 as uuidv4 } from 'uuid'
import { quillEditor } from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.bubble.css'

export default {
	components: {
		quillEditor,
	},
	methods: {
		remove (item) {
			const index = this.friends.indexOf(item.name)
			if (index >= 0) this.friends.splice(index, 1)
		},
		shareBlock() {
			this.share = true
		},
		deleteBlock() {
			this.$store.commit('deleteEdits')
		},
		addBlock() {
			this.$store.commit('addEdits', {id: uuidv4(), ref: 'block4', content: ''})
		},
		onEditorFocus(e) {
			this.$store.commit('setEditor', e)
		},
		checkUser (e) {
			switch (this.user) {
				case 1:
					if (e === 1) { return 'dis' }
					else if (e === 3) {return 'blur'}
					break;
				case 17:
					if (e === 2) { return 'blur' }
					else if (e === 1) {return 'dis'}
					break;
				default:
					return ''
			}
		},
	},
	computed: {
		edits () { return this.$store.getters.edits },
		user () { return this.$store.getters.user },
		editMode() { return this.$store.getters.editMode },
		editor1() { return this.$refs.block1[0].quill },
		editor2() { return this.$refs.block2[0].quill },
		editor3() { return this.$refs.block3[0].quill },
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
			read: '0',
			redact: '0',
			friends: [],
			enemy: [],
			people: [
				{ header: 'Согласующие' },
				{ name: 'Орлов П.С.', group: 'Генеральный директор', avatar: 0 },
				{ name: 'Гусева К.А.', group: 'Главный бухгалтер', avatar: 1 },
				{ name: 'Чайка С.В.', group: 'Юрист', avatar: 17 },
				{ divider: true },
				{ header: 'Справочник сотрудников' },
				{ name: 'Смирнов', group: '', avatar: 1 },
				{ name: 'Иванов', group: '', avatar: 2 },
				{ name: 'Кузнецов', group: '', avatar: 3 },
				{ name: 'Соколов', group: '', avatar: 4 },
				{ name: 'Попов', group: '', avatar: 5 },
				{ name: 'Лебедев', group: '', avatar: 6 },
				{ name: 'Козлов', group: '', avatar: 7 },
				{ name: 'Новиков', group: '', avatar: 8 },
				{ name: 'Морозов', group: '', avatar: 9 },
				{ name: 'Петров', group: '', avatar: 10 },
				{ name: 'Волков', group: '', avatar: 11 },
				{ name: 'Соловьёв', group: '', avatar: 12 },
				{ name: 'Васильев', group: '', avatar: 13 },
				{ name: 'Зайцев', group: '', avatar: 14 },
				{ name: 'Павлов', group: '', avatar: 15 },
				{ name: 'Семёнов', group: '', avatar: 16 },
				{ name: 'Голубев', group: '', avatar: 17 },
				{ name: 'Виноградов', group: '', avatar: 18 },
				{ name: 'Богданов', group: '', avatar: 1 },
				{ name: 'Воробьёв', group: '', avatar: 2 },
				{ name: 'Фёдоров', group: '', avatar: 3 },
				{ name: 'Михайлов', group: '', avatar: 4 },
				{ name: 'Беляев', group: '', avatar: 5 },
				{ name: 'Тарасов', group: '', avatar: 6 },
				{ name: 'Белов', group: '', avatar: 7 },
				{ name: 'Комаров', group: '', avatar: 8 },
				{ name: 'Орлов', group: '', avatar: 9 },
				{ name: 'Киселёв', group: '', avatar: 10 },
				{ name: 'Макаров', group: '', avatar: 11 },
				{ name: 'Андреев', group: '', avatar: 12 },
				{ name: 'Ковалёв', group: '', avatar: 13 },
				{ name: 'Ильин', group: '', avatar: 14 },
				{ name: 'Гусев', group: '', avatar: 15 },
				{ name: 'Титов', group: '', avatar: 16 },
				{ name: 'Кузьмин', group: '', avatar: 17 },
				{ name: 'Кудрявцев', group: '', avatar: 18 },
				{ name: 'Баранов', group: '', avatar: 1 },
				{ name: 'Куликов', group: '', avatar: 2 },
				{ name: 'Алексеев', group: '', avatar: 3 },
				{ name: 'Степанов', group: '', avatar: 4 },
				{ name: 'Яковлев', group: '', avatar: 5 },
				{ name: 'Сорокин', group: '', avatar: 6 },
				{ name: 'Сергеев', group: '', avatar: 7 },
				{ name: 'Романов', group: '', avatar: 8 },
				{ name: 'Захаров', group: '', avatar: 9 },
				{ name: 'Борисов', group: '', avatar: 10 },
				{ name: 'Королёв', group: '', avatar: 11 },
				{ name: 'Герасимов', group: '', avatar: 12 },
			],
			activeEditor: null,
			share: true,
			editorOption: {
				theme: 'bubble',
				placeholder: 'Новый блок для текста',
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
.action {
	/* width: 20px; */
	padding: 4px 10px;
	background: pink;
	position: absolute;
	bottom: -32px;
	right: -4px;
	z-index: 2;
	visibility: hidden;
	border-radius: 0 0 5px 5px;
	.v-icon {
		cursor: pointer;
		&:hover {
			color: Maroon;
		}
	}
	.v-icon:not(:last-child) {
		margin-right: 8px;
	}
}
.rel:focus-within .action {
	visibility: visible;
}
.close {
	position: absolute;
	top: .5rem;
	right: .5rem;
}
fieldset {
	padding: 0 1rem;
	border: 1px solid #ccc;
	/* border-width: 1px; */
	/* border-color: #eee; */
	border-radius: 5px;
}
	legend {
		font-size: 1.0rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
