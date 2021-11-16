<template>
  <section class="results">
    <div class="results__wrapper">
      <h1>Реальные результаты обучения</h1>
      <div class="results__body">
        <div class="results__block">
          <div class="block">
            <div><p>«Стала зарабатывать, и все <br>
              в меня поверили»</p></div>
            <div class="results__img">
              <a href="https://www.youtube.com/watch?v=6npnSzK90Eg&ab_channel=%D0%A2%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%D0%91%D0%B8%D1%80%D0%B6%D0%B0" target="_blank">
                <img src="@/assets/female.png" alt="">
              </a>
            </div>
          </div>
        </div>
        <div class="results__block">
          <div class="block">
            <div><p>
              «Ең бірінші пайдамды бала өмірдің қызығы <br>
              болғандықтан, қызыма ойыншық алдым!»
            </p></div>
            <div class="results__img">
              <a href="https://www.youtube.com/watch?v=9IEK5RuZymI&ab_channel=%D0%A2%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%D0%91%D0%B8%D1%80%D0%B6%D0%B0" target="_blank">
                <img src="@/assets/male.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-center">
          <Button/>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "./UI/Button";
  export default {
    name: "Result",
    components: {
      Button,
    }
  }
</script>

<style lang="scss" scoped>
  .results {
    display: flex;
    max-width: 1140px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 545px) {
      justify-content: center;
    }

    .results__wrapper {
      display: flex;
      position: relative;
      transition: .5s ease all;
      flex-direction: column;
      width: 100%;
      @media(max-width: 545px) {
        margin: 0;
        padding: 22px;
        flex-direction: column;
      }

      h1 {
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        color: #000000;
        margin-bottom: 64px;
        @media(max-width: 1140px) {
          font-size: 20px;
          line-height: 22px;
          margin-bottom: 20px;
        }
      }

      .results__body {
        display: flex;
        @media(max-width: 840px) {
          flex-direction: column;
        }

        .results__block {
          display: flex;
          flex-direction: column;
          margin: 0 20px 20px 0px;
          @media(max-width: 1140px) {
            width: 100%;
          }

          .block {
            display: flex;
            flex-direction: column;
            p {
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 21px;
              color: #000000;
              margin-bottom: 20px;
              @media(max-width: 1140px) {
                font-size: 14px;
                line-height: 16px;
              }
            }

            .results__img {
              display: flex;
              max-width: 100%;
              @media(min-width: 545px) {
                width: 545px;
              }
              a {
                display: flex;
                img {
                  display: flex;
                  width: 100%;
                  margin: 0 auto;
                }
              }
            }
          }
        }
      }
      .btn-center {
        display: inline-block;
        margin: 0 auto;
        margin-top: 55px;
        @media(max-width: 545px) {
          margin-top: 0;
          width: 100%;
        }
      }
    }
  }
</style>
