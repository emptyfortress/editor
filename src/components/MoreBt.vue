<template lang="pug">
v-menu(transition='slide-y-transition', bottom)
	template(v-slot:activator='{ on, attrs }')
		v-btn(icon, v-bind='attrs', v-on='on')
			v-icon mdi-dots-horizontal
	v-list
		v-list-item(v-for='(item, i) in items', :key='i', @click='')
			v-list-item-title {{ item.title }}
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			default: () => [
				{ title: 'Item 1' },
				{ title: 'Item 2' },
				{ title: 'Item 3' },
			],
		},
	},
	data() {
		return {}
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';
</style>
