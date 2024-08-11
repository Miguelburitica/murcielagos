<script setup lang="ts">

import JsonRepository from './infrastructure/JsonRespository';
import BatClassesQuerier from './sections/BatClassesQuerier.vue';

const jsonRepository = new JsonRepository()

</script>

<template>
  <BatClassesQuerier :bat-group-repository="jsonRepository" />
</template>
