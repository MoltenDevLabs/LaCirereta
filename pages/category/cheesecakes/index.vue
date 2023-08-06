<template>
  <div>
    <h2 class="mt-4">Cremoses i delicioses</h2>
    <p>
      Els meus cheescakes casolans són uns dolços cremosos i lleugers, que et
      faran repetir. Els faig amb formatge fresc, nata, sucre, ous i galetes.
      Pots triar entre cheescakes al forn o sense forn, amb melmelada, amb
      xocolata, amb fruites o sense res. Tots estan deliciosos i tenen una
      consistència perfecta.
    </p>

    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-cols-auto gap-4"
    >
      <productCard
        v-for="cheesecake in cheesecakesList"
        :key="cheesecake.id"
        :cheesecake="cheesecake"
        :title="cheesecake.title"
        :description="cheesecake.description"
        :price="cheesecake.price"
        :imageSrc="cheesecake.img"
      />
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const cheesecakesList = cakeStore.cheesecakesList;
</script>

<style></style>
