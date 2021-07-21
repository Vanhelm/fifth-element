<template>
  <div class="btn">
    <a class="simple-btn button" href="#" v-on:click.stop.prevent="showModal = true">Оставить заявку</a>
  </div>
  <transition name="fade" appear>
    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
  </transition>
  <transition name="slide" appear>
    <div class="modal" v-if="showModal">
      <span>
        <i class="material-icons" v-on:click.stop.prevent="showModal = false">close</i>
      </span>
      <h1>Войди уверенно в мир <br>
          крупного заработка!
      </h1>
      <p>
        Заполни поля и мы свяжемся с тобой, <br>
        ответим на интересующие вопросы, <br>
        оставим комерческое предложение.
      </p>
      <form id="ltForm1316064"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1056294971" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
        <input type="text" maxlength="60"  placeholder="Имя Фамилия" name="formParams[full_name]" value=""><br>
        <input type="text" maxlength="60"  placeholder="Телефон" name="formParams[phone]" value=""><br>
        <input type="text" maxlength="60"  placeholder="Электронный адрес" name="formParams[email]" value="" ><br>
        <button type="submit" id="button1914629" class="simple-btn" onclick="if(window['btnprs60a5108755951']){return false;}window['btnprs60a5108755951']=true;setTimeout(function(){window['btnprs60a5108755951']=false},6000);return true;">
          Оставить заявку
        </button><br>
        <input type="hidden" id="40280460a5108748ecf" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value="">
        <input type="hidden" id="40280460a5108748ecfref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value="">
        <input type="hidden" name="requestTime" value="1621430407">
        <input type="hidden" name="requestSimpleSign" value="b694e8e66091b669c1402b14d1ca5236">
        <input type="hidden" name="isHtmlWidget" value="1"/>
      </form>
      <span id="gccounterImgContainer"></span>
    </div>
  </transition>
</template>

<script>
 export default {
   name: 'button',
   data() {
     return {
        showModal: false
     }
   },
   methods: {

   }
 }
 // window.addEventListener('load', function(){
 //   let loc = document.getElementById("40280460a5108748ecf");
 //   loc.value = window.location.href;
 //   let ref = document.getElementById("40280460a5108748ecfref");
 //   ref.value = document.referrer;
 //
 //   let statUrl = "https://lab.tb7.kz/stat/counter?ref=" + encodeURIComponent(document.referrer)
 //       + "&loc=" + encodeURIComponent(document.location.href);
 //   document.getElementById('gccounterImgContainer').innerHTML
 //       = "<img width=1 height=1 style='display:none' id='gccounterImg' src='" + statUrl + "'/>";
 // });
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  .simple-btn {
    display: inline-block;
    padding: 1.625rem 2.625rem 1.625rem 2.625rem;
    border: 1px solid #A7F271;
    border-radius: 10px;
    background-color: #A7F271;
    color: #000000;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 0;
    text-decoration: none;
    transition: all 0.2s;
    height: 56px;
    text-align: center;
    @media(max-width: 1140px) {
      width: 100%;
    }
  }
  .simple-btn:hover {
    background-color: #1265F5;
    border-color: #FFED69;
    color: #ffffff;
  }
}



.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;

  color: #FFF;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;

  &:hover {
    box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
  }
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 550px;
  background-color: #FFF;
  border-radius: 16px;
  padding: 25px;
  @media(max-width: 1140px) {
    width: 325px;
    max-width: 100%;
    height: 450px;
  }

  .material-icons {
    display: inline-block;
    color: black;
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 7px;
  }

  h1 {
    font-family: Raleway;
    margin: 0 auto;
    color: #333333;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 47px;
    margin-bottom: 15px;
    @media(max-width: 1140px) {
      font-family: Raleway;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 23px;
      color: #333333;
    }
  }

  p {
    font-family: Raleway;
    color: #333333;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin: 15px 0;
    @media(max-width: 1140px) {
      font-family: Raleway;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
    }
  }

  form {

    input {
      margin-top: 22px;
      width: 100%;
      max-width: 450px;
      height: 2.6rem;
      background: #FFFFFF;
      border: 2px solid #CECECE;
      box-sizing: border-box;
      border-radius: 10px;
      text-align: center;
    }

    .simple-btn {
      display: inline-block;
      padding: 1.625rem 2.625rem 1.625rem 2.625rem;
      border: 1px solid #A7F271;
      border-radius: 10px;
      background-color: #A7F271;
      color: #000000;
      margin-top: 50px;
      font-weight: 600;
      font-size: 0.875rem;
      line-height: 0;
      text-decoration: none;
      transition: all 0.2s;
      height: 100%;
      text-align: center;
      width: 100%;
      @media(max-width: 1140px) {
        margin: 16px 0;
        width: 100%;
      }
    }
    .simple-btn:hover {
      background-color: #1265F5;
      border-color: #FFED69;
      color: #ffffff;
    }
  }
}



  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-enter-active,
  .slide-leave-active {
    transition: transform .5s;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
  }
</style>
