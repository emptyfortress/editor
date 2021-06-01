<template lang="pug">
table
	thead
		th lakjs
		th lakjs
		th lakjs
	tbody
		tr(v-for="n in 5")
			td lak
			td lak
			td lak

</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
table {
	width: 100%;
	background: #fff;
}
th {
	background: #ccc;
	font-size: .8rem;
	font-weight: 400;
	height: 32px;
	text-align: left;
	padding: 0 1rem;
}
td {
	padding: .5rem 1rem;
}
	tr {
		border-bottom: 1px solid #ccc;
	}
</style>
