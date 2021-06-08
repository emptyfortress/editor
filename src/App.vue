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
				v-list-item(
					link,
					two-line,
					v-for='men in users',
					@click='setActiveUser(men.id)'
					:key='men.id'
				)
					v-list-item-content
						v-list-item-title {{ men.name }}
						v-list-item-subtitle
							span.ddot
							span активен
					v-list-item-avatar(color='blue lighten-4')
						v-img(:src='require(`@/assets/img/user${men.id}.svg`)')

		v-btn.ml-3(icon, dark, v-show='scroll')
			v-icon mdi-help-circle-outline
	v-main(v-scroll='handleScroll')
		.subbar(:class='calcBar')
			.tools(:class='{ away: editMode }')
				v-btn(dark, depressed, tile, :color='create')
					v-icon mdi-plus
					span Создать
				.scan(v-ripple)
					svg-icon(icon='search-scan')
			.editor(:class='{ here: editMode }')
				v-btn(depressed, dark, small, :color='create' @click="addBlock") Новый блок
				v-btn(depressed, dark, small, :color='create') Доступ к блоку
				v-btn(depressed, dark, small, :color='create') Удалить блок
				v-btn(depressed, dark, small, :color='create') Сохранить документ
		v-container.cont
			v-slide-x-transition(mode='out-in')
				router-view
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
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
		users: [
			{ id: 0, name: 'Орлов П.С.' },
			{ id: 1, name: 'Гусева К.А.' },
			{ id: 17, name: 'Чайка С.В.' },
		],
	}),
	computed: {
		calcBar() {
			if (this.editMode) {
				switch (this.maincolor) {
					case 'docolor':
						return 'docolor stick'
					case 'taskcolor':
						return 'taskcolor stick'
					default:
						return 'dark stick'
				}
			} else if (!this.editMode) {
				switch (this.maincolor) {
					case 'docolor':
						return 'docolor'
					case 'taskcolor':
						return 'taskcolor'
					default:
						return 'dark'
				}
			} else return 'dark'
		},
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
	},

	methods: {
		addBlock() {
			this.$store.commit('addEdits', {id: uuidv4(), ref: 'block4', content: ''})
		},
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
		setActiveUser(e) {
			this.$store.commit('setUser', e)
			this.$store.commit('setEditMode', false)
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
