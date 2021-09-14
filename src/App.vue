<template>
  <div id="app" class="main">
    <div id="nav" class="nav">
      <Header />
    </div>
    <div class="page_container">
      <div class="page_container_top">
        <h1>
          {{pagesTitles[$router.currentRoute.name]}}
        </h1>
        <div class="right">
          <Search />
          <Avatar />
        </div>
      </div>
      <div class="page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Main/Header.vue'
import Avatar from '@/components/Main/Avatar.vue'
import Search from '@/components/Main/Search.vue'
export default {
  data() {
    return {
      pagesTitles: {
        Offers: 'Предложения',
      }
    }
  },
  components: {
    Header,
    Search,
    Avatar
  },
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.custom-scroll::-webkit-scrollbar{
width: 4px;
height: 4px;
}
.custom-scroll::-webkit-scrollbar:hover {
  width: 8px !important;
}
.custom-scroll::-webkit-scrollbar-thumb{
background: #B3AFB3;
border: 3.8px none #DEDEDE;
border-radius: 25px;
}
.custom-scroll::-webkit-scrollbar-thumb:hover{
background: #B3AFB3;
}
.custom-scroll::-webkit-scrollbar-track{
background: #FAFAFA;
border-radius: 0px;
box-shadow: inset 2.9px 0px 0px 0px #F0F0F0;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

.main {
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding-top: 30px;
  padding: 20px;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: radial-gradient(47.39% 118.47% at 3.68% -21.35%, rgba(255, 219, 19, 0.1) 0%, rgba(255, 125, 75, 0.1) 30.4%, rgba(231, 130, 247, 0.1) 62.15%, rgba(216, 65, 137, 0.1) 100%);
}

.nav {
  display: flex;
  width: calc(18% - 20px);
  height: 100%;
  min-width: 204px;
  max-height: 100%;
  position: relative;
}

.page_container {
  width: calc(100% - 220px);
  height: 100%;
  background: #FAF5F2;
  border: 6px solid rgba(39, 41, 49, 0.07);
  border-radius: 20px;
  padding: 30px;
  h1 {
    font-size: 24px;
    line-height: 28px;
    font-feature-settings: 'pnum' on, 'lnum' on;
    margin-top: 5px;
    color: #2D3134;
  }
  &_top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: start;
    margin-bottom: 30px;
    .right {
      display: flex;
      .search {
        margin-right: 20px;
      }
    }
  }
  .page {
    height: calc(100% - 66px);
  }
}
@media (max-width: 800px) {
  .main {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    padding-top: 30px;
    padding: 20px 0;
    height: auto;
    width: 100%;
    overflow: auto;
    background: radial-gradient(47.39% 118.47% at 3.68% -21.35%, rgba(255, 219, 19, 0.1) 0%, rgba(255, 125, 75, 0.1) 30.4%, rgba(231, 130, 247, 0.1) 62.15%, rgba(216, 65, 137, 0.1) 100%);
  }

  .nav {
    display: flex;
    width: 100%;
    height: auto;
    min-width: 204px;
    max-height: none;
    position: relative;
  }

  .page_container {
    width: calc(100%);
    height: 100%;
    background: #FAF5F2;
    border: 6px solid rgba(39, 41, 49, 0.07);
    border-radius: 20px;
    padding: 15px;
    margin-top: 80px;
    border-right: 0px;
    border-left: 0px;
    h1 {
      font-size: 24px;
      line-height: 28px;
      font-feature-settings: 'pnum' on, 'lnum' on;
      margin-top: 5px;
      color: #2D3134;
    }
    &_top {
      display: flex;
      justify-content: center;
      width: 100%;
      align-items: start;
      margin-bottom: 30px;
      .right {
        display: none;
        .search {
          margin-right: 20px;
        }
      }
    }
    .page {
      height: calc(100% - 66px);
    }
  }
}
</style>
