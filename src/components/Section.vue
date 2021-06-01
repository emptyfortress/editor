<template lang="pug">
div
	.hd(v-ripple="{ class: 'info--text' }")
		span {{ heading }}
		.badge(v-if="badge") {{ badge }}
	ul
		li(v-for="item in items" v-ripple="{ class: 'info--text' }" )
			.text {{ item.text }}
			.badge(v-if="item.badge") {{ item.badge }}
</template>

<script>
export default {
	props: ['heading', 'badge', 'items'],

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
.badge {
	background: #ccc;
	font-size: 0.8rem;
	padding:  1px 8px;
	border-radius: 50%;
	color: #000;
}
ul {
	list-style: none;
	padding: 0;
	font-size: 1.05rem;
	li {
		margin: 0;
		padding: 6px 15px;
		padding-right: 3px;
		cursor: pointer;
		color: $link;
		border-top: 1px solid #E8E8E8;
		border-bottom: 1px solid #E8E8E8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:hover {
			/* background: $selection; */
			background: #f7f7f7;
			border-top: 1px solid darken($selection, 7%);
			border-bottom: 1px solid darken($selection, 7%);
		}
	}
}
</style>
