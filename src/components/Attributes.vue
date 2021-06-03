<template lang="pug">
v-expansion-panels(tile, flat, v-model='panels', multiple, name='main')
	v-expansion-panel(value='1')
		v-expansion-panel-header
			.blockhd.rel Информация
		v-expansion-panel-content
			.descr
				template(v-for='item in items')
					span.lab {{ item.label }}:
					span.val {{ item.value }}

	v-expansion-panel(value='2')
		v-expansion-panel-header
			.blockhd.rel Ссылки (2)
		v-expansion-panel-content
			v-simple-table.nopad(dense)
				thead
					tr
						th Вид
						th Имя
						th Тип
						th
						th
				tbody
					tr(v-for='item in links', :key='item.id')
						td
							svg-icon(icon='cardv')
						td.lin {{ item.name }}
						td {{ item.type }}
						td.px-0.text-right
							v-btn(icon, small)
								v-icon(color='link') mdi-information
						td.px-0.text-right
							v-btn(icon, small)
								v-icon mdi-dots-vertical
</template>

<script>
export default {
	props: ['full'],
	data() {
		return {
			panels: [0],
			items: [
				{ id: 0, label: 'Рег.дата', value: '31.05.2021' },
				{ id: 1, label: 'Подготовил', value: 'Карачева О.' },
				{ id: 2, label: 'Согласуют', value: 'Орлов П.С., Гусева К.А.' },
			],
			links: [
				{
					id: 0,
					fio: 'Иванов Г.',
					name: 'Исходящее письмо №564-3/3, Иванов Г.И. Обеды в кафе',
					type: 'В ответ на',
				},
				{
					id: 1,
					fio: 'Кац П.',
					name: 'Входящее письмо №098(45.3), отправитель: ООО Лучик',
					type: 'Входящий',
				},
			],
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.theme--light.v-expansion-panels .v-expansion-panel--active {
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
	border: 1px solid #ccc;
	background: #fefefe;
}
.v-expansion-panel-header .blockhd {
	flex-grow: 1;
}
.blockhd {
	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: 600;
	letter-spacing: 0.15rem;
	color: $primary;
}
.nopad {
	th {
		text-align: left;
		padding: 0 5px !important;
	}
	td {
		padding: 0 5px !important;
		&.lin {
			color: $link;
		}
	}
}
.descr {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 5px 15px;
	font-size: 0.9rem;
	.lab {
		color: #666;
	}
}
</style>
