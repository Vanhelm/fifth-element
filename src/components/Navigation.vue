<template>
  <header :class="{'scrolled-nav': scrollPosition}">
    <nav>
      <div class="branding">
        <img class="desktop" src="@/assets/logo.svg" alt="">
        <img class="mobile" src="@/assets/mobile-logo.svg" alt="">
      </div>
      <ul v-show="!mobile"  class="navigation">
        <li><a href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
        <li><a href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
        <li><a href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
        <li><a @click="toggleActiveClass" href="#result" class="link" :to="{name: ''}">Результат</a></li>
        <li><a href="#more" class="link" :to="{name: ''}">О нас</a></li>
      </ul>
      <div class="icon">
        <i @click="toggleMobileNav" v-show="mobile" class="far fa-bars" :class="{'icon-active': mobileNav}"></i>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><a href="#course" class="link active" :to="{name: 'Home'}">Курс</a></li>
          <li><a href="#card" class="link" :to="{name: ''}">Теория и практика</a></li>
          <li><a href="#lesson" class="link" :to="{name: ''}">Новичкам</a></li>
          <li><a href="#result" class="link" :to="{name: ''}">Результат</a></li>
          <li><a href="#more" class="link" :to="{name: ''}">О нас</a></li>
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

    // toggleActiveClass() {
    //   const listItem = document.querySelectorAll('.link');
    //
    //   listItem.forEach(item => {
    //     item.classList.remove('.active')
    //     item.addEventListener('click', () => {
    //       this.item.classList.add('.active');
    //     })
    //   })
    // },
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
    @media(max-width: 1140px) {
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
      padding: 12px 0;
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
        }

      .link {
        font-size: 20px;
        transition: 0.5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;

        &:hover {
          color: #262626;
          border-color: #262626;
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
        justify-content: center;
      }

      .icon {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        right: 24px;
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
    }
  }

</style>
