<template>
  <div id="app">
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
    </transition>
    <transition name="slide" appear>
      <div class="modal" v-if="showModal">
        <form id="ltForm1316064"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1056294971" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
          <input type="text" maxlength="60"  placeholder="Введите ваш эл. адрес" name="formParams[email]" value="" ><br>
          <input type="text" maxlength="60"  placeholder="Введите ваше имя" name="formParams[full_name]" value=""><br>
          <input type="text" maxlength="60"  placeholder="Введите ваш телефон" name="formParams[phone]" value=""><br>
          <button type="submit" id="button1914629" style="color: black; background-color: wheat; border-radius: 10px; !important; " onclick="if(window['btnprs60a5108755951']){return false;}window['btnprs60a5108755951']=true;setTimeout(function(){window['btnprs60a5108755951']=false},6000);return true;">
            Записаться
          </button><br>
          <input type="hidden" id="40280460a5108748ecf" name="__gc__internal__form__helper" class="__gc__internal__form__helper" value="">
          <input type="hidden" id="40280460a5108748ecfref" name="__gc__internal__form__helper_ref" class="__gc__internal__form__helper_ref" value="">
          <input type="hidden" name="requestTime" value="1621430407">
          <input type="hidden" name="requestSimpleSign" value="b694e8e66091b669c1402b14d1ca5236">
          <input type="hidden" name="isHtmlWidget" value="1"/></form><span id="gccounterImgContainer"></span>
        <button class="button" @click="showModal = false">
          Close Modal
        </button>
      </div>
    </transition>
  </div>
</template>

<script>

export default  {
  name: 'Popup',
  data() {
    return {
      showModal: true
    }
  }
}

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}

.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  padding: 15px 25px;
  background-image: linear-gradient(to right, #CC2E5D, #FF5858);
  border-radius: 8px;

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
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;

  padding: 25px;

h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

p {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
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
