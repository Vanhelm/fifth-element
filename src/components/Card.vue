<template>
  <div id="intro" class="basic-1">
    <div class="container">
      <div class="row">
        <div class="card yellow">
          <div class="card-header ">
            <h4>15% теории -<br>
              только важная информация</h4>
            <div class="card-img">
              <img src="@/assets/earth.svg" alt="">
            </div>
          </div>
          <div class="card-body ">
            <p>
              Ты узнаешь: <br> <br>
              1) как проверить заказчика на законную деятельность; <br> <br>
              2) как отличить выгодный тендер от невыгодного; <br> <br>
              3) как найти надёжного поставщика; <br> <br>
              4) как выйти на производителя; <br> <br>
              5) тонкости и подводные камни госзакупок. <br> <br>
            </p>
          </div>
        </div>
        <div class="card red">
          <div class="card-header">
            <h4>85% практики <br>
              быстрый результат</h4>
            <div class="card-img">
              <img src="@/assets/fire.svg" alt="">
            </div>
          </div>
          <div class="card-body">
            <p>
              Ты сможешь: <br> <br>
              1) находить поставщиков за 5 минут; <br> <br>
              2) масштабировать действующий бизнес; <br> <br>
              3) автоматизировать процесс победы в тендерах; <br> <br>
              4) заключать безопасные сделки; <br> <br>
              5) вовремя получать оплату от заказчика.
            </p>
          </div>
        </div>
        <div class="card green">
          <div class="card-header">
            <h4>Попутный ветер<br>
              для твоих крыльев</h4>
            <div class="card-img">
              <img src="@/assets/air.svg" alt="">
            </div>
          </div>
          <div class="card-body">
            <p>
              Получи инвестицию на свой первый проект <br><br>

              Базовый пакет шаблонов документов для реализации заказа <br><br>

              Выявление спроса со стороны крупных  заказчиков <br><br>

              Полгода доступа к материалам курса <br><br>

              Обучение на настоящей заявке <br><br>
            </p>
          </div>
        </div>
        <div class="card blue">
          <div class="card-header">
            <h4>Вливайся<br>
              в наше сообщество</h4>
            <div class="card-img">
              <img src="@/assets/water.svg" alt="">
            </div>
          </div>
          <div class="card-body">
            <p>
              Эксперты курса поделятся приёмами и фишками, <br>
              о которых вам больше никто не расскажет <br> <br>

              Получай помощь от координаторов и наставников <br> <br>

              Создавай полезные знакомства, общаясь <br> с однокурсниками <br> <br>

              Помощь для учеников, говорящих на казахском
            </p>
          </div>
        </div>
        <div class="second_btn"><Button></Button></div>
      </div> <!-- end of row -->
    </div> <!-- end of container -->
  </div> <!-- end of basic-1 -->
</template>

<script>
import Button from "./UI/Button";
export default {
  name: 'card',
  components: {
    Button,
  }
}
</script>

<style lang="scss" scoped>
.basic-1 {
  background-color: #20163a;
  padding: 2rem 0;
  @media(max-width: 1140px) {
  }

  .container {
    width: 100%;
    margin: 0 auto;

    .row {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-flow: wrap;


      .card {
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        border: 1px solid #272247;
        margin-bottom: 25px;
        transition: 0.3s;
        background: #272247;
        border-radius: 10px;
        width: 500px;
        @media(max-width: 1140px) {
          .card {
            max-width: 100%;
          }
        }

        .card-header {
          display: flex;
          padding: 27px 27px 0 27px;
          color: #fff;
          justify-content: space-between;
          @media(max-width: 1140px) {
            .card-header {
              width: 100%;
            }
          }

          h4 {
            display: flex;
            justify-content: space-between;
            font-style: normal;
            font-weight: bold;
            font-size: 24px;
            line-height: 28px;
            @media(max-width: 1140px) {
              font-size: 18px;
              line-height: 21px;
            }
          }

          p {
            font-style: normal;
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
          }

          .card-img {
            display: flex;
            position: relative;
          }
        }


        .card-body {
          color: #FFFFFF;
          margin-top: 10px;
          padding: 0px 20px;
          font-size: 18px;
          height: 100%;
          @media(max-width: 1140px) {
            .card-body {
              width: 100%;
            }
          }

          p {
            text-align: left;
              @media(max-width: 1140px) {
                margin: 13px 0;
            }
          }


        }

      }
      .card:hover {
        transform: scale(1.05);
        box-shadow: 0 0 40px -10px rgba(0, 0, 0, 0.25);
        }
      }

      .yellow:hover {
        background-color: #FFED69;
        color: #262626;
        .card-header {
          color: #262626;
        }
        .card-body {
          color: #262626;
        }
      }

      .red:hover {
        background-color: #FF5E48;
        color: #262626;
        .card-header {
          color: #262626;
        }
        .card-body {
          color: #262626;
        }
      }

      .green:hover {
        background-color: #A7F271;
        color: #262626;
        .card-header {
          color: #262626;
        }
        .card-body {
          color: #262626;
        }
      }

      .blue:hover {
        background-color: #1265F5;
        color: #262626;
        .card-header {
          color: #262626;
        }
        .card-body {
          color: #262626;
        }
      }

      .second_btn {
        @media(max-width: 1140px) {
          width: 100%;
        }
      }
    }
  }
</style>
