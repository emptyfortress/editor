<template lang="pug">
v-app 
	SvgSprite
	v-app-bar.pr-2(
		app,
		:color='maincolor',
		flat,
	)
		.logo
			div Сервис активации Docsvision 5
			img(src="@/assets/img/logo.svg")
	v-main
		v-container.cont
			v-slide-x-transition(mode='out-in')
				router-view
</template>

<script>
import { maincolor } from '@/components/mixins/maincolor'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
	name: 'App',
	mixins: [maincolor],
	components: {
		SvgSprite,
	},
	data: () => ({
	}),
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: 0.2s all ease;
	margin-top: 2rem;
}

.logo {
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: #fff;
	font-size: 1.4rem;
	text-align: center;
	img {
		display: block;
		height: 34px;
	}
	/* width: 250px; */
}
.icon-user,
.icon-search {
	font-size: 1.2rem;
	margin-left: -4px;
}
.subbar {
	height: 42px;
	z-index: 3;
	&.stick {
		position: sticky;
		top: 0;
	}
	.tools {
		display: flex;
		transition: 0.3s ease all;
		&.away {
			transform: translateY(-150px);
		}
		.v-btn {
			height: 42px;
		}
	}
	.editor {
		display: flex;
		transition: 0.3s ease all;
		transform: translateY(-150px);
		justify-content: flex-start;
		margin-left: 1rem;
		&.here {
			transform: translateY(-42px);
		}
		.v-btn {
			height: 42px;
			margin-right: 3px;
		}
	}
}
.sticky {
	position: sticky;
	top: 0;
}
.menu {
	width: 200px;
}
.avat {
	position: absolute;
	top: 0px;
	right: 0px;
}
.v-list {
	padding-top: 0;
	padding-bottom: 0;
}
.dot {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #39c83c;
	border: 1px solid #fff;
	position: absolute;
	bottom: 0px;
	left: 0px;
}
.ddot {
	display: inline-block;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: #39c83c;
	border: 1px solid #fff;
	margin-right: 5px;
}
.scan {
	height: 42px;
	font-size: 1.9rem;
	color: #fff;
	cursor: pointer;
	padding: 0 1rem;
	svg.icon {
		font-size: 2rem;
	}
}
</style>
