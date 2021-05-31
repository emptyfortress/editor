<template lang="pug">
div
	.hd(v-ripple="{ class: 'info--text' }")
		span Heading
		.badge 4
	ul
		li(v-for="n in 4" v-ripple="{ class: 'info--text' }" ) text some
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
.badge {
	background: #ccc;
	font-size: 0.9rem;
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
		cursor: pointer;
		color: $link;
		border-top: 1px solid #E8E8E8;
		border-bottom: 1px solid #E8E8E8;
		&:hover {
			/* background: $selection; */
			background: #f7f7f7;
			border-top: 1px solid darken($selection, 7%);
			border-bottom: 1px solid darken($selection, 7%);
		}
		/* &:active { */
		/* 	background: #fff; */
		/* 	border-top: 1px solid darken($selection, 7%); */
		/* 	border-bottom: 1px solid darken($selection, 7%); */
		/* } */

	}
}
</style>
