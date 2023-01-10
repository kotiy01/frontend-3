<template>
    <header class="header">
        <div class="header__container">
            <a href="" class="header__logo black--text">Таск-трекер</a>
            <a href="" class="header__login black--text">Войти</a>
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
    background-color: #66BFFF;
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
}
</style>