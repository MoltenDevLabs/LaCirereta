<template>
  <div>
    <!-- <div v-if="$device.isMobileOrTablet">
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
              v-model="selectedCoc"
              class="select-product"
            >
              <option v-for="option in cocOptions" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="flex justify-between items-center mx-2">
            <label for="decoracio">DECORACIÓ: </label>
            <select
              id="decoracio"
              name="decoracio"
              v-model="selectedFarcit"
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
    </div> -->
    <div v-if="$device.isDesktop" class="flex flex-col gap-4">
      <div>
        <h4 class="section-title">Tasta un pastís deliciós</h4>
        <p>
          Els meus pastissos personalitzats són la meva passió i el meu segell
          distintiu. Els faig amb tota la cura i el detall que es mereixen,
          segons els teus gustos i preferències. Puc fer
          pastissos de qualsevol ingredient, decoració o temàtica que vulguis.
          Només has de dir-me quina és la teva idea i jo la faré realitat.
        </p>
        <hr />
      </div>
      <div class="flex flex-row gap-8">
        <div class="w-3/5 flex flex-col items-start not-prose">
          <div class="h-auto object-contain">
            <img
              src="https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/potter/potter-front.jpg?t=2024-03-14T08%3A23%3A29.565Z"
              alt="Cake Image"
              class="rounded-md my-4 not-prose"
            />
          </div>
          <div class="flex gap-4 overflow-hidden">
            <productCard
              v-for="cake in featuredList"
              :key="cake.id"
              :cake="cake"
              class=""
            />
          </div>
        </div>
        <div class="flex flex-col justify-center w-2/5">
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
                <option value="Especial">Especial (35+ porcions)</option>
              </select>
            </div>
            <div class="flex justify-between items-center mx-2">
              <label for="gustos"> GUST COC: </label>
              <select
                id="gustos"
                name="gustos"
                v-model="selectedCoc"
                class="select-product"
              >
                <option v-for="option in cocOptions" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="flex justify-between items-center mx-2">
              <label for="decoracio">GUST FARCIT: </label>
              <select
                id="decoracio"
                name="decoracio"
                v-model="selectedFarcit"
                class="select-product"
              >
                <option v-for="option in farcitOptions" :value="option">
                  {{ option }}
                </option>
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
          <div class="flex flex-col items-stretch my-4 mx-[12%]">
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
  </div>
</template>

<script setup>
import { useCakeStore } from "@/stores/cakeStore";
const cakeStore = useCakeStore();
const featuredList = cakeStore.featuredList;

const selectedSize = ref("Petit");
const selectedFarcit = ref("Trufa");
const selectedCoc = ref("Vainilla");
const selectedTheme = ref("");

let cocOptions;
cocOptions = ref(["Vainilla", "Xocolata"]);

let farcitOptions;
farcitOptions = ref(["Trufa", "Nata", "Kinder"]);

const generateWhatsAppLink = () => {
  const message = `Hola! M'interessa el pastís següent:`;

  const selectedOptions = `
  \u{1F4CF} Mida: ${selectedSize.value},
  \u{1F370} Gust coc: ${selectedCoc.value},
  \u{1FA84} Gust farcit: ${selectedFarcit.value},
  \u{1F4DD} Temàtica: ${selectedTheme.value}`;

  const phoneNumber = "34699233456";
  const encodedMessage = encodeURIComponent(message + selectedOptions);
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return whatsappLink;
};
</script>

<style scoped></style>
