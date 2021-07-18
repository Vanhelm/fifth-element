<template>
  <section class="footer">
    <div class="footer__wrapper">
      <div class="footer__block">
        <div class="img__block">
          <img src="@/assets/footer.png" alt="">
        </div>
      </div>
      <div class="footer__block">
        <div class="footer__description">
          <h1>Получи 3 пробных урока <br>
            за заявку!</h1>
          <p>
            Оставляй заявку и получи бесплатные материалы, которые <br>
            помогут начать работу в сфере крупных заработков
          </p>
          <Button/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./UI/Button";
  export default {
    name: 'Footer',
    components: {
      Button,
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    background-color: #262626;
    margin-top: 46px;
    background-size: 90%;
    @media(max-width: 1140px) {
      flex-direction: column;
    }
    .footer__wrapper {
      display: flex;
      @media(max-width: 1140px) {
        flex-direction: column;
      }
      .footer__block {
        display: flex;
        .img__block {
          width: 100%;
          img {
            width: 100%;
          }
        }
        .footer__description {
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #FFFFFF;

          h1 {
            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 47px;
            @media(max-width: 1140px) {
              margin-top: 15px;
              font-weight: bold;
              font-size: 20px;
              line-height: 23px;
            }
          }

          p {
            font-family: Raleway;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            margin-top: 29px;
            margin-bottom: 49px;
          }
        }
      }
    }
  }

</style>
