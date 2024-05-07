export const useCakeStore = defineStore("cakeStore", () => {
  const featuredList = ref([
    {
      id: 1,
      title: "unicorn",
      description: "cake 1 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/unicorn/unicorn-front.jpg?t=2024-02-09T14%3A30%3A44.226Z",
    },
    {
      id: 2,
      title: "pinotxo",
      description: "cake 2 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/pinotxo/pinotxo-front.jpg?t=2024-02-09T14%3A31%3A16.953Z",
    },
    {
      id: 3,
      title: "gegants",
      description: "cake 3 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/gegants/gegants-front.jpg?t=2024-02-09T14%3A31%3A37.888Z",
    },
    {
      id: 4,
      title: "goku",
      description: "cake 4 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/goku/goku-front.jpeg?t=2024-02-09T14%3A32%3A37.624Z",
    },
    {
      id: 5,
      title: "bluey",
      description: "cake 5 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/bluey/bluey-front.jpg?t=2024-02-09T14%3A33%3A01.420Z",
    },
    {
      id: 6,
      title: "potter",
      description: "cake 6 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/potter/potter-front.jpg?t=2024-03-14T08%3A23%3A29.565Z",
    },
    {
      id: 7,
      title: "rosa",
      description: "cake 7 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/rosa/rosa-front.jpg?t=2024-03-14T08%3A21%3A40.608Z",
    },
    {
      id: 8,
      title: "potter-2",
      description: "cake 8 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/potter2/potter2-front.jpg?t=2024-03-14T08%3A29%3A15.723Z",
    },
  ]);

  // Pick a random index from featuredList
  const getRandomIndex = () => Math.floor(Math.random() * featuredList.value.length);

  // Initialize selectedCake with null
  const selectedCake = ref(featuredList.value.find(cake => cake.id === 1));


  return {
    featuredList,
    selectedCake,
  };
});
