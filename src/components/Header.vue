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
          <Button/>
        </div>
      </div>
      <div class="wrapper__img">
        <img src="@/assets/section-img.svg" alt="5 элемент">
        <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
      </div>
      <div class="whatsapp">
        <a href="https://wa.me/77064289636?text=Добрый%20день%20мне%20нужна%20консультация%20по%20обучению"><img src="@/assets/whatsapp.svg" alt=""></a>
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
  data() {
    return {
      typeValue: '',
      typeStatus: false,
      typeArray: ['УСПЕХ', 'ДЕНЬГИ', 'ТЕНДЕРЫ','ГОСЗАКУПКИ'],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0
    }
  },
  methods: {
    typeText() {
      if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      }
      else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if(this.charIndex > 0) {
        if(!this.typeStatus)
          this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      }
      else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if(this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  }
};
</script>

<style lang="scss" scoped>
.free {
  display: flex;
  padding: 12px 0;
  max-width: 1140px;
  margin: 0 auto;
  @media(max-width: 840px) {
    justify-content: center;
    margin: 22px;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 56px auto;
    padding: 12px 0;
    transition: .5s ease all;
    @media(max-width: 1140px) {
      padding: 12px 0;
      margin: 0 8px;
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
          margin: 8px;
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
        font-size: 27px;
        line-height: 35px;
        text-align: center;
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        margin-top: 60px;
        @media(max-width: 1140px) {
          font-family: Raleway;
          font-size: 15px;
          line-height: 15px;
          margin-top: 35px;
        }
      }
    }
    .whatsapp {
      position: fixed;
      right: 200px;
      bottom: 20px;
      z-index: 999;
      max-width: 80px;
      width: 100%;
      animation: beat .35s infinite alternate;
      transform-origin: center;
      @keyframes beat{
        to { transform: scale(1.2); }
      }
      @media(max-width: 1140px) {
        display: flex;
        max-width: 60px;
        width: 100%;
        right: 35px;
      }
    }
  }
}

</style>
