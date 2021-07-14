<template>
  <section class="free">
    <div class="wrapper">
      <div class="wrapper__text">
        <div class="header__text">
          <h1>
            Курс «Пятый элемент» <br>
            обуздай тендерную стихию.
          </h1>
          <p>
            Научись получать высокий стабильный заработок на тендерах. <br> <br>
            76% учеников отбивают стоимость во время обучения. <br> <br>
            Кураторы – тендерщики со стажем более десяти лет.
          </p>
        </div>
        <div class="wrapper__btn">
          <Button></Button>
        </div>
      </div>
      <div class="wrapper__img">
        <img src="@/assets/section-img.svg" alt="5 элемент">
        <span>Тендер</span>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/UI/Button';

export default {
  name: "Header",
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.free {
  display: flex;

  .wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 56px auto;
    padding: 12px 0;
    transition: .5s ease all;
    @media(max-width: 1140px) {
      padding: 12px 0;
      margin: 8px;
      flex-direction: column-reverse;
    }

    .wrapper__text {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      color: #FFFFFF;
      height: 100%;
      @media(max-width: 1140px) {
        width: 100%;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        margin-top: 24px;
        color: #fff;
      }
      .header__text {
        h1 {
          font-family: Raleway;
          font-style: normal;
          font-weight: bold;
          font-size: 40px;
          line-height: 47px;
          color: #fff;
          @media(max-width: 1140px) {
            width: 100%;
            font-family: Raleway;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 23px;
            color: #fff;
          }
        }

        p {
          width: 585px;
          font-family: Raleway;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #fff;
          margin-top: 40px;
          @media(max-width: 1140px) {
            width: 100%;
            margin-bottom: 40px;
          }
        }
      }
      .wrapper__btn {
        display: flex;
        flex-direction: column;
        position: relative;
        @media(max-width: 1140px) {
          width: 100%;
        }
      }
    }

    .wrapper__img {
      display: flex;
      position: relative;
      width: 100%;
      align-content: center;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        display: flex;
        width: 100%;
        margin: 0 auto;
      }
      span {
        display: flex;
        position: absolute;
        font-family: Raleway;
        font-style: normal;
        font-weight: bold;
        font-size: 30px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: #FF5E48;
        margin-top: 60px;
        @media(max-width: 1140px) {
          font-family: Raleway;
          font-size: 13px;
          line-height: 15px;
          color: #FF5E48;
        }
      }
    }
  }
}

</style>
