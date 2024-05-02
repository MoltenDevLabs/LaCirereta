import type { Store } from "pinia";
import type { Cake } from "~/domain/cake";

export const addCake = (cake: Cake) => 
  {
    const cakeStore = useCakeStore()
    const cakeExists = cakeStore.featuredList.find(c => c.id === cake.id) != null
    if(!cakeExists)
      cakeStore.featuredList.push(cake)
    else throw new Error('Cake exists')
  }
