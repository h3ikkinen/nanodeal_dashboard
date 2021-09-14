const state = {
    cardsActive: [
        {
            id: 1,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main1.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Записать сторис в кросcовках Nike Air Max 720',
            gift: true,
            giftText: 'Репост строис в официальном аккаунте NikeRussia',
            messageCount: 55,
            applications: [
            ],
            complitDate: 'Sep 22, 2021 12:00:00',
            complitCounter: 250,
            complitCounterToAll: 300,
        },
        {
            id: 2,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main2.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Опубликовать сторис в Инстаграм со словами <br> “Just Do It”',
            gift: true,
            giftText: '10% скидка в интернет-магазине',
            messageCount: 3,
            complitCounter: 250,
            complitCounterToAll: 300,
            applications: [
            {
                name: 'John',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 301,
            },
            {
                name: 'Alex',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 302,
            },
            {
                name: 'Ilya',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 303,
            },
            {
                name: 'Alexey',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 304,
            },
            {
                name: 'Igor',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 305,
            },
            {
                name: 'Ann',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 306,
            },
            ],
            complitDate: 'Sep 15, 2021 12:00:00',
        },
        {
            id: 3,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main1.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Записать сторис в кросcовках Nike Air Max 720',
            gift: true,
            giftText: 'Репост строис в официальном аккаунте NikeRussia',
            messageCount: 55,
            applications: [
            ],
            complitDate: 'Sep 22, 2021 12:00:00',
            complitCounter: 250,
            complitCounterToAll: 300,
        },
        {
            id: 4,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main2.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Опубликовать сторис в Инстаграм со словами <br> “Just Do It”',
            gift: true,
            giftText: '10% скидка в интернет-магазине',
            messageCount: 3,
            complitCounter: 250,
            complitCounterToAll: 300,
            applications: [
            {
                name: 'John',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 301,
            },
            {
                name: 'Alex',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 302,
            },
            {
                name: 'Ilya',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 303,
            },
            {
                name: 'Alexey',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 304,
            },
            {
                name: 'Igor',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 305,
            },
            {
                name: 'Ann',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 306,
            },
            ],
            complitDate: 'Sep 15, 2021 12:00:00',
        },
        {
            id: 5,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main1.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Записать сторис в кросcовках Nike Air Max 720',
            gift: true,
            giftText: 'Репост строис в официальном аккаунте NikeRussia',
            messageCount: 55,
            applications: [
            ],
            complitDate: 'Sep 22, 2021 12:00:00',
            complitCounter: 250,
            complitCounterToAll: 300,
        },
        {
            id: 6,
            brand: 'Nike',
            brandIcon: require('@/assets/cards/nike.png'),
            mainImg: require('@/assets/cards/main2.png'),
            status: 'active',
            statusText: 'Активное',
            title: 'Опубликовать сторис в Инстаграм со словами <br> “Just Do It”',
            gift: true,
            giftText: '10% скидка в интернет-магазине',
            messageCount: 3,
            complitCounter: 250,
            complitCounterToAll: 300,
            applications: [
            {
                name: 'John',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 301,
            },
            {
                name: 'Alex',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 302,
            },
            {
                name: 'Ilya',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 303,
            },
            {
                name: 'Alexey',
                avatarSrc: require('@/assets/cards/appl1.png'),
                userId: 304,
            },
            {
                name: 'Igor',
                avatarSrc: require('@/assets/cards/appl2.png'),
                userId: 305,
            },
            {
                name: 'Ann',
                avatarSrc: require('@/assets/cards/appl3.png'),
                userId: 306,
            },
            ],
            complitDate: 'Sep 15, 2021 12:00:00',
        },
    ],
    activeCardsType: 'active'
}

export const mutationTypes = {
    activeCardsTypeChange: '[cards] activeCardsTypeChange',
}
export const actionsTypes = { 
    activeCardsTypeHandler: '[cards] activeCardsTypeHandler',
}

const mutations = {
    [mutationTypes.activeCardsTypeChange](state, payload) {
        state.activeCardsType = payload
    }
}   

const actions = {
    [actionsTypes.activeCardsTypeHandler](context, payload) {
        context.commit(mutationTypes.activeCardsTypeChange, payload)
    },
}

export const gettersTypes = {
    getCards: '[cards] getCards',
    getActiveCardsType: '[cards] getActiveCardsType',
}


const getters = {
    [gettersTypes.getCards]: (state) => {
        if (state.activeCardsType == 'active') {
            return state.cardsActive
        } else {
            return []
        }
    },
    [gettersTypes.getActiveCardsType]: (state) => {
        return state.activeCardsType
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}