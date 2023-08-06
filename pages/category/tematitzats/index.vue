<template>
  <div>
    <h2 class="mt-4">Efecte WOW assegurat!</h2>
    <p>
      Els meus pastissos tematitzats són una de les meves especialitats més
      demandades. Els faig divertits i originals. Puc fer pastissos amb temes de
      pel·lícules, sèries o personatges preferits, o amb temes com animals,
      pirates, princeses o circ.
    </p>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4"
    >
      <productCard
        v-for="tematitzat in tematitzatsList"
        :key="tematitzat.id"
        :tematitzat="tematitzat"
        :title="tematitzat.title"
        :description="tematitzat.description"
        :price="tematitzat.price"
        :imageSrc="tematitzat.img"
      />
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const tematitzatsList = cakeStore.tematitzatsList;
</script>

<style></style>
