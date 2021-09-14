<template>
  <header class="header"
    :class="{active: mobileBurgerHandler}"
  >
    <div 
      class="burger" 
      v-if="burgerShow"
      :class="{active: mobileBurgerHandler}"
      @click="mobileBurgerHandler = !mobileBurgerHandler"
    >
      <div class="line"></div>
    </div>
    <div class="logo">
      <img src="@/assets/Header/MainLogo.svg" alt="mainLogo">
    </div>
    <Avatar v-if="burgerShow"/>
    <transition name="showLinks">
      <div class="header_links__wrapper custom-scroll" 
        v-if="mobileBurgerHandler"  
        :class="{
          mobile: burgerShow,
          active: mobileBurgerHandler,
        }"
      >
        <div class="header_links">
          <router-link
            v-for="link in routerLinks"
            :key="link.href"
            :to="link.href"
            class="header_links__item"
          >
            <div class="imgBlock">
              <img class="noActive" :src="link.src" :alt="link.text">
              <img class="active" :src="link.srcActive" :alt="link.text">
            </div>
            <div class="header_links__item-txt">
              {{link.text}}
            </div>
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import Avatar from '@/components/Main/Avatar.vue'

export default {
  name: 'Header',
  data() {
    return {
      burgerShow: false,
      mobileBurgerHandler: false,
      routerLinks: [
        {
          text: 'Dashboard',
          href: '/',
          src: require('@/assets/Header/LinksImages/dashboard.png'),
          srcActive: require('@/assets/Header/LinksImages/dashboard_active.png')
        },
        {
          text: 'Предложения',
          href: '/offers',
          src: require('@/assets/Header/LinksImages/offers.png'),
          srcActive: require('@/assets/Header/LinksImages/offers_active.png')
        },
        {
          text: 'Добавить новое',
          href: '/addNew',
          src: require('@/assets/Header/LinksImages/addNew.png'),
          srcActive: require('@/assets/Header/LinksImages/addNew_active.png')
        },
        {
          text: 'Статистика',
          href: '/statistics',
          src: require('@/assets/Header/LinksImages/statistics.png'),
          srcActive: require('@/assets/Header/LinksImages/statistics_active.png')
        },
        {
          text: 'Профиль',
          href: '/profile',
          src: require('@/assets/Header/LinksImages/profile.png'),
          srcActive: require('@/assets/Header/LinksImages/profile_active.png')
        },
        {
          text: 'Поддержка',
          href: '/support',
          src: require('@/assets/Header/LinksImages/support.png'),
          srcActive: require('@/assets/Header/LinksImages/support_active.png')
        },
        {
          text: 'Billing',
          href: '/billing',
          src: require('@/assets/Header/LinksImages/billing.png'),
          srcActive: require('@/assets/Header/LinksImages/billing_active.png')
        },
      ]
    }
  },
  components: {
    Avatar,
  },
  methods: {
    getBodyScrollTop() {
      return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
    },
    handleDebouncedScroll() {
      let sT = this.getBodyScrollTop()
      if (sT == 0) {
        this.$el.style.background = `transparent`
      } else {
        this.$el.style.background = `#fff`
      }
    }
  },
  mounted() {
    let width = document.documentElement.clientWidth
    if (width <= 800) {
      this.burgerShow = true
    } else {
      this.mobileBurgerHandler = true
    }

    document.addEventListener('scroll', this.handleDebouncedScroll);
  }
}
</script>

