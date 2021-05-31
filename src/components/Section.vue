<template lang="pug">
div
	.hd
		span Heading
		.badge 4
	ul
		li(v-for="n in 4") text some
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';
/* div { */
/* 	height: 200px; */
/* 	background: #ccc; */
/* } */
.hd {
	font-size: 1.2rem;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ccc;
}
.badge {
	background: #ccc;
	font-size: 0.9rem;
	padding:  1px 8px;
	border-radius: 50%;
}
ul {
	list-style: none;
	padding: 0;
	font-size: 1.1rem;
	li {
		margin: 0;
		padding: 6px 15px;
		/* border-bottom: 1px solid #fff; */
		cursor: pointer;
		color: $link;
		border-top: 1px solid #efefef;
		border-bottom: 1px solid #efefef;
		&:hover {
			background: $selection;
			border-top: 1px solid darken($selection, 7%);
			border-bottom: 1px solid darken($selection, 7%);
		}

	}
}
</style>
