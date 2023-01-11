<template>
    <footer class="footer">
        <div class="footer__container">
            <p class="footer__name">Чернюк Виктор 211-321</p>
            <div class="footer__right-block">
                <a href="https://github.com/kotiy01/frontend-3/tree/main/exam-3-semester" class="footer__link black--text">GitHub</a>
                <a href="https://my-json-server.typicode.com/kotiy01/json-files/db" class="footer__link black--text">JSON</a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
.footer {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #90CAF9;
}
.footer__container {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer__name {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
    margin-bottom: -16px;
}

.footer__link {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    text-decoration: none;
    color: black;
    margin-left: 32px;
}
</style>