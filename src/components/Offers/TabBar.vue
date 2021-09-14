<template>
    <div class="tab_bar no-scroll">
        <div 
            class="tab_bar__item" 
            v-for="item in barBlocks"
            :key="item.id"
            @click="changeActiveHandler(item)"
            :class="{active: item.active}"
        >
            <img :src="item.imgSrc" :alt="item.text">
            <span>
                {{item.text}}
            </span>
        </div>
    </div>
</template>

<script>
import {actionsTypes as cardsAction} from '@/store/modules/cards'

export default {
    data() {
        return {
            barBlocks: [
                {
                    id: 1,
                    active: true,
                    status: 'active',
                    text: 'Активные',
                    imgSrc: require('@/assets/active.svg')
                },
                {
                    id: 2,
                    active: false,
                    status: 'moder',
                    text: 'На модерации',
                    imgSrc: require('@/assets/moder.svg')
                },
                {
                    id: 3,
                    active: false,
                    status: 'drafts',
                    text: 'Черновики',
                    imgSrc: require('@/assets/draft.svg')
                },
                {
                    id: 4,
                    active: false,
                    status: 'archive',
                    text: 'Архив',
                    imgSrc: require('@/assets/archive.svg')
                },
            ],
        }
    },
    
    methods: {
        changeActiveHandler(item) {
            this.barBlocks = this.barBlocks.map(block => {
                if (block.id == item.id) {
                    this.$store.dispatch(cardsAction.activeCardsTypeHandler, item.status)
                    return {
                        ...block,
                        active: true,
                    };
                    
                } 
                return {
                    ...block,
                    active: false,
                };
            })
        },
        
    }
}
</script>


<style lang="scss" scoped>
.no-scroll::-webkit-scrollbar{
width: 0;
height: 0px;
}

.tab_bar {
    display: flex;
    width: 100%;
    overflow-x: auto;
    align-items: center;
    padding-bottom: 25px;
    border-bottom: 0.5px solid #D9C4B7;
    &__item {
        display: flex;
        width: auto;
        padding: 0 17px;
        height: 40px;
        cursor: pointer;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
        margin-right: 18px;
        
        &:hover {
            background-color:rgba(#fff, .5);
            transform: scale(1.01)
        }
        span {
            display: block;
            font-weight: 600;
            font-size: 14px;
            line-height: 16px;
            text-align: center;
            color: #2D3134;
            margin-left: 8px;
            white-space: nowrap;
        }
        &.active {
            background-color: #fff;
            &:hover {
                background-color: #fff;
                transform: scale(1)
            }
        }
    }
}

@media (max-width: 800px) {
    .tab_bar {
        display: flex;
        width: 100%;
        padding-bottom: 16px;
        &__item {
            margin-right: 10px;
        }
    }
}
</style>