export const useCakeStore = defineStore("cakeStore", () => {
  const featuredList = ref([
    {
      id: 1,
      title: "Unicorn",
      description: "cake 1 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/unicorn/unicorn-front.jpg?t=2024-02-09T14%3A30%3A44.226Z",
    },
    {
      id: 2,
      title: "Pinotxo",
      description: "cake 2 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/pinotxo/pinotxo-front.jpg?t=2024-02-09T14%3A31%3A16.953Z",
    },
    {
      id: 3,
      title: "Gegants",
      description: "cake 3 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/gegants/gegants-front.jpg?t=2024-02-09T14%3A31%3A37.888Z",
    },
    {
      id: 4,
      title: "Goku",
      description: "cake 4 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/goku/goku-front.jpeg?t=2024-02-09T14%3A32%3A37.624Z",
    },
    {
      id: 5,
      title: "Bluey",
      description: "cake 5 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/bluey/bluey-front.jpg?t=2024-02-09T14%3A33%3A01.420Z",
    },
    {
      id: 6,
      title: "cake 6",
      description: "cake 6 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 7,
      title: "cake 7",
      description: "cake 7 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
  ]);

  return {
    featuredList,
  };
});
