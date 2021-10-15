<template>
  <div class="more">
    <div class="more__container">
      <div class="more__block">
        <h1>Хочешь узнать <br>
          больше о Тендерной Бирже?</h1>
        <div class="social">
          <div class="block__instagram"><Instagram/></div>
          <div class="block__youtube"><Youtube/></div>
        </div>
      </div>
      <div class="more__block">
        <div class="block__img">
          <img src="@/assets/more_phone.png" alt="">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Youtube from "./UI/Youtube";
import Instagram from "./UI/Instagram";
  export default {
    name: 'More',
    components: {
      Youtube,
      Instagram,
    }
  }
</script>

<style lang="scss" scoped>
  .more {
    display: flex;
    margin-top: 77px;
    .more__container {
      display: flex;
      flex-direction: row;
      width: 1140px;
      margin: 0 auto;
      align-items: center;
      @media(max-width: 1140px) {
        margin: 0 auto;
        flex-direction: column-reverse;
        max-width: 100%;
      }
      .more__block {
        width: 100%;
        @media(max-width: 1140px) {
          max-width: 100%;
        }
        h1 {
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 55px;
          @media(max-width: 1140px) {
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            margin-left: 22px;
          }
        }
        .social {
          margin-top: 35px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 100%;
          @media(max-width: 1140px) {
            width: 100%;
            justify-content: center;
          }
          .block__instagram {
            display: flex;
            //width: 289px;
            width: 100%;
            @media(max-width: 1140px) {
              max-width: 100%;
            }
          }
          .block__youtube {
            display: flex;
            width: 100%;
            @media(max-width: 1140px) {
              max-width: 100%;
            }
          }
        }

        .block__img {
          display: flex;
          width: 100%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
</style>
