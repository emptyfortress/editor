<template lang="pug">
.grd
	.main.elevation-2(:class='{ full: full }')
		v-btn.expand(icon, @click='toggleFull', small)
			svg-icon.rem(icon='expand', v-if='!full')
			svg-icon.rem(icon='collapse', v-else)
	.attr
		Attributes
		//- v-btn.expand(icon, @click='toggleFull', small)
			svg-icon.rem(icon='expand', v-if='!full')
			svg-icon.rem(icon='collapse', v-else)
</template>

<script>
import Attributes from '@/components/Attributes.vue'
export default {
	components: { Attributes },
	data() {
		return {
			full: false,
			panels: [1, 2],
		}
	},
	methods: {
		toggleFull() {
			this.full = !this.full
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.grd {
	margin-top: 1rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;
}
.attr {
	grid-column: 4 / 6;
	/* background: #ccc; */
	/* height: 100px; */
	position: relative;
}
.main {
	grid-column: 1 / 4;
	background: #fff;
	height: 3100px;
	position: relative;
	margin-bottom: 3rem;
	&.full {
		grid-column: 1 / -1;
	}
}
.grey {
	height: 100px;
	background: #ccc;
}
@media screen and (max-width: 960px) {
	.main,
	.attr {
		grid-column: 1/-1;
	}
}
.expand {
	position: absolute;
	top: 0.2rem;
	right: 0.2rem;
}
</style>
