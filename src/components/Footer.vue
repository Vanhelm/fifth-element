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
          <SecondButton/>
        </div>
      </div>
    </div>
    <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPMHBJ6" height="0" width="0" style="display:none;visibility:hidden">
      </iframe>
    </noscript>
  </section>
</template>

<script>
import SecondButton from "./UI/SecondButton";
  export default {
    name: 'Footer',
    components: {
      SecondButton,
    },
    mounted() {
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NPMHBJ6');
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    background-color: #20163a;
    margin-top: 46px;
    background-size: 90%;
    @media(max-width: 545px) {
      flex-direction: column;
    }
    .footer__wrapper {
      display: flex;
      width: 1140px;
      margin: 0 auto;
      @media(max-width: 545px) {
        width: 100%;
        flex-direction: column;
        margin: 0px;
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
            font-style: normal;
            font-weight: bold;
            font-size: 40px;
            line-height: 47px;
            @media(max-width: 545px) {
              margin-top: 15px;
              margin-left: 22px;
              font-weight: bold;
              font-size: 20px;
              line-height: 23px;
            }
          }

          p {
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 21px;
            margin-top: 29px;
            margin-bottom: 49px;
            @media(max-width: 1140px) {
              margin-left: 22px;
            }
          }
        }
      }
    }
  }

</style>
