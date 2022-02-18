<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div class="brand">
        <img class="desktop" src="@/assets/logos.svg" alt="">
        <img class="mobile" src="@/assets/logos.svg" alt="">
      </div>
      <ul v-show="!mobile"  class="navigation">
        <li><a v-smooth-scroll href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
        <li><a v-smooth-scroll href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
        <li><a v-smooth-scroll href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
        <li><a v-smooth-scroll @click="toggleActiveClass" href="#result" class="link" :to="{name: ''}">Результат</a></li>
        <li><a v-smooth-scroll href="#more" class="link" :to="{name: ''}">О нас</a></li>
        <li><a class="link call" href="tel:3883"><img src="@/assets/call.svg" alt="Call"><span class="call__number">3883</span><span class="call__text"><br> Бесплатный <br> звонок</span></a></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a v-smooth-scroll @click="toggleMobileNav" href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
          <li><a v-smooth-scroll @click="toggleMobileNav" href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
          <li><a v-smooth-scroll @click="toggleMobileNav" href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
          <li><a v-smooth-scroll @click="toggleMobileNav" href="#result" class="link" :to="{name: ''}">Результат</a></li>
          <li><a v-smooth-scroll @click="toggleMobileNav" href="#more" class="link" :to="{name: ''}">О нас</a></li>
          <li><a @click="toggleMobileNav" class="link" v-bind:href="'tel:' + 3883"><img src="@/assets/call.svg" alt="Call"><span class="text">Бесплатный звонок</span></a></li>
        </ul>
      </transition>
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
      if (this.mobileNav == true) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'scroll'
      }
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
    background-color: #20163a;
    z-index: 99;
    width: 100%;
    position: fixed;
    transition: 0.5s ease all;
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
    @media(max-width: 545px) {
      background-color: #20163a;
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
        color: #ffffff;
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
          font-size: 18px;
          transition: 0.5s ease all;
          padding-bottom: 4px;
          border-bottom: 1px solid transparent;
          @media(max-width: 768px) {
            font-size: 15px;
          }
          &:hover {
            color: #58be00;
            border-color: #58be00;
          }
        }
        .call {
          display: flex;
          flex-direction: row;
          position: relative;
          font-size: 18px;
          color: #58be00;
          img {
            padding-top: 30px;
            position: absolute;
            width: 20%;
            top: -18px;
            left: -25px;
          }
          .call__number {
            position: absolute;
            top: 11px;
          }
          .call__text {
            margin-left: 45px;
            font-size: 10px;
          }
        }
      }


        .brand{
          display: flex;
          align-items: center;

          img {
            width: 50%;
            transition: 0.5s ease all;
          }
        }

      .navigation {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
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
        height: 100%;
        background-color: #20163a;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;

        li {
          margin: 20px 0;
          .link {
            font-size: 25px;
            color: #E5E5E5;
            img {
              width: 7%;
            }
            .text {
              margin-left: 5px;
            }
          }
        }
      }
      .call__mobile {
        display: none;
        @media(max-width: 545px) {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          margin-top: 7px;
          font-size: 0px;
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
