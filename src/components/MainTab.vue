<template lang="pug">
.grd
	.main
	.attr
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.grd {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;
}
.attr {
	grid-column: 5 / 6;
	background: #ccc;
	height: 100px;
}
.main {
	grid-column: 1 / 5;
	background: #fff;
	height: 100px;
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
</style>
