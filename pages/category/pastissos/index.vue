<template>
  <div>
    <h4 class="section-title">Tasta un pastís deliciós</h4>
    <p>
      Els meus pastissos personalitzats són la meva passió i el meu segell
      distintiu. Els faig amb tota la cura i el detall que es mereixen, segons
      els gustos i les preferències dels meus clients. Puc fer pastissos de
      qualsevol ingredient, decoració o temàtica que vulguis. Només has de
      dir-me quina és la teva idea i jo la faré realitat.
    </p>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4"
    >
      <productCard
        v-for="pastis in pastissosList"
        :key="pastis.id"
        :pastis="pastis"
        :title="pastis.title"
        :description="pastis.description"
        :price="pastis.price"
        :imageSrc="pastis.img"
      />
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const pastissosList = cakeStore.pastissosList;
</script>

<style></style>