<style scoped lang="scss">
  .showLinks-enter-active, .fade-leave-active {
    transition: opacity 0.2s ease-in-out;

  }
  .showLinks-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
  .header {
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    position: absolute; 
    left:0;
    right:0;
    top:0;
    z-index: 3000;
    bottom:0;
    transition: .2s ease-in-out;
    .logo {
      margin-bottom: 50px;
      padding-left: 20px;
    }
  }
  .header_links {
    display: flex;
    align-items: start;
    flex-direction: column;
    
    &__wrapper {
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100% - 100px);
      max-height: calc(100% - 100px);
      // height: 300px;

    }
    &__item {
      display: flex;
      align-items: center;
      justify-content: start;
      width: 200px;
      border-radius: 16px;
      padding: 7px 0 7px 16px;
      margin-top: 20px;
      &:first-child {
        margin-top: 0;
      }

      &-txt {
        margin-left: 10px;
        font-weight: 600;
        font-size: 13px;
        color: #2D3134;
        transition: all 0.2 ease-in-out;
      }
      
      .imgBlock {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

    }
    
    a {
      transition: .2s ease-in-out;
      text-decoration: none;
      
      .noActive {
        display: block;
        transition: .2s ease-in-out;
      }
      
      .active {
        overflow: hidden;
        width: 0;
        visibility: hidden;
        opacity: 0;
        transition: .2s ease-in-out;
      }
      
      &.router-link-exact-active {
        background-color: #FE8862;
        
        .header_links__item-txt {
          color: #FFFFFF;
        }
        
        .noActive {
          overflow: hidden;
          width: 0;
          visibility: hidden;
          opacity: 0;
          transition: .2s ease-in-out;
        }
        
        .active {
          display: block;
          width: auto;
          visibility: visible;
          opacity: 1;
          transition: .2s ease-in-out;
        }
        
      }
      
      &:hover {
        background-color: rgba(#FE8862, .9);
        
        .header_links__item-txt {
          color: #FFFFFF;
        }
        
        .noActive {
          overflow: hidden;
          width: 0;
          visibility: hidden;
          opacity: 0;
          transition: .2s ease-in-out;
        }
        
        .active {
          display: block;
          width: auto;
          visibility: visible;
          opacity: 1;
          transition: .2s ease-in-out;
        }
      }
    }
  }
  .burger {
    display: none;
  }
  @media (max-width:800px) {
    .burger {
      width: 20px;
      height: 16px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: start;
      .line {
        width: 11px;
        height: 3px;
        background-color: #2D3134;
        border-radius: 50px;
        transition: .2s ease-in-out;
      }
      &:after {
        content: '';
        height: 3px;
        width: 20px;
        top: 0;
        background-color: #2D3134;
        border-radius: 50px;
        position: absolute;
        transition: .2s ease-in-out;
      }
      &:before {
        content: '';
        height: 3px;
        width: 14px;
        background-color: #2D3134;
        border-radius: 50px;
        position: absolute;
        bottom: 0;
        transition: .2s ease-in-out;
      }
      &.active {
        .line {
          width: 11px;
          height: 3px;
          transform: translateX(-100%);
          visibility: hidden;
          opacity: 0;
          background-color: #2D3134;
          border-radius: 50px;
          transition: .2s ease-in-out;
        }
        &:after {
          content: '';
          height: 3px;
          width: 20px;
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
          background-color: #2D3134;
          border-radius: 50px;
          position: absolute;
          transition: .2s ease-in-out;
        }
        &:before {
          content: '';
          height: 3px;
          width: 20px;
          background-color: #2D3134;
          border-radius: 50px;
          position: absolute;
          bottom: 50%;
          transform: translateY(50%) rotate(-45deg);
          transition: .2s ease-in-out;
        }
      }
    }
    .header {
      display: flex;
      padding-top: 20px;
      flex-direction: row;
      padding-bottom: 10px;
      height: 63px;
      max-height: auto;
      overflow: hidden;
      position: fixed; 
      align-items: center;
      justify-content: space-between;
      left:0;
      right:0;
      top:0;
      background-color: transparent;
      bottom:auto;
      padding-left: 20px;
      padding-right: 20px;
      &.active {
        background-color: #fff !important;
      }
      .logo {
        margin-bottom: 0px;
        padding-left: 0px;
        img {
          height: 42px;
          width: auto;
        }
      }
    }
    .header_links {
      display: flex;
      align-items: start;
      padding-left: 20px;
      flex-direction: column;
      background-color: #fff;  
      height: 100%;    
      z-index: 2990;

      &__wrapper {
        overflow-y: auto;
        overflow-x: hidden;
        height: calc(100vh - 63px);
        max-height: calc(100%);
        position: relative;
        // height: 300px;
        position: fixed;
        z-index: 2990;
        top: 63px;
        left: 0;
        right: 0;
        bottom: 0;
      }
      &__item {

        &:first-child {
          margin-top: 40px;
        }
      }
    }
  }
  @media (max-width:330px) {
    .header_links {
      &__item {

        &:first-child {
          margin-top: 10px;
        }
      }
    }
  }
</style>
