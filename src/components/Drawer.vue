<template lang="pug">
v-navigation-drawer(
	v-model='drawer',
	dark,
	:color='maincolor',
	clipped,
	app,
	:mini-variant.sync='mini',
	width='310'
)
	v-list
		v-list-item(
			link,
			@click='goTo(item.url)',
			v-for='item in menu',
			:key='item.id',
			:class='path === item.url ? "active" : ""'
		)
			v-list-item-icon
				v-icon {{ item.icon }}
			v-list-item-content
				v-list-item-title {{ item.text }}

	v-btn.mini(@click='toggleMini', icon)
		v-icon(v-if='!mini') mdi-backburger
		v-icon(v-else) mdi-forwardburger
</template>

<script>
export default {
	props: ['maincolor'],
	data() {
		return {
			size: {
				width: 50,
				height: 24,
			},
			menu: [
				{ id: 0, url: '/', icon: 'mdi-home-roof', text: 'Главная' },
				{ id: 1, url: '/folder', icon: 'mdi-magnify', text: 'Поиск' },
				{
					id: 2,
					url: '/history',
					icon: 'mdi-history',
					text: 'Последние карточки',
				},
				{ id: 3, url: '/task', icon: 'mdi-check-bold', text: 'МОИ ЗАДАНИЯ' },
				{
					id: 4,
					url: '/doc2',
					icon: 'mdi-file-document-outline',
					text: 'МОИ ДОКУМЕНТЫ',
				},
			],
		}
	},
	methods: {
		goTo(e) {
			if (this.$route.path === e) {
				return
			} else this.$router.push(e)
		},
		toggleMini() {
			if (this.mini === true) {
				this.$store.commit('setMini', false)
			} else this.$store.commit('setMini', true)
		},
	},
	computed: {
		path() {
			return this.$route.path
		},
		drawer: {
			get() {
				return this.$store.getters.drawer
			},
			set() {},
		},
		mini: {
			get() {
				return this.$store.getters.mini
			},
			set() {},
		},
	},
	components: {},
}
</script>

<style scoped lang="scss">
.theme--dark.v-list {
	background: transparent;
}
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	cursor: pointer;
}
.min {
	font-size: 0.9rem;
}
.ic {
	font-size: 1.3rem;
	width: 24px;
}
.v-application--is-ltr .v-list-item__icon:first-child {
	margin-right: 1rem;
}
.v-navigation-drawer--mini-variant .v-list-item > *:first-child {
	margin-left: 0;
	margin-right: 0;
}
.theme--light .active {
	background: rgba(0, 0, 0, 0.1);
	color: black;
}
.theme--dark .active {
	background: rgba(255, 255, 255, 0.07);
}
.v-list-item {
	border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.v-navigation-drawer--clipped:not(.v-navigation-drawer--temporary):not(.v-navigation-drawer--is-mobile) {
	z-index: 0;
}
</style>
