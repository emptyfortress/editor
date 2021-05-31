<template lang="pug">
.home
	Section
	Section
	Section
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
	margin-top: 2rem;
	
}
</style>
