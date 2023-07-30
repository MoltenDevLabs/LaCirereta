<template>
  <div
    class="card relative hover:shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-500"
  >
    <img
      :src="imageSrc"
      alt="Some Image"
      class="m-0 md:m-0 rounded opacity-70 cursor-pointer"
      @click="$router.push(`/category/${title}`)"
    />
    <div class="absolute top-1/2 cursor-pointer">
      <nuxt-link
        :to="`/category/${title}`"
        class="w-1/2 mt-1 text-lg no-underline tracking-[.4em]"
      >
        {{ title.toUpperCase() }}
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>
