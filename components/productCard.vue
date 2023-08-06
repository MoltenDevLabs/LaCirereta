<template>
  <div
    class="card not-prose border-none shadow-none flex flex-col items-center"
  >
    <img
      :src="imageSrc"
      alt="Some Image"
      class="m-0 md:m-0 rounded hover:brightness-105 transform-gpu duration-500 cursor-pointer"
      @click="
        $router.push({
          name: product,
          path: `/category/pastissos/${title}`,
        })
      "
    />
    <div class="text-center my-1">
      <p class="text-lg font-light tracking-wider font-body">
        {{ title.toUpperCase() }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
