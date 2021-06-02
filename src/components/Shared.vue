<template lang="pug">
.grid
	.num Вх. 345-3/3
	.status
		Status(title='Не начато')
	.zag
		v-btn.star(icon, small)
			v-icon mdi-star-outline
		| Проект договора об организации питания туристических групп
	.but
		v-btn(depressed, v-for='button in buttons', :color='button.color', dark) {{ button.label }}
		v-btn(icon)
			v-icon mdi-dots-horizontal

	v-tabs.mytab(v-model='tt')
		v-tab Главная
		v-tab Ход согласования
		v-tab-item(key='1')
			p main tab
		v-tab-item(key='2')
			p hod sogl

	//- div
		h1 laksj
		br
		p(v-for='n in 50') Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
</template>

<script>
import Status from '@/components/Status.vue'
export default {
	components: {
		Status,
	},
	data() {
		return {
			tt: 0,
			buttons: [
				{ label: 'В работу', color: 'docolor' },
				{ label: 'Согласовать', color: 'docolor' },
				{ label: 'Согласовать с замечаниями', color: 'docolor' },
				{ label: 'Отклонить', color: 'warning' },
				{ label: 'Делегировать', color: 'docolor' },
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
.theme--light.v-tabs > .v-tabs-bar {
	background: transparent;
}
.mytab {
	grid-column: 1 / -1;
}
@media only screen and (max-width: 960px) {
	.num,
	.status {
		grid-column: 1 / -1;
	}
}
.status {
	justify-self: end;
}
.v-btn:not(:last-child) {
	margin-right: 5px;
}
.star {
	margin-left: 0;
	margin-right: 5px;
}
.theme--light.v-btn.v-btn--icon {
	color: #aaa;
}
</style>

