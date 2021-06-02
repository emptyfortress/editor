<template lang="pug">
.grid
	.num Вх. 345-3/3
	.status
		Status(title='Не начато')
	.zag
		v-btn.star(
			icon,
			small,
			@click='starred = !starred',
			:class='{ starred: starred }'
		)
			v-icon(v-if='!starred') mdi-star-outline
			v-icon(v-else) mdi-star
		| Проект договора об организации питания туристических групп
		v-btn.ml-4(icon, small)
			v-icon mdi-reload
		v-btn(icon, small, @click='toggleEditMode')
			v-icon mdi-pencil
		v-btn(icon, small)
			v-icon mdi-trash-can-outline
	.but
		v-btn(
			depressed,
			v-for='button in buttons',
			:key='button.label',
			:color='button.color',
			dark
		) {{ button.label }}
		MoreBt(:items='actions')

	v-tabs.mytab(v-model='tt')
		v-tab Главная
		v-tab Ход согласования
		v-tab-item(key='1')
			MainTab
		v-tab-item(key='2')
			p hod sogl
</template>

<script>
import Status from '@/components/Status.vue'
import MoreBt from '@/components/MoreBt.vue'
import MainTab from '@/components/MainTab.vue'

export default {
	components: {
		Status,
		MoreBt,
		MainTab,
	},
	computed: {
		editMode() {
			return this.$store.getters.editMode
		},
	},
	methods: {
		toggleEditMode() {
			this.$store.commit('toggleEditMode')
		},
	},
	data() {
		return {
			tt: 0,
			starred: false,
			buttons: [
				{ label: 'В работу', color: 'docolor' },
				{ label: 'Согласовать', color: 'docolor' },
				{ label: 'Согласовать с замечаниями', color: 'docolor' },
				{ label: 'Отклонить', color: 'warning' },
				{ label: 'Делегировать', color: 'docolor' },
			],
			actions: [
				{ title: 'Действие 1' },
				{ title: 'Действие 2' },
				{ title: 'Действие 3' },
			],
		}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 0.2rem 1rem;
}
.grey {
	background: #ccc;
	padding: 2 rem;
}
.num {
	font-size: 1.1rem;
}
.zag {
	grid-column: 1 / -1;
	color: black;
	text-align: left;
	font-size: 1.4rem;
}
.but {
	grid-column: 1 / -1;
	margin: 0.5rem 0;
}
.mytab {
	grid-column: 1 / -1;
}
.status {
	justify-self: end;
}
.v-btn:not(:last-child) {
	margin-right: 3px;
	margin-bottom: 3px;
}
.star {
	margin-left: 0;
	margin-right: 5px;
}
.theme--light.v-btn.v-btn--icon {
	color: #aaa;
}
.theme--light.v-btn.starred.v-btn--icon {
	color: orange;
}
@media only screen and (max-width: 960px) {
	.num,
	.status {
		grid-column: 1 / -1;
	}
	.status {
		justify-self: start;
	}
}
</style>

