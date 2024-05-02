<template>
 <div>
   <div>admin page</div>
  <input id="title" label="title" />
  <input id="description" label="description"/>
  <button @click="localAddCake">afegir pastís</button>
 </div>
</template>

<script setup lang="ts">
import {addCake} from '../application/cakes/add-cake/command'
  definePageMeta({
    validate: async (route) => {
      debugger
      // Check if the id is made up of digits
      return route.query.user === 'admin'
      //return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
    }
  })

  const localAddCake = () => {
    const cake = {
      id: 99,
      title: (document.getElementById('title') as HTMLInputElement)?.value,
      description: (document.getElementById('description') as HTMLInputElement)?.value,
      img: ''
  }
    addCake(cake)
  }

</script>

<style scoped></style>