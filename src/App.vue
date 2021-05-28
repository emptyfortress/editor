<template lang="pug">
v-app 
	Drawer(:maincolor="maincolor")
	v-app-bar(app :color="maincolor" flat clipped-left elevation="2" ).pr-2
		v-app-bar-nav-icon(color="#fff" @click="$store.commit('toggleDrawer')")
		.logo(v-show="!$vuetify.breakpoint.mobile")
			span {{ title }}
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
				v-list-item(link)
					v-list-item-title {{ name1 }}
			.avat
				.rel
					v-avatar(color="blue lighten-4" size="35"  v-ripple)
						img(:src="require(`@/assets/img/user${user}.svg`)")
					.dot

		v-btn(icon dark).ml-3
			v-icon mdi-help-circle-outline
	v-main
		.subbar(:class="maincolor")
			v-btn(text dark)
				v-icon mdi-plus
				span Создать
			//- v-btn(text dark)
				v-icon mdi-text-box-plus-outline
				span Создать
			v-btn(icon dark)
				i.icon-search-scan
		v-container.cont
			router-view

</template>

<script>
import Drawer from './components/Drawer'
import {maincolor} from '@/components/mixins/maincolor'

export default {
	name: 'App',
	mixins: [maincolor],
	components: {
		Drawer,
	},
	data: () => ({
		//
	}),
	computed: {
		title () { return this.$route.meta.title },
		drawer() { return this.$store.getters.drawer },
		mini() { return this.$store.getters.mini },
		user () { return this.$store.getters.user },
		name1 () {
			if (this.user === 0) {
				return 'Орлов П.С.'
			} else return 'Гусев К.А.'
		}
	},
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
	/* width: 250px; */
}
.icon-user, .icon-search, .icon-search-scan {
	font-size: 1.2rem;
	margin-left: -4px;
}
.subbar {
	height: 42px;
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
</style>
