<template>
    <div class="card">
        <div class="card_top">
            <div class="brand">
                <img :src="info.brandIcon" :alt="info.brand">
                <div class="txt">
                    {{info.brand}}
                </div>
            </div>
            <div 
                class="status"
                :class="info.status"
            >   
                {{info.statusText}}
            </div>
        </div>
        <div class="card_img">
            <img :src="info.mainImg" alt="">
        </div>
        <h2 class="card_title" v-html="info.title">
        </h2>
        <div class="gift" v-if="info.gift">
            <img src="@/assets/cards/Gift.svg" alt="Подарок">
            <div class="gift_txt">
                {{info.giftText}}
            </div>
        </div>
        <div class="card_main">
            <div class="card_main__messages card_main-item">
                <div class="txt">
                    Новые сообщения 
                </div>
                <div class="right">
                    <div class="card_main__messages-counter bounce">
                        {{info.messageCount}}
                    </div>
                    <div class="arrow">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.293458 1.7929C-0.0963294 1.40312 -0.0942035 0.769019 0.293762 0.381054L0.381608 0.293208C0.771564 -0.0967477 1.40119 -0.0993609 1.79567 0.295118L6.8797 5.37914C7.27071 5.77015 7.27418 6.40064 6.8797 6.79512L1.79567 11.8791C1.40466 12.2702 0.769574 12.269 0.381608 11.8811L0.293762 11.7932C-0.0961935 11.4033 -0.0995424 10.7744 0.293458 10.3814L4.58769 6.08713L0.293458 1.7929Z" fill="#B8C1CC"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="card_main__applications card_main-item">
                <div class="txt">
                    Новые заявки
                </div>
                <div class="right">
                    <div class="avatars_block" v-if="info.applications.length > 0">
                        <div 
                            class="applications_avatars" 
                            v-for="(avatar, i) in info.applications" 
                            :key="avatar.id"
                        >
                            <div v-if="i <= 2" 
                                class="applications_avatars-item bounce">
                                <img :src="avatar.avatarSrc" alt="#">
                            </div>
                        </div>
                        <div class="avatar_counter bounce applications_avatars-item" v-if="info.applications.length > 3">+{{info.applications.length - 3}}</div>
                    </div>
                    <div class="bounce avatar_counter" v-else>
                        0
                    </div>
                    

                    <div class="arrow">
                        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.293458 1.7929C-0.0963294 1.40312 -0.0942035 0.769019 0.293762 0.381054L0.381608 0.293208C0.771564 -0.0967477 1.40119 -0.0993609 1.79567 0.295118L6.8797 5.37914C7.27071 5.77015 7.27418 6.40064 6.8797 6.79512L1.79567 11.8791C1.40466 12.2702 0.769574 12.269 0.381608 11.8811L0.293762 11.7932C-0.0961935 11.4033 -0.0995424 10.7744 0.293458 10.3814L4.58769 6.08713L0.293458 1.7929Z" fill="#B8C1CC"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="card_main__timer card_main-item">
                <div class="txt">
                    До завершения
                </div>
                <div class="right">
                    <div class="time_items" v-if="intervalStart">
                        <div class="timer" >
                            <div class="timer-item" v-if="dateTime.weeks > 0">
                                <span id="timer-weeks" >{{dateTime.weeks}}н</span> <span class="separator"> : </span> 
                            </div>
                            <div class="timer-item" v-if="dateTime.days  > 0">
                                <span id="timer-days" >{{dateTime.days}}д</span> <span class="separator"> : </span>   
                            </div>
                            <div class="timer-item" v-if="dateTime.hours  > 0">
                                <span id="timer-hours" >{{dateTime.hours}}ч</span> <span class="separator"> : </span>  
                                
                            </div>
                            <div class="timer-item" v-if="dateTime.mins > 0">
                                <span id="timer-mins">{{dateTime.mins}}м</span> <span  class="separator"> : </span> 
                                
                            </div>
                            <div class="timer-item">
                                <span id="timer-secs">{{dateTime.secs}}с</span>
                            </div>
                        </div>
                    </div>
                    <div v-else class="txt">
                        Завершено
                    </div>
                </div>
            </div>
            <div class="card_main__accept card_main-item">
                <div class="txt">
                    Выполнено
                </div>
                <div class="right">
                    <div class="complite_counter">
                        {{info.complitCounter}} / {{info.complitCounterToAll}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            endDate: '',
            dateTime: {
                days: 0,
                hours: 0,
                mins: 0,
                secs: 0,
                weeks: 0,
            },
            intervalStart: false,
        }
    },
    props: {
        info: {
            type: Object,
            required: true,
        }
    },
    methods: {
        timerCount() {
            let now = new Date().getTime(); 
            let t = this.endDate - now;
            if (t >= 0) {
                let days = Math.floor(t / (1000 * 60 * 60 * 24));
                let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((t % (1000 * 60)) / 1000);
                let weeks = Math.floor(Math.abs(t) / (1000 * 7 * 24 * 60 * 60));
                if (weeks > 0) {
                    days = days - 7 * weeks;
                }
                this.dateTime = {
                    days,
                    hours,
                    mins,
                    secs,
                    weeks
                }
                this.intervalStart = true;
            } else {
                this.intervalStart = false;
            }

            
        }
    },
    mounted() {
        this.endDate = new Date(this.info.complitDate).getTime();
        console.log(new Date(this.info.complitDate))
        setInterval(this.timerCount, 1000)
    }
}
</script>

