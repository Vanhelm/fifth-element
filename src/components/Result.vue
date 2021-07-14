<template>
  <section class="results">
    <div class="results__wrapper">
      <h1>Реальные результаты обучения</h1>
      <div class="results__body">
        <div class="results__block">
          <div class="block">
            <div><p>«Стала зарабатывать и все <br>
              в меня поверили»</p></div>
            <div class="results__img">
              <a href="https://www.youtube.com/watch?v=6npnSzK90Eg&ab_channel=%D0%A2%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%D0%91%D0%B8%D1%80%D0%B6%D0%B0">
                <img src="@/assets/female.svg" alt="">
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
              <a href="https://www.youtube.com/watch?v=9IEK5RuZymI&ab_channel=%D0%A2%D0%B5%D0%BD%D0%B4%D0%B5%D1%80%D0%BD%D0%B0%D1%8F%D0%91%D0%B8%D1%80%D0%B6%D0%B0">
                <img src="@/assets/male.svg" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
      <Button></Button>
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

    .results__wrapper {
      display: flex;
      position: relative;
      margin: 56px auto;
      padding: 12px 0;
      transition: .5s ease all;
      flex-direction: column;
      @media(max-width: 1140px) {
        padding: 12px 0;
        margin: 8px;
        flex-direction: column;
      }

      h1 {
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 48px;
        color: #000000;
        margin-bottom: 64px;
      }

      .results__body {
        display: flex;

        .results__block {
          display: flex;
          flex-direction: column;
          @media(max-width: 1140px) {
            width: 100%;
          }

          .block {
            display: flex;
            flex-direction: row;
            p {
              font-family: Raleway;
              font-style: normal;
              font-weight: bold;
              font-size: 18px;
              line-height: 21px;
              color: #000000;
              margin-bottom: 20px;
            }

            .results__img {
              display: flex;
              width: 100%;
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
    }
  }
</style>
