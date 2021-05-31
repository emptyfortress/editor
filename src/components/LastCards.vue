<template lang="pug">
div
	.hd(v-ripple="{ class: 'info--text' }")
		span Последние карточки
		.badge 4
</template>

<script>
export default {

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
		background: #f7f7f7;
	}
}
</style>
