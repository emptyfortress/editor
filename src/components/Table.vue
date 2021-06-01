<template lang="pug">
v-data-table(:headers="headers" :items="items" hide-default-footer hide-default-header)
	template(v-slot:header="{ props: { headers } }")
		thead
			tr
				th.small
				th(v-for="header in headers") {{ header.text }}
	
	template(v-slot:body="{ items }")
		tbody
			tr(v-for="item in items" :key="item.name" :class="{ unread : item.unread }" @click="goto(item)")
				td.small
				td {{ item.name }}
				td {{ item.created }}
				td {{ item.modified }}


</template>

<script>
export default {
	props: ['headers', 'items'],
	methods: {
		goto(e) {
			if (!e.url) {
				return
			} else this.$router.push(e.url)
		}
	}
}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.theme--light.v-data-table
	> .v-data-table__wrapper
	> table
	> thead
	> tr:last-child
	> th {
	height: 2rem;
}
.theme--light.v-data-table {
	background: #fff;
	border: 1px solid #ccc;
}
.theme--light.v-data-table tr {
	color: $link;
	&.unread {
		font-weight: bold;
	}
}
tr {
	cursor: pointer;
}

th {
	border-bottom: thin solid rgba(0, 0, 0, 0.12);
	background: #dedede;
	font-size: 0.7rem;
	font-weight: 400;
	height: 1rem;
	color: #333;
	border: 1px solid #fff;
	padding: 5px 1rem;

}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td.small, .v-data-table > .v-data-table__wrapper > table > tbody > tr > th.small, .v-data-table > .v-data-table__wrapper > table > thead > tr > td.small, .v-data-table > .v-data-table__wrapper > table > thead > tr > th.small {
	width: 5px;
	padding: 0;
	border: none;
}
.unread td.small {
	background: #005CA3;
}
/* tr::after { */
/* 	content: ''; */
/* 	width: 5px; */
/* 	height: 100%; */
/* 	background: red; */
/* 	position: absolute; */
/* 	top: 0; */
/* 	left: 0; */
/* } */

</style>
