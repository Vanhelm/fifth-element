<template>
  <section class="free">
    <div class="wrapper">
      <div class="wrapper__text">
        <h1>
          Оставь заявку и получи <br>
          3 бесплатных пробных <br>
          урока из курса <br>
          «Пятый элемент» <br>
        </h1>
        <p>
          Твой быстрый старт в сфере крупных заработков
        </p>
        <SecondButton/>
      </div>
      <div class="wrapper__img">
        <img src="@/assets/free-img.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import SecondButton from "./UI/SecondButton";

export default {
  name: "Lesson",
  components: {
    SecondButton,
  },
};
</script>

<style lang="scss" scoped>
  .free {
    display: flex;
    max-width: 1140px;
    margin: 0 auto;
    @media(max-width: 1200px) {
      justify-content: center;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
      position: relative;
      margin: 56px auto;
      transition: .5s ease all;
      @media(max-width: 1140px) {
        margin: 8px;
        padding: 15px;
        flex-direction: column-reverse;
      }

      .wrapper__text {
        @media(max-width: 1140px) {
          width: 100%;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          margin-top: 24px;
          color: #000000;
        }

        h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 47px;
          color: #000000;
          @media(max-width: 1140px) {
            width: 100%;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #000000;
          }
        }

        p {
          width: 585px;
          height: 59px;
          left: 6px;
          top: 183px;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #000000;
          margin-top: 40px;
          @media(max-width: 1140px) {
            width: 100%;
            margin-top: 10px;
          }
        }
      }

      .wrapper__img {
        display: flex;
        width: 100%;
        img {
          width: 100%;
          margin: 0 auto;
        }
      }
    }
  }

</style>
