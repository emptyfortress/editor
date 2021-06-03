<template lang="pug">
v-card.hod
	v-breadcrumbs.mx-0.px-0(:items='crumbs', @click.prevent='doNothing')
	.etap Этап 1. Согласование (последовательно)
	v-simple-table
		template(v-slot:default)
			thead
				tr.myhead
					th.text-left(v-for='item in headers') {{ item.text }}
			tbody
				tr.my(v-for='item in table', :key='item.fio')
					td.nowrap.bl(width='150') {{ item.fio }}
					td(width='250')
						v-icon(small, :color='item.color') {{ item.icon }}
						span.ml-2 {{ item.decision }}
					td.nowrap {{ item.date }}
					td {{ item.comment }}
					td
</template>

<script>
export default {
	data() {
		return {
			headers: [
				{ text: 'Согласующий', value: 'fio' },
				{ text: 'Решение', value: 'decision' },
				{ text: 'Дата', value: 'date' },
				{ text: 'Комментарий', value: 'comment' },
				{ text: 'Правки' },
			],
			crumbs: [
				{ text: 'Циклы согласования:', disabled: true },
				{ text: '1 цикл', disabled: false, href: '#' },
				{ text: '2 цикл', disabled: true, href: '#' },
			],
			table: [
				{
					icon: 'mdi-account-plus',
					color: 'primary',
					fio: 'Дроздова С.П.',
					decision: 'Добавить согласующих',
					date: '23.12.2020',
					comment:
						'Требуется согласование юридического отдела. Указан доп.согласующий Петров Г.М.',
				},
				{
					icon: 'mdi-message-outline',
					color: 'primary',
					fio: 'Петров Г.М.',
					decision: 'Согласовано с замечаниями',
					date: '23.12.2020',
					comment: 'Нужно изменить акт',
				},
				{
					icon: 'mdi-do-not-disturb',
					color: 'red',
					fio: 'Синицына А.П.',
					decision: 'Отклонено',
					date: '23.12.2020',
					comment: 'Нужно переделать договор',
				},
				{
					icon: 'mdi-timer-sand-empty',
					color: 'grey',
					fio: 'Орлов П.П.',
					decision: 'Ожидает решения',
					date: '',
					comment: '',
				},
			],
		}
	},
	methods: {
		doNothing(evt) {
			evt.stopPropagation()
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.nowrap {
	white-space: nowrap;
}
.etap {
	margin-bottom: 0.5rem;
	font-weight: 500;
}
.myhead {
	th {
		background: #eee;
		height: 30px;
		border: 1px solid white;
	}
}
.my td {
	color: #666;
	padding: 6px 13px;
	&.bl {
		color: black;
	}
}
.hod {
	/* box-shadow: 0 3px 9px rgba(0,0,0,.2); */
	margin-top: 1rem;
	padding: 2rem;
	padding-top: 1rem;
}
</style>
