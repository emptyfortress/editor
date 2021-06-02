<template lang="pug">
.stat
	span {{ title }}
</template>

<script>
export default {
	props: ['title'],
}
</script>

<style scoped lang="scss">
.stat {
	/* display: inline-block; */
	font-size: 1rem;
	white-space: nowrap;
	span {
		letter-spacing: 0.5rem;
		/* border-top: 0.1rem solid #aaa; */
		/* border-bottom: 0.1rem solid #aaa; */
		display: inline-block;
		padding: 0.2rem 0;
		text-transform: uppercase;
		transition: 0.3s ease all;
	}
}
</style>
