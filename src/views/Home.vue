<template lang="pug">
.home
	Section(v-for="block in blocks" :heading="block.heading" :badge="block.badge" :items="block.items")
	LastCards.full

</template>

<script>
import Section from '@/components/Section.vue'
import LastCards from '@/components/LastCards.vue'

export default {
	name: 'Home',
	components: { Section, LastCards },
	data() {
		return {
			one: 1,
			blocks: [
				{ id: 0, heading: 'Входящие', badge: 3, items: [
					{ text: 'В работе', },
					{ text: 'На контроле',  },
					{ text: 'Ответственное исполнение', },
				] },
				{ id: 1, heading: 'Исходящие', badge: 1, items: [
					{ text: 'Делегировано', },
					{ text: 'Завершено',  },
				] },
				{ id: 2, heading: 'Мои документы', items: [
					{ text: 'Я - автор', badge: 2 },
				] },
			]
		}
	},
}
</script>

<style scoped lang="scss">
.home {
	display: grid;
	grid-template-columns: repeat( 3, 1fr );
	gap: 2rem;
}
.full {
	grid-column: 1/-1;
	margin-top: 1rem;
	
}
</style>
