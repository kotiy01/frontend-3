<template>
    <header class="header blue lighten-3">
        <div class="header__container">
            <router-link :to="{name: 'main'}" class="header__logo black--text">Таск-трекер</router-link>
            <div class="header__right-block">
                <a href="https://github.com/kotiy01/frontend-3/tree/main/exam-3-semester" class="header__link black--text">GitHub</a>
                <a href="https://my-json-server.typicode.com/kotiy01/json-files/db" class="header__link black--text">JSON</a>
                <div class="header__login-block">
                    <img src="https://cdn.onlinewebfonts.com/svg/download_321577.png" alt="" class="header__icon">
                    <a href="" class="header__link black--text">Виктор</a>
                    <a href="" class="header__login black--text">Выйти</a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');
.header {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.header__container {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header__logo {
    font-size: 28px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
}
.header__link {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
    margin-left: 32px;
}
.header__right-block {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.header__login-block {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: 32px;
}
.header__icon {
    width: 22px;
    height: 22px;
    margin-right: -24px;
}
.header__login {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    background-color: #FFFFFF;
    padding: 6px 16px 6px 16px;
    margin-left: 32px;
}
</style>