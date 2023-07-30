<template>
  <div>
    <h4 class="section-title">El plaer d'un brownie ben fet</h4>
    <p>
      Els meus brownies artesanals són uns dolços de xocolata intensos i
      jugosos, que et faran perdre el sentit. Els faig amb xocolata de primera
      qualitat, mantega, sucre, ous i farina. Pots triar entre brownies
      clàssics, amb nous, amb caramel, amb oreo o amb xocolata blanca. Tots
      estan boníssims i tenen una textura increïble.
    </p>
    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4"
    >
      <productCard
        v-for="brownie in browniesList"
        :key="brownie.id"
        :brownie="brownie"
        :title="brownie.title"
        :description="brownie.description"
        :price="brownie.price"
        :imageSrc="brownie.img"
      />
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const browniesList = cakeStore.browniesList;
</script>

<style></style>
