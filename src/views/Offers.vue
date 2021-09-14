<template>
  <div class="offers">
    <TabBar />
    <div class="offers_serchWrapper">
      <Search />
    </div>
    <div class="offers__wrapper">
      <div class="cards__wrapper custom-scroll">
      <Cards />
    </div>
    </div>
    
  </div>
</template>

<script>
import TabBar from '@/components/Offers/TabBar.vue'
import Cards from '@/components/Main/Cards.vue'
import Search from '@/components/Main/Search.vue'
export default {
  components: {
    TabBar,
    Cards,
    Search,
  }
}
</script>

<style lang="scss">
.offers {
  height: 100%;
}
.offers__wrapper {
  margin-top: 30px;
  height: calc(100% - 96px);
  position: relative;
}
.cards__wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: auto;
  align-items: stretch;
  bottom: 0;
}
.offers_serchWrapper {
  display: none;
}

@media (max-width: 800px) {
.offers_serchWrapper {
  display: block;
  width: 100%;
  margin-top: 16px;
  .search {
    width: 100% !important;
  }
}
.offers {
  height: auto;
}
.offers__wrapper {
  margin-top: 20px;
  height: auto;
  position: relative;
}
.cards__wrapper {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  overflow: auto;
  align-items: stretch;
  bottom: 0;
}
  
}
</style>