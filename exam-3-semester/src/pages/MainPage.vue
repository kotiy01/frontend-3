<template>
    <main class="main">
        <MainSection/>
        <ReviewsSection/>
    </main>
</template>

<script>
import MainSection from '@/components/MainSection'
import ReviewsSection from '@/components/ReviewsSection'
export default {
    components: {
        MainSection, ReviewsSection
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;1,600&display=swap');

.main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

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

.reviews-sec {
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.reviews-sec__container {
    width: 800px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.reviews-sec__title {
    font-size: 30px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: black;
    margin-bottom: 24px;
    margin-top: 60px;
}
.reviews-sec__content-block {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
}
.item {
    width: 260px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #90CAF9;
    background-color: #90CAF9;
    border-radius: 4px;
    margin-bottom: 60px;
}
.item__name {
    font-size: 24px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: black;
    margin-top: 10px;
}
.item__desc {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    color: black;
    text-align: center;
    margin-top: -10px;
    padding: 0 10px 0 10px;
}
.form {
    width: 800px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-bottom: 60px;
}
.form__title {
    font-size: 30px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
    color: black;
    margin-bottom: 24px;
}
.form__label-main {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Raleway', sans-serif;
    color: black;
}
.form__input-main {
    border: 2px solid #90CAF9;
    border-radius: 4px;
    padding: 6px;
    margin-right: 40px;
    margin-left: 10px;
    width: 240px;
}

@media print {
    @page {
        margin: 2cm;
    }

    * {
        background: transparent !important;
        color: #000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }

    h1 {
        font-size: 28pt;
    }
    h2 {
        font-size: 20pt;
    }
    p {
        font-size: 14pt;
    }
    .header, .footer, .main-sec__link, .form {
        display: none;
        visibility: hidden;
    }
    .main-sec, .reviews-sec {
        height: 50%;
    }
    .item {
        width: 30%;
        border: 1px solid black;
        height: 5cm;
    }
}
</style>