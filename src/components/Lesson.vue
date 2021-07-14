<template>
  <section class="free">
    <div class="wrapper">
      <div class="wrapper__text">
        <h1>
          Вступи уверенно в мир <br> тендеров за 7 бесплатных <br> уроков!
        </h1>
        <p>
          Оставляйте заявку и получите бесплатные материалы, которые <br>
          помогут начать работу в сфере крупных заработков
        </p>
        <Button></Button>
      </div>
      <div class="wrapper__img">
        <img src="@/assets/free-img.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/UI/Button';

export default {
  name: "Lesson",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
  .free {
    display: flex;
    @media(max-width: 1200px) {
      justify-content: center;
    }

    .wrapper {
      display: flex;
      flex-direction: row;
      position: relative;
      margin: 56px auto;
      padding: 12px 0;
      transition: .5s ease all;
      @media(max-width: 1140px) {
        margin: 8px;
        flex-direction: column-reverse;
      }

      .wrapper__text {
        @media(max-width: 1140px) {
          width: 100%;
          font-family: Raleway;
          font-style: normal;
          font-weight: bold;
          font-size: 20px;
          line-height: 23px;
          margin-top: 24px;
          color: #000000;
        }

        h1 {
          font-family: Raleway;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 47px;
          color: #000000;
          @media(max-width: 1140px) {
            width: 100%;
            font-family: Raleway;
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
          font-family: Raleway;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #000000;
          margin-top: 40px;
          @media(max-width: 1140px) {
            width: 100%;
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
