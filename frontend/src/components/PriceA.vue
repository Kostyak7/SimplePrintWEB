  <template>
    <section class="price" id="Price">
            <text-header-a class="price__header">Цены</text-header-a>
            <svg class="price__line price__line_1" width="79" height="49" viewBox="0 0 79 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M77.0807 26.2586C79.286 15.6333 78.6444 -4.05344 58.4364 2.20142C33.1764 10.02 26.26 48.2107 1 47.0078" stroke="black" stroke-width="2"/>
            </svg>
            <h3 class="price__type price__type_1">ОДНОСТОРОННЯЯ</h3>
            <div class="card card_1" @click="$router.push({name: 'form-page'})">
                <div class="card__back">
                    <span class="card__type">Ч/Б</span>
                    <span class="card__for">ЛИСТ</span>
                    <img class="card__img" src="@/assets/img/white-price-once.svg" alt="" v-on:click="hello">
                </div>
                <div class="card__price">15 ₽</div>
                <img class="card__price-holder" src="@/assets/img/price-holder.svg" alt="">
            </div>
            <div class="card card_2" @click="$router.push({name: 'form-page', state:{printParam: 2}})">
                <div class="card__back">
                    <span class="card__type">ЦВЕТ</span>
                    <span class="card__for">ЛИСТ</span>
                    <img class="card__img" src="@/assets/img/color-price-once.svg" alt="">
                </div>
                <div class="card__price">25 ₽</div>
                <img class="card__price-holder" src="@/assets/img/price-holder.svg" alt="">
            </div>
            <svg class="price__line price__line_2" width="84" height="38" viewBox="0 0 84 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M83.095 1C63.3481 23.8543 19.2834 59.098 1 17.2386" stroke="black" stroke-width="2"/>
            </svg>
            <h3 class="price__type price__type_2">ДВУХСТОРОННЯЯ</h3>
            <div class="card card_3">
                <div class="card__back">
                    <span class="card__type">Ч/Б</span>
                    <span class="card__for">ЛИСТ</span>
                    <img class="card__img" src="@/assets/img/white-price-many.svg" alt="">
                </div>
                <div class="card__price">17 ₽</div>
                <img class="card__price-holder" src="@/assets/img/price-holder.svg" alt="">
            </div>
            <div class="card card_4">
                <div class="card__back">
                    <span class="card__type">ЦВЕТ</span>
                    <span class="card__for">ЛИСТ</span>
                    <img class="card__img" src="@/assets/img/color-price-many.svg" alt="">
                </div>
                <div class="card__price">30 ₽</div>
                <img class="card__price-holder" src="@/assets/img/price-holder.svg" alt="">
            </div>
        </section>
</template>

<script>
export default {
  name: "price-a",
  methods: {
    hello: function(event) {
        console.log(1)
    },
    warn: function (message, event) {
    // теперь у нас есть доступ к нативному событию
    if (event) {
      event.preventDefault()
    }
    alert(message)
  }
  }
}
</script>

<style lang="sass">
.card
    position: relative
    // z-index: -2
    &__back
        display: flex
        align-items: center
        justify-content: center
        position: relative
        background-color: $rose
        height: 180px
        margin-bottom: 10px
        margin-right: 14px
        margin-top: calc(var(--circle-size) / 2)
        border: var(--border)
        &::before
            content: ""
            position: absolute
            border-radius: 50%
            top: calc(var(--circle-size) / -2 - 2px)
            left: calc(50% + var(--circle-size) / -2)
            height: var(--circle-size)
            width: var(--circle-size)
            border: var(--border)
            background-color: #FFF
        &::after
            content: ""
            position: absolute
            top: calc(var(--circle-size) / 2 * -1 - 4px)
            left: calc(50% + var(--circle-size) / -2)
            height: calc(var(--circle-size) / 2 + 2px)
            width: var(--circle-size)
            background-color: #FFF
    &__type
        line-height: 1.3em
        margin: 0.4rem
        position: absolute
        top: 0
        left: 0
    &__for
        line-height: 1.3em
        margin: 0.4rem
        position: absolute
        top: 0
        right: 0
    &__img
        margin-top: 15px
        height: 110px
        pointer-events: none
    &__price
        z-index: 2
        position: absolute
        right: 0
        bottom: 0
        padding: 0 10px 6px 0
        font-size: 24px
        font-weight: 700
    &__price-holder
        position: absolute
        right: 0
        bottom: 0
        height: 93px
        pointer-events: none

@media (min-width: 768px)
    .card
        &__back
            height: 250px
            margin-bottom: 25px
            margin-right: 19px
            &::after
                top: calc(var(--circle-size) / 2 * -1 - 5px)
        &__type
            font-size: 24px
            margin: 0.6rem 1rem
        &__for
            font-size: 24px
            margin: 0.6rem 1rem
        &__img
            height: 170px
        &__price
            padding: 0 10px 2px 0
            font-size: 48px
        &__price-holder
            height: 160px

.price
    overflow: hidden
    &__header
        z-index: 1
        h2
            transform: rotate(23deg)
    &__type
        font-style: normal
        font-weight: 400
        writing-mode: vertical-rl
        transform: rotate(180deg)
        margin: 0


// -----------------
// GRID
// -----------------

.price
    display: grid
    grid-template-columns: 2rem 60px 1fr 50px 2rem
    grid-template-rows: auto 1fr 1fr 0px 1fr 1fr
    gap: 25px 0
    &__header
        bottom: -1rem
        right: -1rem
        padding-top: 4rem
        grid-column: 2/5
        justify-self: end
    &__type
        align-self: center
        &_1
            justify-self: start
            grid-column: 2/3
            grid-row: 2/3
        &_2
            justify-self: end
            grid-column: 4/5
            grid-row: 5/6
            transform: none
    &__line
        align-self: center
        &_1
            grid-column: 1/3
            grid-row: 3/4
            justify-self: start
            padding-right: 10px
        &_2
            grid-column: 4/6
            grid-row: 6/7
            justify-self: end
            padding-left: 10px

.card
    &_1
        grid-column: 3/5
    &_2
        grid-column: 3/5
    &_3
        grid-column: 2/4
        grid-row: 5/6
    &_4
        grid-column: 2/4
        grid-row: 6/7

@media (min-width: 576px)
    .price
        grid-template-columns: 1fr 60px 367px 60px 1fr

@media (min-width: 768px)
    .price
        grid-template-columns: 1fr 100px 367px 100px 1fr
        &__header
            bottom: -1.5rem
            right: -4rem
            padding-top: 5rem
        &__type
            font-size: 32px
        &__line
            width: 141px
            height: auto

@media (min-width: 992px)
    .price
        grid-template-columns: 1fr 60px 4fr 4fr 1fr
        grid-template-rows: auto auto auto //???????
        gap: 25px 40px
        &__type
            &_1
                grid-column: 2/3
                grid-row: 2/3
            &_2
                justify-self: start
                grid-column: 2/3
                grid-row: 3/4
                transform: rotate(180deg)
        &__line
            display: none
            &_1
                grid-column: 1/2
                grid-row: 2/3
                padding-right: 10px
            &_2
                grid-column: 1/2
                grid-row: 3/4
                justify-self: start
                padding-left: 10px
    .card
        &_1
            grid-column: 3/4
        &_2
            grid-column: 4/5
        &_3
            grid-column: 3/4
            grid-row: 3/4
        &_4
            grid-column: 4/5
            grid-row: 3/4

@media (min-width: 1200px)
    .price
        gap: 25px 75px

@media (min-width: 1400px)
    .price
        &__line
            display: block
            &_2
                padding: 0
</style>