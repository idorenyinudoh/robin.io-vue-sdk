<template>
  <button type="button" class="robin-button">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 5H4.16667H17.5" stroke="#E80000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.66699 5.00002V3.33335C6.66699 2.89133 6.84259 2.4674 7.15515 2.15484C7.46771 1.84228 7.89163 1.66669 8.33366 1.66669H11.667C12.109 1.66669 12.5329 1.84228 12.8455 2.15484C13.1581 2.4674 13.3337 2.89133 13.3337 3.33335V5.00002M15.8337 5.00002V16.6667C15.8337 17.1087 15.6581 17.5326 15.3455 17.8452C15.0329 18.1578 14.609 18.3334 14.167 18.3334H5.83366C5.39163 18.3334 4.96771 18.1578 4.65515 17.8452C4.34259 17.5326 4.16699 17.1087 4.16699 16.6667V5.00002H15.8337Z" stroke="#E80000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11.667 9.16669V14.1667" stroke="#E80000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8.33301 9.16669V14.1667" stroke="#E80000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RDeleteButton'
})
</script>

<style scoped>
.robin-button {
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: max-content;
}
</style>
