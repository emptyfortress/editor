<template lang="pug">
.home
	Section
	Section
	Section
	Section

</template>

<script>
import Section from '@/components/Section.vue'

export default {
	name: 'Home',
	components: { Section },
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
</style>
