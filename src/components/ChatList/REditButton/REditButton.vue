<template>
  <button type="button" @click="$emit('edit')" class="robin-button">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.16699 3.33337H3.33366C2.89163 3.33337 2.46771 3.50897 2.15515 3.82153C1.84259 4.13409 1.66699 4.55801 1.66699 5.00004V16.6667C1.66699 17.1087 1.84259 17.5327 2.15515 17.8452C2.46771 18.1578 2.89163 18.3334 3.33366 18.3334H15.0003C15.4424 18.3334 15.8663 18.1578 16.1788 17.8452C16.4914 17.5327 16.667 17.1087 16.667 16.6667V10.8334" stroke="#535F89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.417 2.08332C15.7485 1.7518 16.1981 1.56555 16.667 1.56555C17.1358 1.56555 17.5855 1.7518 17.917 2.08332C18.2485 2.41484 18.4348 2.86448 18.4348 3.33332C18.4348 3.80216 18.2485 4.2518 17.917 4.58332L10.0003 12.5L6.66699 13.3333L7.50033 9.99998L15.417 2.08332Z" stroke="#535F89" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'REditButton'
})
</script>

<style scoped>
.robin-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
