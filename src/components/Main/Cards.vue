<template>
    <div class="cards">
        <Card 
            v-for="card in cards"
            :key="card.id"
            :info="card"
        />
    </div>
</template>

<script>
// components
import Card from '@/components/Main/Card.vue'
// state
import {gettersTypes as stateGetters} from '@/store/modules/cards'

import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            
        }
    }, 
    components: {
        Card
    },
    computed: {
        ...mapGetters({
            // Filters
            cards: stateGetters.getCards,
        }),
    }
}
</script>

<style lang="scss">
.cards {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 40px 40px; 
    width: 100%;
    padding-right: 4px;
}
@media (max-width: 1350px) {
    .cards {
        grid-template-columns: 1fr 1fr 1fr; 
        gap: 20px 20px; 
    }
}
@media (max-width: 1200px) {
    .cards {
        grid-template-columns: 1fr 1fr; 
        gap: 20px 20px; 
    }
}
@media (max-width: 900px) {
    .cards {
        grid-template-columns:  1fr 1fr; 
        gap: 10px 10px; 
    }
}
@media (max-width: 700px) {
    .cards {
        grid-template-columns:  1fr; 
        gap: 10px 10px; 
    }
}
</style>