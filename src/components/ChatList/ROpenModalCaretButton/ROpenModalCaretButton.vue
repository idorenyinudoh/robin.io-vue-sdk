<template>
  <button class="robin-button" type="button" @click="$emit('open')" v-on-clickaway="emitClickAway">
    <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.83053 0.193862C6.70562 0.0696944 6.53666 0 6.36053 0C6.18441 0 6.01544 0.0696944 5.89053 0.193862L3.4972 2.55386L1.1372 0.193862C1.01229 0.0696944 0.843323 0 0.667199 0C0.491075 0 0.322107 0.0696944 0.197199 0.193862C0.134713 0.255837 0.0851169 0.329571 0.0512711 0.41081C0.0174253 0.49205 0 0.579187 0 0.667195C0 0.755203 0.0174253 0.84234 0.0512711 0.92358C0.0851169 1.00482 0.134713 1.07855 0.197199 1.14053L3.02387 3.9672C3.08584 4.02968 3.15957 4.07928 3.24081 4.11312C3.32205 4.14697 3.40919 4.16439 3.4972 4.16439C3.58521 4.16439 3.67234 4.14697 3.75358 4.11312C3.83482 4.07928 3.90856 4.02968 3.97053 3.9672L6.83053 1.14053C6.89302 1.07855 6.94261 1.00482 6.97646 0.92358C7.0103 0.84234 7.02773 0.755203 7.02773 0.667195C7.02773 0.579187 7.0103 0.49205 6.97646 0.41081C6.94261 0.329571 6.89302 0.255837 6.83053 0.193862Z" fill="#858D96" />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
import { mixin as clickaway } from 'vue-clickaway'
import Component from 'vue-class-component'

@Component({
  name: 'ROpenModalCaretButton',
  mixins: [clickaway]
})
export default class ROpenModalCaretButton extends Vue {
  emitClickAway (): void {
    this.$emit('clickoutside')
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
