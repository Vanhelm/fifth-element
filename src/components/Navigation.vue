<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div class="branding">
        <img class="desktop" src="@/assets/logo.svg" alt="">
        <img class="mobile" src="@/assets/mobile-logo.svg" alt="">
      </div>
      <ul v-show="!mobile"  class="navigation">
        <li><a v-smooth-scroll href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
        <li><a v-smooth-scroll href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
        <li><a v-smooth-scroll href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
        <li><a v-smooth-scroll @click="toggleActiveClass" href="#result" class="link" :to="{name: ''}">Результат</a></li>
        <li><a v-smooth-scroll href="#more" class="link" :to="{name: ''}">О нас</a></li>
        <li><a class="link call" href="tel:3883"><img src="@/assets/call.png" alt="Call">3883<div class="call__text"><br> Бесплатный <br> звонок</div></a></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a v-smooth-scroll href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
          <li><a v-smooth-scroll href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
          <li><a v-smooth-scroll href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
          <li><a v-smooth-scroll href="#result" class="link" :to="{name: ''}">Результат</a></li>
          <li><a v-smooth-scroll href="#more" class="link" :to="{name: ''}">О нас</a></li>
          <li><a class="link call" v-bind:href="'tel:' + 3883"><img src="@/assets/call.png" alt="Call">3883 <br> Бесплатный звонок</a></li>
        </ul>
      </transition>
      <a class="link call__mobile" href="tel:3883"><img src="@/assets/call-mobile.svg" alt="Call">3883<div class="call__text">Бесплатный звонок</div></a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return
      }
      this.mobile = false;
      this.mobileNav = false;
      return
    },

    scrollToMyEl () {
      const myEl = this.$refs.myEl || this.$el || document.getElementById('#footer')

      this.$smoothScroll({
        scrollTo: myEl, // scrollTo is also allowed to be number
        hash: '#sampleHash' // required if updateHistory is true
      })
    }
  },
};
</script>

<style lang="scss" scoped>

  header {
    background-color: #E5E5E5;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
    color: #000000;
    @media (max-width: 551px) {
      width: 100%;
    }
    @media (max-width: 991px) {
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 1200px) {
      position: fixed;
      width: 100%;
    }

    .mobile{
      display: none;
    }
    @media(max-width: 1140px) {
      background-color: #262626;
      color: #E5E5E5;
      .mobile{
        display: block;
      }
      .desktop {
        display: none;
      }
    }


    nav {
      position: relative;
      display: flex;
      flex-direction: row;
      //padding: 12px 0;
      transition: .5s ease all;
      width: 90%;
      margin: 0 auto;
      @media(min-width: 1140px) {
        max-width: 1140px;
      }

      ul,
      .link {
        font-weight: 700;
        color: #000000;
        list-style: none;
        text-decoration: none;
        @media(max-width: 1140px) {
          color: #FFFFFF;
        }
        }

      li {
        padding: 16px;
        margin-left: 16px;
        @media(max-width: 1140px) {
          padding: 0;
        }
        .link {
          font-size: 20px;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
          @media(max-width: 768px) {
            font-size: 15px;
          }
          @media(min-width: 1140px) {
            font-size: 20px;
          }
          &:hover {
            color: #262626;
            border-color: #262626;
          }
        }
        .call {
          font-size: 20px;
          color: #FF5E48;
          img {
            display: inline-block;
            padding-top: 30px;
            position: relative;
            top: 3px;
            right: 3px;
          }
          .call__text {
            margin-left: 17px;
            font-size: 10px;
          }
        }
      }


        .branding {
          display: flex;
          align-items: center;

          img {
            transition: 0.5s ease all;
          }
        }

      .navigation {
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
      }

      .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;

        i {
          cursor: pointer;
          font-size: 24px;
          transition: .8s ease all;
        }
      }

      .icon_active {
        transform: rotate(188deg);
      }

      .dropdown-nav {
        display: flex;
        flex-direction: column;
        position: fixed;
        width: 100%;
        max-width: 250px;
        height: 100%;
        background-color: #262626;
        top: 0;
        left: 0;

        li {
          margin-left: 0;
          .link {
            color: #E5E5E5;
          }
        }
      }
      .call__mobile {
        display: none;
        @media(max-width: 320px) {
          display: inline-block;
          margin: 0 auto;
          margin-top: 7px;
          font-size: 0px;
        }
        @media(min-width: 325px) and (max-width: 765px) {
          margin: 0 auto;
          margin-top: 7px;
          display: inline-block;
          font-size: 12px;
        }
        img {
          position: relative;
          top: 2px;
          right: 2px;
          display: inline-block;
        }
        .call__text {
          display: inline-block;
          position: relative;
          left: 2px;
          font-size: 9px;
        }
      }
    }
  }

</style>
