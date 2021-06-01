<template lang="pug">
div
	.hd
		span Последние карточки
		.switch
			svg-icon(icon="1-line")
			svg-icon(icon="2-line")
	Table
</template>

<script>
import Table from '@/components/Table.vue'
export default {
	components: { Table }

}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.hd {
	font-size: 1.2rem;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
	color: $link;
	cursor: pointer;
	padding: 6px 3px;
	&:hover {
		/* background: #f7f7f7; */
	}
}
.switch {
	color: #666;
	display: flex;
	svg {
		border: 1px solid #999;
		margin-left: 3px;
		font-size: 2.0rem;
		cursor: pointer;
		color: #999;
		&:hover {
			color: #333;
			border: 1px solid #333;
		}
	}
}
</style>
