<template>
  <button type="button" @click="$emit('open')" v-on-clickaway="emitClickAway" class="robin-button">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99968 5.83333C10.3293 5.83333 10.6515 5.73559 10.9256 5.55245C11.1997 5.36931 11.4133 5.10902 11.5395 4.80447C11.6656 4.49993 11.6986 4.16482 11.6343 3.84152C11.57 3.51822 11.4113 3.22124 11.1782 2.98816C10.9451 2.75507 10.6481 2.59633 10.3248 2.53203C10.0015 2.46772 9.66641 2.50072 9.36187 2.62687C9.05733 2.75301 8.79703 2.96664 8.61389 3.24072C8.43076 3.5148 8.33301 3.83703 8.33301 4.16667C8.33301 4.60869 8.5086 5.03262 8.82116 5.34518C9.13373 5.65774 9.55765 5.83333 9.99968 5.83333ZM9.99968 14.1667C9.67004 14.1667 9.34781 14.2644 9.07373 14.4476C8.79964 14.6307 8.58602 14.891 8.45988 15.1955C8.33373 15.5001 8.30072 15.8352 8.36503 16.1585C8.42934 16.4818 8.58808 16.7788 8.82116 17.0118C9.05425 17.2449 9.35122 17.4037 9.67453 17.468C9.99783 17.5323 10.3329 17.4993 10.6375 17.3731C10.942 17.247 11.2023 17.0334 11.3855 16.7593C11.5686 16.4852 11.6663 16.163 11.6663 15.8333C11.6663 15.3913 11.4907 14.9674 11.1782 14.6548C10.8656 14.3423 10.4417 14.1667 9.99968 14.1667ZM9.99968 8.33333C9.67004 8.33333 9.34781 8.43108 9.07373 8.61422C8.79964 8.79735 8.58602 9.05765 8.45988 9.3622C8.33373 9.66674 8.30072 10.0018 8.36503 10.3252C8.42934 10.6485 8.58808 10.9454 8.82116 11.1785C9.05425 11.4116 9.35122 11.5703 9.67453 11.6346C9.99783 11.699 10.3329 11.6659 10.6375 11.5398C10.942 11.4137 11.2023 11.2 11.3855 10.926C11.5686 10.6519 11.6663 10.3296 11.6663 10C11.6663 9.55797 11.4907 9.13405 11.1782 8.82149C10.8656 8.50893 10.4417 8.33333 9.99968 8.33333Z" :fill="color" />
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
      default: 'rgba(21, 174, 115, 0.1)'
    }
  }
})
// eslint-disable-next-line
@Component<ROptionButton>({
  name: 'ROptionButton',
  mixins: [clickaway],
  watch: {
    focusColor(): void {
      this.setRootVariables()
    }
  }
})
export default class ROptionButton extends ComponentProps {
  root = null as any

  mounted(): void {
    this.root = document.documentElement
    this.setRootVariables()
  }

  setRootVariables(): void {
    this.root.style.setProperty('--primary-focus-color', this.focusColor)
  }

  emitClickAway(): void {
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
  transition: fill 0.1s;
}

button:focus svg path {
  fill: var(--primary-color);
}
</style>
