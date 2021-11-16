<template>
  <section class="curator">
    <div class="curator__wrapper">
      <div class="container">
        <div class="curator__block">
          <div class="block__img nasty">
            <div class="icon__img"><img src="@/assets/curator.svg" alt=""></div>
          </div>
          <div class="block__description">
            <h1>Куратор</h1>
            <p>
              Анастасия Галкина – эксперт <br> в прохождении предварительного <br> квалификационного отбора. <br><br>
              За 3 года работы помогла пройти успешно <br> ПКО более 300 компаниям. <br><br>
              5.95% ее клиентов обращаются <br> по Рекомендации.
            </p>
          </div>
        </div>
        <div class="curator__block">
          <div class="block__img chingis">
            <div class="icon__img"><img src="@/assets/curator.svg" alt=""></div>
          </div>
          <div class="block__description">
            <h1>Лектор</h1>
            <p>
              Чингис Курмангалиев – с 2004 года <br>
              занимается тендерами. С 2016 – развивает <br>
              четыре направления бизнеса с общим <br>
              оборотом 1 200 000 долларов США.
              <br><br>
              33% его учеников становятся <br> миллионерами. 68% учеников помог <br> масштабировать бизнес.
            </p>
          </div>
        </div>
        <div class="curator__block">
          <div class="block__img aika">
            <div class="icon__img"><img src="@/assets/curator.svg" alt=""></div>
          </div>
          <div class="block__description">
            <h1>Куратор</h1>
            <p>
              Айгерім Күлдібаева – одна из лучших <br> учениц, прошедших курс "Пятый элемент". <br><br>
              В случае форс-мажорных ситуаций, <br> содействует в разрешении проблем. <br><br>
              Отличный мотиватор. Помогает <br> казахоязычным ученикам в обучении.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="curator__btn">
      <Button></Button>
    </div>
  </section>
</template>

<script>
  import Button from "./UI/Button";
  export default {
    name: 'Curator',
    components: {
      Button,
    }
  }
</script>

<style lang="scss" scoped>
  .curator {
    .curator__wrapper {
      display: flex;
      max-width: 1140px;
      margin: 0 auto;
      @media(max-width: 840px) {
        justify-content: center;
      }
      .container {
        display: flex;
        position: relative;
        margin: 56px auto;
        transition: .5s ease all;
        flex-direction: row;
        width: 100%;
        @media(max-width: 1140px) {
          padding: 12px 0;
          margin: 8px;
          flex-direction: column;
        }

        .curator__block {
          float: left;
          flex-direction: column;
          margin: 0 20px 20px 0px;
          width: 100%;
          @media(max-width: 1140px) {
            width: 100%;
            padding: 15px;
          }
          .block__img {
            border-radius: 10px;
            display: flex;
            background-color: #262626;
            width: 330px;
            height: 460px;
            margin: 0 auto;
            @media(max-width: 1140px) {
              width: 100%;
            }
            .icon__img {
              margin: 20px;
              width: 50%;
              img {
                width: 30%;
              }
            }
          }

          .nasty {
            background: url("../assets/nasty.png") no-repeat;
            background-position: 30% 101%;
            background-color: #20163a;
            @media(max-width: 1140px) {
              //background-size: 500px;
            }
          }
          .nasty:hover {
            background-color: #58be00;
          }

          .chingis {
            background: url("../assets/chingis.png") no-repeat;
            background-position: 55% 50%;
            background-color: #20163a;
            @media(max-width: 1140px) {
              //background-size: 500px;
            }
          }
          .chingis:hover {
            background-color: #58be00;
          }

          .aika {
            background: url("../assets/aigerim.png") center no-repeat;
            background-color: #20163a;
            @media(max-width: 1140px) {
              //background-size: 300px;
            }
          }
          .aika:hover {
            background-color: #58be00;
          }

          .block__description {
            padding-top: 19px;
            font-style: normal;
            font-weight: bold;
            line-height: 20px;
            color: #000000;
            @media(max-width: 1140px) {
              width: 100%;
              padding-left: 12px;
            }

            h1 {
              font-style: normal;
              font-weight: bold;
              font-size: 16px;
              @media(max-width: 1140px) {

              }
            }

            p {
              padding-top: 19px;
              font-style: normal;
              font-size: 16px;
            }


          }
        }
      }
    }
    .curator__btn {
      display: flex;
      justify-content: center;
      @media(max-width: 1140px) {
        display: inline-block;
        width: 100%;
        padding: 0 15px;
      }
    }
  }

</style>
