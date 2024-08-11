<script setup lang="ts">
import { useQuerierBatGroup } from '../application/useQuerierBatGroup';
import { BatGroupRepository } from '../domain/RepositoryBatGroups';
import FiltersController from './FiltersController.vue';

const props = defineProps<{ batGroupRepository: BatGroupRepository }>()

const { filters, batGroupList } = useQuerierBatGroup(props.batGroupRepository)
</script>

<template>
  <main>
    <h1>Hiiii</h1>
    <FiltersController :filters="filters" />
    <ul>
      <li v-for="batGroup of batGroupList">
        Name: {{ batGroup.commonName }}
      </li>
    </ul>
  </main>
</template>

<style scoped>
</style>
