<template lang="pug">
v-app 
	SvgSprite
	Drawer(:maincolor='maincolor')
	v-app-bar.pr-2(
		app,
		:color='maincolor',
		flat,
		clipped-left,
		elevation='2',
		collapse-on-scroll,
		:class='calcWidth()'
	)
		v-app-bar-nav-icon(color='#fff', @click='$store.commit("toggleDrawer")')
		.logo(v-show='scroll')
			span {{ title }}
		v-spacer
		v-btn.mr-3(href='', icon, v-show='scroll')
			v-icon(color='#fff') mdi-magnify
		v-menu(bottom, left)
			template(v-slot:activator='{ on, attrs }')
				.rel(v-show='scroll')
					v-avatar(
						color='blue lighten-4',
						size='35',
						v-ripple,
						v-bind='attrs',
						v-on='on'
					)
						img(:src='require(`@/assets/img/user${user}.svg`)')
					.dot
			v-list.menu
				v-list-item(link, two-line)
					v-list-item-content
						v-list-item-title {{ name1 }}
						v-list-item-subtitle
							span.ddot
							span активен
				v-list-item(link, two-line, @click='setUser()')
					v-list-item-content
						v-list-item-title {{ name2 }}
						v-list-item-subtitle
							span.ddot.orange
							span неактивeн
					v-list-item-avatar(color='blue lighten-4')
						v-img(:src='require(`@/assets/img/user${user2}.svg`)')
				v-list-item(link, two-line, @click='setUser()')
					v-list-item-content
						v-list-item-title {{ name2 }}
						v-list-item-subtitle
							span.ddot.orange
							span неактивeн
					v-list-item-avatar(color='blue lighten-4')
						v-img(:src='require(`@/assets/img/user${user2}.svg`)')
			.avat
				.rel
					v-avatar(color='blue lighten-4', size='35', v-ripple)
						img(:src='require(`@/assets/img/user${user}.svg`)')
					.dot

		v-btn.ml-3(icon, dark, v-show='scroll')
			v-icon mdi-help-circle-outline
	v-main(v-scroll='handleScroll')
		.subbar(:class='maincolor')
			.tools(:class='{ away: editMode }')
				v-btn(dark, depressed, tile, :color='create')
					v-icon mdi-plus
					span Создать
				.scan(v-ripple)
					svg-icon(icon='search-scan')
			.editor(:class='{ here: editMode }')
				v-btn(depressed, dark, small, :color='create') Новый блок
				v-btn(depressed, dark, small, :color='create') Доступ к блоку
				v-btn(depressed, dark, small, :color='create') Удалить блок
				v-btn(depressed, dark, small, :color='create') Сохранить документ
		v-container.cont
			v-slide-x-transition(mode='out-in')
				router-view
</template>

<script>
import Drawer from './components/Drawer'
import { maincolor } from '@/components/mixins/maincolor'
import SvgSprite from '@/components/SvgSprite.vue'

export default {
	name: 'App',
	mixins: [maincolor],
	components: {
		Drawer,
		SvgSprite,
	},
	data: () => ({
		scroll: true,
	}),
	computed: {
		editMode() {
			return this.$store.getters.editMode
		},
		create() {
			switch (this.maincolor) {
				case 'docolor':
					return '#005484'
				case 'taskcolor':
					return '#3F6D34'
				default:
					return '#1B222C'
			}
		},
		title() {
			return this.$route.meta.title
		},
		drawer() {
			return this.$store.getters.drawer
		},
		mini() {
			return this.$store.getters.mini
		},
		user() {
			return this.$store.getters.user
		},
		user2() {
			if (this.user === 0) {
				return 1
			} else return 0
		},
		name1() {
			if (this.user === 0) {
				return 'Орлов П.С.'
			} else return 'Гусева К.А.'
		},
		name2() {
			if (this.user === 0) {
				return 'Гусева К.А.'
			} else return 'Орлов П.С.'
		},
	},

	methods: {
		handleScroll() {
			if (window.pageYOffset > 0) {
				this.scroll = false
			} else if (window.pageYOffset < 40) {
				this.scroll = true
			}
		},
		calcWidth() {
			// let po = window.pageYOffset
			if (this.drawer && !this.mini) {
				return 'drawer'
			} else if (this.drawer && this.mini) {
				return 'mid'
			} else return 'sm'
		},
		setUser() {
			if (this.user === 0) {
				this.$store.commit('setUser', 1)
			} else this.$store.commit('setUser', 0)
		},
	},
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors.scss';

.v-toolbar.v-toolbar--collapsed {
	max-width: 260px;
	&.sm {
		max-width: 48px;
	}
	&.mid {
		max-width: 82px;
	}
	&.drawer {
		max-width: 320px;
	}
}
.v-main {
	background: #efefef;
}
.cont {
	padding: 0 1rem;
	transition: 0.2s all ease;
	margin-top: 2rem;
}

.logo {
	color: #fff;
	font-size: 1.4rem;
	/* width: 250px; */
}
.icon-user,
.icon-search {
	font-size: 1.2rem;
	margin-left: -4px;
}
.subbar {
	height: 42px;
	position: sticky;
	top: 0;
	z-index: 1;
	.tools {
		display: flex;
		transition: 0.3s ease all;
		&.away {
			transform: translateY(-50px);
		}
		.v-btn {
			height: 42px;
		}
	}
	.editor {
		display: flex;
		transition: 0.3s ease all;
		transform: translateY(-86px);
		justify-content: start;
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
