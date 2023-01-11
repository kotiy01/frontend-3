<template>
    <section class="reviews-sec">
        <div class="reviews-sec__container">
            <h2 class="reviews-sec__title">Отзывы пользователей</h2>
            <div class="reviews-sec__content-block">
                <div class="reviews-sec__item item">
                    <p class="item__name">Александр</p>
                    <p class="item__desc">Очень полезный сервис!</p>
                </div>
                <div class="reviews-sec__item item">
                    <p class="item__name">Олег</p>
                    <p class="item__desc">Моя продуктивность выросла!</p>
                </div>
                <div class="reviews-sec__item item">
                    <p class="item__name">Иван</p>
                    <p class="item__desc">Пользуюсь сервисом ежедневно!!!</p>
                </div>
            </div>
            <form class="form">
                <p class="form__title">Добавить отзыв</p>
                <div class="form__inputs-block">
                    <label for="name" class="form__label-main">Имя</label>
                    <input type="text" id="name" class="form__input-main">
                    <label for="review" class="form__label-main">Отзыв</label>
                    <input type="text" id="review" class="form__input-main">
                    <v-btn class="blue lighten-3">Добавить</v-btn>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>
