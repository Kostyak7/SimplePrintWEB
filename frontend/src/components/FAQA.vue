<template>
  <section class="faq" id="FAQ">
    <div class="container">
      <text-header-a class="faq__header">FAQ</text-header-a>
      <div class="accordion">
        <div class="accordion__item">
          <button class="accordion__item-header">
            <div>Сколько стоит печать?</div>
            <div class="accordion__toggle">
              <div class="accordion__line-wrapper">
                <div class="accordion__line-1"></div>
                <div class="accordion__line-2"></div>
              </div>
            </div>
          </button>
          <div class="accordion__item-content">
            <div class="accordion__text">Односторонняя ч/б печать стоит Xр, двусторонняя — Xр. Односторонняя цветная
              печать стоит Xр, двустороняя —Xр.
            </div>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__item-header">
            <div>Возможно ли оплатить картой?</div>
            <div class="accordion__toggle">
              <div class="accordion__line-wrapper">
                <div class="accordion__line-1"></div>
                <div class="accordion__line-2"></div>
              </div>
            </div>
          </button>
          <div class="accordion__item-content">
            <div class="accordion__text">Да, печать можно оплатить у принтера.</div>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__item-header">
            <div>В какие часы возможно распечатать?</div>
            <div class="accordion__toggle">
              <div class="accordion__line-wrapper">
                <div class="accordion__line-1"></div>
                <div class="accordion__line-2"></div>
              </div>
            </div>
          </button>
          <div class="accordion__item-content">
            <div class="accordion__text">Наши принтеры работают круглосуточно!</div>
          </div>
        </div>
        <div class="accordion__item">
          <button class="accordion__item-header">
            <div>Что делать в случае появления брака?</div>
            <div class="accordion__toggle">
              <div class="accordion__line-wrapper">
                <div class="accordion__line-1"></div>
                <div class="accordion__line-2"></div>
              </div>
            </div>
          </button>
          <div class="accordion__item-content">
            <div class="accordion__text">Написать в поддержку с описанием возникшей проблемы, по возможности, прикрепить
              фотографии.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TextHeaderA from "@/components/UI/TextHeaderA";

export default {
  name: "faq-a",
  components: {TextHeaderA}
}
</script>

<style lang="sass">
.faq
    margin-top: 6rem
    &__header
        padding-bottom: 3rem
        left: -1rem
        h2
            transform: rotate(-7deg)

.accordion
    padding-top: 0.5rem
    &__item
        border-top: var(--border)
        &-header
            height: 5rem
            width: 100%
            padding: 0
            align-items: center
            justify-content: space-between
            border: none
            color: #000
            background: inherit
            display: flex
            &:focus
                outline: none
            &:active
                outline: none
    &__item-content
        max-height: 0
        overflow: hidden
        transition: max-height 0.2s ease-out
    &__text
        padding-bottom: 2rem
    &:last-child
        border-bottom: var(--border)
    &__toggle
        margin-right: 0.5rem
    &__line
        &-wrapper
            height: 1rem
            width: 1rem
            overflow: hidden
            transform: rotate(135deg)
            transition: all 0.2s ease-out
        &-wrapper_active
            transform: rotate(225deg)
        &-1
            background-color: #000
            height: 2.4px
            width: 100%
        &-2
            background-color: #000
            height: 100%
            width: 2.4px

@media (min-width: 768px)
    .faq
        margin-top: 8rem
        &__header
            left: -2rem
    .accordion
        font-size: 1.5rem
        padding-top: 2rem
        &__item-header
            height: 7.25rem
        &__toggle
            margin-right: 1rem
        &__line
            &-wrapper
                height: 1.5rem
                width: 1.5rem
            &-1
                height: 3px
            &-2
                width: 3px
</style>