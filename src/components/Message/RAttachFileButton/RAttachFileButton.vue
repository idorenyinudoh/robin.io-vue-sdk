<template>
  <button class="robin-button" type="button" @click="$emit('open')" v-on-clickaway="emitClickAway">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.8666 9.2081L10.2082 16.8664C9.27005 17.8046 7.99757 18.3317 6.67075 18.3317C5.34393 18.3317 4.07145 17.8046 3.13325 16.8664C2.19505 15.9282 1.66797 14.6558 1.66797 13.3289C1.66797 12.0021 2.19505 10.7296 3.13325 9.79144L10.7916 2.1331C11.4171 1.50763 12.2654 1.15625 13.1499 1.15625C14.0345 1.15625 14.8828 1.50763 15.5082 2.1331C16.1337 2.75857 16.4851 3.60689 16.4851 4.49144C16.4851 5.37598 16.1337 6.2243 15.5082 6.84977L7.84158 14.5081C7.52885 14.8208 7.10469 14.9965 6.66242 14.9965C6.22014 14.9965 5.79598 14.8208 5.48325 14.5081C5.17051 14.1954 4.99482 13.7712 4.99482 13.3289C4.99482 12.8867 5.17051 12.4625 5.48325 12.1498L12.5582 5.0831" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { mixin as clickaway } from 'vue-clickaway'
import Component from 'vue-class-component'

const ComponentProps = Vue.extend({
  props: {
    color: {
      type: String as PropType<string>,
      default: '#535F89'
    },
    focusColor: {
      type: String as PropType<string>,
      default: 'rgba(83, 95, 137, 0.1)'
    }
  }
})

@Component({
  name: 'RAttachFileButton',
  mixins: [clickaway]
})
export default class RAttachFileButton extends ComponentProps {
  root = null as any

  mounted (): void {
    this.root = document.documentElement
    this.setRootVariables()
  }

  setRootVariables (): void {
    this.root.style.setProperty('--primary-focus-color', this.focusColor)
  }

  emitClickAway (): void {
    this.$emit('clickoutside')
  }
}
</script>

<style scoped>
.robin-button {
  cursor: pointer;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  height: 30px;
  background-color: transparent;
  transition: background-color 0.1s;
}

button:focus {
  background-color: var(--primary-focus-color);
}

svg path {
  transition: stroke 0.1s;
}

button:focus svg path {
  stroke: var(--primary-color);
}
</style>
