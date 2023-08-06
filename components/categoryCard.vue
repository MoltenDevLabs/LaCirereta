<template>
  <div
    class="card relative flex flex-col items-center hover:scale-105 transition-transform duration-500"
  >
    <img
      :src="imageSrc"
      alt="Some Image"
      class="m-0 md:m-0 rounded cursor-pointer"
      @click="$router.push(`/category/${title}`)"
    />
    <div
      class="absolute top-1/2 cursor-pointer bg-primary-200 opacity-60 w-full text-center"
    >
      <nuxt-link
        :to="`/category/${title}`"
        class="text-lg no-underline tracking-[.4em] dark:text-surface-900"
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
