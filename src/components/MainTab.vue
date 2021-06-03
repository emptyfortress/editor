<template lang="pug">
.grd
	.main.elevation-2(:class='{ full: full }')
		.expand
			v-btn(icon, small, @click='toggleEditMode')
				svg-icon.rem(icon='pencil')
			v-btn(icon, @click='toggleFull', small)
				svg-icon.rem(icon='expand', v-if='!full')
				svg-icon.rem(icon='collapse', v-else)
		Editor
	.attr(:class='{ full: full }')
		Attributes(:full='full')
</template>

<script>
import Attributes from '@/components/Attributes.vue'
import Editor from '@/components/Editor.vue'

export default {
	components: { Attributes, Editor },
	data() {
		return {
			full: false,
		}
	},
	methods: {
		toggleFull() {
			this.full = !this.full
		},
		toggleEditMode() {
			this.$store.commit('toggleEditMode')
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
	padding-bottom: 3rem;
}
.attr {
	grid-column: 4 / 6;
	position: relative;
	&.full {
		grid-column: 1 / -1;
	}
}
.main {
	grid-column: 1 / 4;
	background: #fff;
	height: 3100px;
	position: relative;
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
	z-index: 10;
}
</style>