<style lang="scss" scoped>
.card {
    // align-self: stretch;
    height: auto;
    width: 100%;
    overflow-x: hidden;
    grid-auto-rows: min-content;
    padding: 14px;
    padding-bottom: 24px;
    background: #FFFFFF;
    box-shadow: 0px 10px 20px rgba(233, 216, 207, 0.3);
    border-radius: 4px 20px 20px 20px;

    &_top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .brand {
            display: flex;
            align-items: center;
            img {
                height: 36px;
                width: 36px;
                border-radius: 11px;
                object-fit: cover;
            }
            .txt {
                font-weight: bold;
                font-size: 14px;
                line-height: 16px;
                text-align: center;
                margin-left: 13px;
                color: #272931;
            }
        }
        .status {
            font-weight: 600;
            font-size: 13px;
            line-height: 15px;
            padding: 8px 15px;
            border-radius: 8px;
            &.active {
                color: #00C667;
                background: rgba(0, 198, 103, 0.08);
            }
        }
    }

    &_img {
        width: 100%;
        margin-top: 10px;

        img {
            height: auto;
            width: 100%;
            border-radius: 4px 20px 20px 20px;
        }
    }

    &_title {
        min-height: 38px;
        margin-top: 20px;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #272931;
    }
    &_main {
        margin-top: 14px;

        &-item {
            display: flex;
            width: 100%;
            align-items: center;
            padding: 17px 0;
            justify-content: space-between;
            border-top: 0.5px solid #D4D8E3;
            transition: all .2s ease-in-out;
            &:hover {
                cursor: pointer;
                transform: scale(1.01);
                .arrow {
                    transform: translateX(5px)
                }   
            }

            .txt {
                font-weight: 600;
                font-size: 14px;
                line-height: 16px;
                color: #272931;

            }

            .right {
                display: flex;
                align-items: center;
                .arrow {
                    margin-left: 12px;
                    transition: .2s ease-in-out;
                }
                .card_main__messages-counter {
                    color: #FFFFFF;
                    font-weight: bold;
                    font-size: 14px;
                    background: #F93C47;
                }
                .avatar_counter {
                    background: #F7F7FA;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    color: #9A99B8;
                }
            }
        }
        .card_main__timer {
            &:hover {
                transform: scale(1);
                cursor: default;
            }
        }
    }
}
.complite_counter {
    padding: 7px 13px;
    background: #00C667;
    border-radius: 8px;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FFFFFF;

}

.time_items {
    background: rgba(254, 136, 98, 0.08);
    border-radius: 8px;
    padding: 8px 15px;
    
}

.timer {
    display: flex;
    align-items: center;
    &-item {
        margin-right: 3px;
        font-weight: bold;
        font-size: 13px;
        color: #FE8862;
    }
}

.avatars_block {
    display: flex;
    align-items: center;
    .applications_avatars {
        display: flex;
        align-self: center;
        
    }
    .applications_avatars-item {
        margin-left: -6px !important;
        img {
            height: 100%;
            width: 100%;
            border-radius: 100%;
            object-fit: cover;
        }
    }
}

.bounce {
    height: 30px;
    width: 30px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.gift {
    display: flex;
    align-items: start;
    margin-top: 15px;

    &_txt {
        font-weight: bold;
        font-size: 14px;
        color: #FC5A8B;
        margin-left: 10px;

    }
}
</style>