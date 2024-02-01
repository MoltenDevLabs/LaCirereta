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

  const categoryList = ref([
    {
      id: 1,
      title: "pastissos",
      description: "",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 2,
      title: "brownies",
      description: "",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 3,
      title: "cheesecakes",
      description: "",
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 4,
      title: "tematitzats",
      description: "",
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
  const browniesList = ref([
    {
      id: 201,
      title: "brownie fudge",
      description: "Aixo es un text de prova pel brownie fudge",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 202,
      title: "brownie de xocolata i dolç de llet",
      description:
        "Aixo es un text de prova pel brownie de xocolata i dolç de llet",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 203,
      title: "brownie d'oreo",
      description: "Aixo es un text de prova pel brownie d'Oreo",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 204,
      title: "brownie de pera i nutella",
      description: "Aixo es un text de prova pel brownie de pera i nutella",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 205,
      title: "brownie de moka",
      description: "Aixo es un text de prova pel brownie de moka",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 206,
      title: "brownie de fruits vermells",
      description: "Aixo es un text de prova pel brownie de fruits vermells",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 207,
      title: "blondie",
      description: "Aixo es un text de prova pel blondie",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 208,
      title: "blondie de poma i caramel",
      description: "Aixo es un text de prova pel blondie de poma i caramel",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
    {
      id: 209,
      title: "brownie cheesecake",
      description: "Aixo es un text de prova pel brownie cheesecake",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
  ]);
  const cheesecakesList = ref([
    {
      id: 301,
      title: "cheesecake de prova",
      description: "Aixo es un text de prova pel cheesecake",
      price: {
        Petit: 53.2,
        Mitjà: 87.1,
        Gran: 153.2,
      },
      img: "https://lophahzsxonguopnjuyr.supabase.co/storage/v1/object/public/selecta-cakes/sample.jpg?t=2023-11-06T21%3A49%3A51.835Z",
    },
  ]);
  const tematitzatsList = ref([
    {
      id: 401,
      title: "pastis tematitzat de prova",
      description: "Aixo es un text de prova pel pastis tematitzat",
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
    categoryList,
    pastissosList,
    browniesList,
    cheesecakesList,
    tematitzatsList,
  };
});
