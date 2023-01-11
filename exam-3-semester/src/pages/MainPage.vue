<template>
    <section class="main-sec">
        <div class="main-sec__container">
            <h1 class="main-sec__title">Таск-трекер</h1>
            <p class="main-sec__desc">Простой и функциональный таск-менеджер, который работает на всех десктопных и мобильных платформах. Сервис помогает отслеживать продуктивность и позволяет наиболее оптимально организовать как рабочий процесс, так и повседневдные дела.</p>
            <router-link :to="{name: 'tasks'}" class="main-sec__link black--text">Попробовать бесплатно</router-link>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');

.main-sec {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('https://phonoteka.org/uploads/posts/2022-02/1645355218_1-phonoteka-org-p-fon-dlya-prezentatsii-nedvizhimost-1.jpg');
    background-position: center;
    background-size: contain;
    background-position: right;
}

.main-sec__container {
    width: 800px;
    height: auto;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

.main-sec__title {
    font-size: 42px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: black;
    margin-bottom: 12px;
}

.main-sec__desc {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    color: black;
    margin-bottom: 20px;
}

.main-sec__link {
    font-size: 20px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: black;
    text-decoration: none;
    border: 1px solid #90CAF9;
    background-color: #90CAF9;
    border-radius: 4px;
    padding: 8px 18px 8px 18px;
}
</style>