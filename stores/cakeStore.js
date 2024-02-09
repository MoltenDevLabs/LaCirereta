export const useCakeStore = defineStore("cakeStore", () => {
  const featuredList = ref([
    {
      id: 1,
      title: "cake 1",
      description: "cake 1 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 2,
      title: "cake 2",
      description: "cake 2 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 3,
      title: "cake 3",
      description: "cake 3 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 4,
      title: "cake 4",
      description: "cake 4 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 5,
      title: "cake 5",
      description: "cake 5 description",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
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

  const pastissosList = ref([
    {
      id: 101,
      title: "pastis de xocolata",
      description:
        "Aixo es una prova pel pastis de xocolata amb una mica mes de text per omplir. D'aquesta manera es pot veure com quedara un text una mica més llarg on s'expliqui una mica de que va aquest pastis, lo bó que és i perquè l'has de tastar.",
      price: {
        Petit: 10.5,
        Mitjà: 20.5,
        Gran: 30.5,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 102,
      title: "pastis de maduixes",
      description:
        "Aixo es una prova pel pastis de maduixes amb una mica mes de text per omplir. D'aquesta manera es pot veure com quedara un text una mica més llarg on s'expliqui una mica de que va aquest pastis, lo bó que és i perquè l'has de tastar.",
      price: {
        Petit: 12.5,
        Mitjà: 21.5,
        Gran: 93.5,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 103,
      title: "red velvet",
      description:
        "Deliciós pastís vermell, farcit de crema mascarpone. En tallar-lo et sorpendrà l'intens color vermell del coc, i la crema mascarpone li dona una cremositat inigualable.",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 104,
      title: "carrot cake",
      description:
        "Deliciós pastís de pastanaga, el classic pastís de pastanaga, amb la millor recepta que es pot trobar.",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
  ]);

  return {
    featuredList,
    pastissosList,
  };
});
