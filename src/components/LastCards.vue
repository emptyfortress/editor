<template lang="pug">
div
	.hd
		span Тенанты (5)
		.filter
			v-text-field(dense v-model="search" clearable prepend-icon="mdi-magnify" label="Поиск" single-line hide-details)
			//- v-text-field(label="Поиск" v-model="filter")
	table.ten
		thead
			th Контрагент
			th База данных
		tr(v-for="item in filteredItems")
			td {{item.name}}
			td {{ item.bd }}
	//- ul
		li(v-for="n in 4" v-ripple="{ class: 'info--text' }" )
			.text text some
			.badge 4

</template>

<script>
export default {
	data() {
		return {
			search: '',
			tenants: [
				{ id: 0, bd: 'docsvision 1', name: 'Университет' },
				{ id: 1, bd: 'docsvision 2', name: 'Пробирная палата' },
				{ id: 2, bd: 'test database', name: 'Контрагент 1' },
				{ id: 3, bd: 'test database', name: 'Контрагент 2' },
				{ id: 4, bd: 'add45fga', name: 'Гознак' },
				{ id: 5, bd: 'la11lsd.test', name: 'Трактир "Три дороги"' },
			],
		}
	},
	computed: {
		filteredItems () {
			let filt = this.search.toLowerCase()
			if (this.search.length) {
				return this.tenants.filter( item => item.name.toLowerCase().includes(filt) || item.bd.includes(filt))
			} else return this.tenants
		}
		
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.hd {
	margin-bottom: .5rem;
	font-size: 1.2rem;
	font-weight: 400;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: $link;
	padding: 6px 3px;
	span {
		cursor: pointer;
	}
}
ul {
	list-style: none;
	padding: 0;
	font-size: 1.05rem;
	li {
		margin: 0;
		padding: 6px 15px;
		padding-right: 3px;
		cursor: pointer;
		color: $link;
		border-top: 1px solid #E8E8E8;
		border-bottom: 1px solid #E8E8E8;
		display: flex;
		justify-content: space-between;
		align-items: center;
		&:hover {
			/* background: $selection; */
			background: #f7f7f7;
			border-top: 1px solid darken($selection, 7%);
			border-bottom: 1px solid darken($selection, 7%);
		}
	}
}
	th {
		font-weight: 400;
		font-size: 0.8rem;
		text-align: left;
		padding: 5px 24px;
		background: #dedede;
	}
	table {
		width: 100%;
		background: #fff;
	}
	tr {
		cursor: pointer;
		&:hover {
			background: $selection;
		}
	}
	td {
		padding: 10px 24px;
		color: $link;
		border-bottom: 1px solid #eee;
	}
</style>
