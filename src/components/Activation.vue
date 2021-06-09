<template lang="pug">
.all
	.block
		h3 1. Создайте файл запроса активации
		p В консоли настройки Docsvision введите серийный номер вашей лицензии и создайте файл активации.
	.block
		h3 2. Загрузите файл запроса активации на сервер Docsvision:
		.flex
			v-text-field(label="Выбрать файл")
			v-btn(flat color="primary" small) Загрузить
	.block.err
		h3 2. Загрузите файл запроса активации на сервер Docsvision:
		.flex
			v-text-field(label="Ошибка" value="C:/temp/test.jpg").err
			v-btn(flat color="primary" small) Загрузить
		.mess Данный файл не является файлом запроса активации. Попробуйте еще раз?
	.block
		h3 3. Активируйте свою копию Docsvision
		.flex
			p Нажимите кнопку "Активировать" и сгенерируйте файл активации.
			v-btn(flat color="primary" small) Активировать
	.block
		h3 4. Скачайте сгенерированный файл активации
		.flex
			p Сохраните файл активации на свой компьютер.
			v-btn(flat color="primary" small) Скачать
	.block
		h3 5. Укажите путь к файлу активации в консоли Docsvision
		.flex
			v-text-field(label="Выбрать файл")
			v-btn(flat color="primary" small) Выбрать

	v-btn(flat color="success" large).middle Активировать



</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import '@/assets/css/colors';

.all {
	width: 900px;
	margin: 0 auto;
}
.block {
	background: #fff;
	border: 1px dotted #aaa;
	border-radius: 5px;
	padding: 1rem;
	margin-bottom: 1rem;
}
h3 {
	font-weight: 400;
	margin-bottom: 1rem;
}
p {
	color: #666;
	margin-bottom: 0;
}
.flex {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
}
.middle {
	display: block;
	margin: 0 auto;
}
.block.err {
	border-color: red;
	outline: 5px solid pink;
}
	.mess {
		color: red;
		font-size: .8rem;
		transform: translateY(-20px);
	}
</style>
