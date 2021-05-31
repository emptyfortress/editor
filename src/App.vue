<template lang="pug">
v-app 
	SvgSprite
	Drawer(:maincolor="maincolor")
	v-app-bar(app :color="maincolor" flat clipped-left elevation="2" ).pr-2
		v-app-bar-nav-icon(color="#fff" @click="$store.commit('toggleDrawer')")
		.logo(v-show="!$vuetify.breakpoint.mobile")
			img(src="@/assets/img/archive.svg")
			//- span {{ title }}
		v-spacer
		v-btn( href="" icon ).mr-3
			v-icon(color="#fff") mdi-magnify
		v-menu(bottom left)
			template(v-slot:activator="{ on, attrs }")
				.rel
					v-avatar(color="blue lighten-4" size="35"  v-ripple v-bind="attrs" v-on="on")
						img(:src="require(`@/assets/img/user${user}.svg`)")
					.dot
			v-list.menu
				v-list-item(link two-line )
					v-list-item-content
						v-list-item-title {{ name1 }}
						v-list-item-subtitle
							span.ddot
							span активен
				v-list-item(link two-line @click="setUser()")
					v-list-item-content
						v-list-item-title {{ name2 }}
						v-list-item-subtitle
							span.ddot.orange
							span неактивeн
					v-list-item-avatar(color="blue lighten-4")
						v-img(:src="require(`@/assets/img/user${user2}.svg`)")
			.avat
				.rel
					v-avatar(color="blue lighten-4" size="35"  v-ripple)
						img(:src="require(`@/assets/img/user${user}.svg`)")
					.dot

		v-btn(icon dark).ml-3
			v-icon mdi-help-circle-outline
	v-main
		.subbar(:class="maincolor")
			v-btn(depressed dark color="#01392D")
				v-icon mdi-plus
				span Создать
			.scan(v-ripple)
				svg-icon(icon="search-scan")
		v-container.cont
			router-view

</template>

<script>
import Drawer from './components/Drawer'
import {maincolor} from '@/components/mixins/maincolor'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
	name: 'App',
	mixins: [maincolor],
	components: {
		Drawer,
		SvgSprite,
	},
	data: () => ({
		//
	}),
	computed: {
		title () { return this.$route.meta.title },
		drawer() { return this.$store.getters.drawer },
		mini() { return this.$store.getters.mini },
		user () { return this.$store.getters.user },
		user2 () {
			if (this.user === 0) {
				return 1
			} else return 0
		},
		name1 () {
			if (this.user === 0) {
				return 'Орлов П.С.'
			} else return 'Гусева К.А.'
		},
		name2 () {
			if (this.user === 0) {
				return 'Гусева К.А.'
			} else return 'Орлов П.С.'
		}
	},
	methods: {
		setUser () {
			if (this.user === 0) {
				this.$store.commit('setUser', 1)
			} else this.$store.commit('setUser', 0)
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: .2s all ease;
	margin-top: 2rem;
}

.logo {
	color: #fff;
	font-size: 1.4rem;
	img {
		margin-left: 2rem;
		vertical-align: middle;
		width: 150px;
	}
	/* width: 250px; */
}
.icon-user, .icon-search  {
	font-size: 1.2rem;
	margin-left: -4px;
}
.subbar {
	height: 42px;
	display: flex;
	.v-btn {
		height: 42px;
	}
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
	background: #39C83C;
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
	background: #39C83C;
	border: 1px solid #fff;
	margin-right: 5px;
}
.scan {
	height: 42px;
	font-size: 1.9rem;
	color: #fff;
	cursor: pointer;
	padding: 0 1rem;
}
</style>
