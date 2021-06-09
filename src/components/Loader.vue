<template>
<content-loader :width="1190" :height="936" :speed="2" primaryColor="#ffffff" secondaryColor="#efefef">
	<path d="M 20 36 h 80 v 21 H 20 z M 20 70 h 827 v 27 H 20 z M 989 36 h 179 v 21 H 989 z M 20 112 h 351 v 41 H 20 z M 20 173 h 103 v 33 H 20 z M 136 173 h 171 v 33 H 136 z M 723 227 h 452 v 154 H 723 z M 723 407 h 452 v 40 H 723 z M 20 227 h 686 v 863 H 20 z" />
</content-loader>

</template>

<script>
import { ContentLoader } from "vue-content-loader"

export default {
	components: {
		ContentLoader
	}
}

</script>
