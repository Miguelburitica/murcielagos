<script setup lang="ts">
import { BatGroupFilter } from '../application/useQuerierBatGroup';

defineProps<{
  filters: Map<string, BatGroupFilter>
}>()

</script>

<template>
  <nav>
    <ul>
      <fieldset v-for="[key, filter] of filters?.entries()" :key="key">
        <label
          :for="filter.characteristicName"
          class="mr-4"
        >
          {{ filter.characteristicName }}
        </label>
        <input @input="" type="checkbox" :id="filter.characteristicName">
      </fieldset>
    </ul>
  </nav>
</template>