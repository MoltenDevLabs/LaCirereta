<template>
  <div>
    <div v-if="$device.isMobileOrTablet">
      <div class="flex flex-col">
        <img :src="cakeProduct.img" alt="Cake Image" class="rounded-md" />
        <h2 class="mt-0 mb-2">
          {{
            cakeProduct.title.charAt(0).toUpperCase() +
            cakeProduct.title.slice(1)
          }}
        </h2>
        <p class="my-0">{{ cakeProduct.description }}</p>
        <hr />
        <form action="">
          <div class="flex justify-between items-center mx-2">
            <label for="mida">MIDA: </label>
            <select
              id="mida"
              name="mida"
              v-model="selectedSize"
              class="select-product"
            >
              <option value="Petit">Petit (8-15 porcions)</option>
              <option value="Mitjà">Mitjà (20-25 porcions)</option>
              <option value="Gran">Gran (25-35 porcions)</option>
            </select>
          </div>
          <div class="flex justify-between items-center mx-2">
            <label for="gustos">GUST: </label>
            <select
              id="gustos"
              name="gustos"
              v-model="selectedGust"
              class="select-product"
            >
              <option v-for="option in cakeOptions" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex justify-between items-center mx-2">
            <label for="decoracio">DECORACIÓ: </label>
            <select
              id="decoracio"
              name="decoracio"
              v-model="selectedDecoration"
              class="select-product"
            >
              <option value="Sense imatges">Sense imatges</option>
              <option value="Xocotransfer">Xocotransfer (+12€)</option>
              <option value="Paper de sucre">Paper de sucre (+10€)</option>
            </select>
          </div>
          <div class="flex justify-between items-start mx-2">
            <label for="tematica" class="mt-4">TEMÀTICA </label>
            <textarea
              id="tematica"
              name="tematica"
              v-model="selectedTheme"
              cols="30"
              rows="4"
              class="px-2 my-4 w-2/3 resize-none border rounded-md outline-surface-900 border-surface-900 dark:border-surface-300 dark:bg-surface-800"
              placeholder="Explica la temàtica del teu pastís."
            ></textarea>
          </div>
        </form>
        <div class="flex justify-between items-center mx-4">
          <p class="text-xl">TOTAL: {{ totalPrice }}€</p>
          <a
            :href="generateWhatsAppLink()"
            class="btn my-8 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacta
          </a>
        </div>
      </div>
    </div>
    <div v-if="$device.isDesktop" class="flex gap-8">
      <div class="w-1/2 h-auto object-contain flex items-start not-prose">
        <img
          :src="cakeProduct.img"
          alt="Cake Image"
          class="rounded-md my-4 not-prose"
        />
      </div>
      <div class="w-1/2">
        <h4 class="section-title">
          {{ cakeProduct.title }}
        </h4>
        <p class="my-0">{{ cakeProduct.description }}</p>
        <hr />
        <form action="">
          <div class="flex justify-between items-center mx-2">
            <label for="mida">MIDA: </label>
            <select
              id="mida"
              name="mida"
              v-model="selectedSize"
              class="select-product"
            >
              <option value="Petit">Petit (8-15 porcions)</option>
              <option value="Mitjà">Mitjà (20-25 porcions)</option>
              <option value="Gran">Gran (25-35 porcions)</option>
            </select>
          </div>
          <div class="flex justify-between items-center mx-2">
            <label for="gustos">GUST: </label>
            <select
              id="gustos"
              name="gustos"
              v-model="selectedGust"
              class="select-product"
            >
              <option v-for="option in cakeOptions" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex justify-between items-center mx-2">
            <label for="decoracio">DECORACIÓ: </label>
            <select
              id="decoracio"
              name="decoracio"
              v-model="selectedDecoration"
              class="select-product"
            >
              <option value="Sense imatges">Sense imatges</option>
              <option value="Xocotransfer">Xocotransfer (+12€)</option>
              <option value="Paper de sucre">Paper de sucre (+10€)</option>
            </select>
          </div>
          <div class="flex justify-between items-start mx-2">
            <label for="tematica" class="mt-4">TEMÀTICA: </label>
            <textarea
              id="tematica"
              name="tematica"
              v-model="selectedTheme"
              cols="30"
              rows="4"
              class="px-2 my-4 w-2/3 resize-none border rounded-md outline-surface-900 border-surface-900 dark:border-surface-300 dark:bg-surface-800"
              placeholder="Explica la temàtica del teu pastís."
            ></textarea>
          </div>
        </form>
        <div class="flex justify-between items-center mx-4">
          <p class="text-xl lg:text-2xl">TOTAL: {{ totalPrice }}€</p>
          <a
            :href="generateWhatsAppLink()"
            class="btn my-8 no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacta
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const route = useRoute();
const cakeStore = useCakeStore();

const cakes = [
  ...JSON.parse(JSON.stringify(cakeStore.pastissosList)),
  ...JSON.parse(JSON.stringify(cakeStore.browniesList)),
  ...JSON.parse(JSON.stringify(cakeStore.cheesecakesList)),
  ...JSON.parse(JSON.stringify(cakeStore.tematitzatsList)),
];
const data = cakes.find((c) => c.title === route.params.title);

const cakeProduct = ref(data);

const selectedSize = ref("Petit");
const selectedDecoration = ref("Sense imatges");
const selectedGust = ref("Xocolata");
const selectedTheme = ref("");

let cakeOptions;
if (cakeProduct.value.title.toLowerCase() === "red velvet") {
  cakeOptions = ref(["Red Velvet"]);
  selectedGust.value = "Red Velvet";
} else if (cakeProduct.value.title.toLowerCase() === "carrot cake") {
  cakeOptions = ref(["Carrot Cake"]);
  selectedGust.value = "Carrot Cake";
} else {
  cakeOptions = ref(["Xocolata", "Crema Kinder", "Oreo", "Crema Mascarpone"]);
}

const totalPrice = computed(() => {
  let sizePrice = 0;
  if (selectedSize.value) {
    sizePrice = cakeProduct.value.price[selectedSize.value];
  }

  let decorationPrice = 0;
  if (selectedDecoration.value === "Xocotransfer") {
    decorationPrice = 12;
  } else if (selectedDecoration.value === "Paper de sucre") {
    decorationPrice = 10;
  }

  return sizePrice + decorationPrice;
});

const generateWhatsAppLink = () => {
  const message = `Hola! M'interessa el ${
    cakeProduct.value.title.charAt(0).toUpperCase() +
    cakeProduct.value.title.slice(1)
  }.`;

  const selectedOptions = `
  \u{1F4CF} Mida: ${selectedSize.value},
  \u{1F370} Gust: ${selectedGust.value},
  \u{1FA84} Decoració: ${selectedDecoration.value},
  \u{1F4DD} Temàtica: ${selectedTheme.value}`;

  const phoneNumber = "34699233456";
  const encodedMessage = encodeURIComponent(message + selectedOptions);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return whatsappLink;
};
</script>

<style scoped></style>
