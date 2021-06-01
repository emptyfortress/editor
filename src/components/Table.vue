<template lang="pug">
table
	thead
		th(v-for="head in heads") {{ head.title }}
	tr(v-for="n in 5")
		td lak
		td lak
		td lak

</template>

<script>
export default {
	props: ['heads'],

}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

table {
	width: 100%;
	background: #fff;
}
tbody {
	/* border-collapse: collapse; */
}
th {
	font-weight: 400;
	font-size: 0.8rem;
	text-align: left;
	background: #dedede;
	height: 32px;
	padding: 0 1rem;
}
tr {
	cursor: pointer;
	&:hover {
		background: $selection;
	}
}
td {
	padding: .5rem 1rem;
	color: $link;
	border-bottom: 1px solid #eee;
}
</style>
