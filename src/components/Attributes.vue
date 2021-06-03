<template lang="pug">
//- v-expansion-panels
	v-expansion-panel(v-for='(item, i) in 5', :key='i')
		v-expansion-panel-header Item
		v-expansion-panel-content
			p lkajsldkj laksjd laksj laks

v-expansion-panels(tile, flat, v-model='panels', multiple, name='main')
	v-expansion-panel
		v-expansion-panel-header
			.blockhd.rel Информация
			//- v-tooltip(top)
				template(v-slot:activator='{ on }')
					v-btn.test(icon, v-on='on', @click.stop='toggleAll', small)
						v-icon mdi-unfold-more-horizontal
				span Свернуть/развернуть все
		v-expansion-panel-content
			.descr Детальный план ввода в эксплуатацию автоматизированной информационной системы государственного заказа Санкт-Петербурга на периода март-май 2020 г.

	v-expansion-panel
		v-expansion-panel-header
			.blockhd.rel Ссылки (2)
				//- v-btn.scan(@click.stop='', icon)
				//- 	v-icon mdi-plus
				//- v-btn.plus(@click.stop='', icon)
				//- 	i.icon-setup
		v-expansion-panel-content
			v-simple-table.nopad.lin(dense)
				thead
					tr
						th Вид
						th Имя
						th Тип
						th
				tbody
					tr(v-for='item in links', :key='item.id')
						td
							i.icon-card.mr-2
						td.lin {{ item.name }}
						td {{ item.type }}
						td.px-0.text-right
							v-btn(icon, small)
								v-icon(color='link') mdi-information
							v-btn(icon, small)
								v-icon mdi-dots-vertical
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					id: 0,
					fio: 'Иванов Г.',
					name: 'Исходящее письмо №564-3/3, Иванов Г.И. О пряниках',
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
</style>
