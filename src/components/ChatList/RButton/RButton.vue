<template>
  <button type="button" @click="$emit(emit)" class="robin-button" :style="getStyles">
    <slot>Archived</slot>
  </button>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import Component from 'vue-class-component'

const ComponentProps = Vue.extend({
  props: {
    color: {
      type: String as PropType<string>,
      default: '#15AE73'
    },
    fontSize: {
      type: Number as PropType<number>,
      default: 16
    },
    fontWeight: {
      type: String as PropType<string>,
      default: 'normal'
    },
    emit: {
      type: String as PropType<string>,
      default: 'archived'
    }
  }
})

@Component({
  name: 'RButton'
})
export default class RButton extends ComponentProps {
  root = null as any

  mounted (): void {
    this.root = document.documentElement
    // this.getStyles()
  }

  get getStyles (): Object {
    let rootFontSize = 16 // default
    let fontSize = `${(this.fontSize / rootFontSize) + 'rem'}`

    if (this.root && this.root.style.fontSize !== '') {
      rootFontSize = this.root.style.fontSize
    }

    if (this.fontSize === 16) {
      fontSize = `clamp(0.3rem, 5vw, ${this.fontSize / rootFontSize + 'rem'})`
    } else if (this.fontSize === 14) {
      fontSize = `clamp(0.3rem, 3.5vw, ${this.fontSize / rootFontSize + 'rem'})`
    } else if (this.fontSize === 17) {
      fontSize = `clamp(0.3rem, 7vw, ${this.fontSize / rootFontSize + 'rem'})`
    }

    return {
      'font-size': fontSize,
      color: this.color,
      'font-weight': this.fontWeight
    }
  }
}
</script>

<style scoped>
.robin-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: max-content;
}
</style>
