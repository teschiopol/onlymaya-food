export const usePlaces = () => {
  return useState('places', () => {
    const data = [
      {
        id: 1,
        name: 'Antica Osteria Romana',
        photo: 'https://www.anticaosteriaromana.it/wp-content/uploads/2024/01/logo-1.jpg',
        city: 'Santa Giustina In Colle, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 7.5,
          location: 4,
          service: 5.5,
          food: 8,
        },
        link: 'https://www.anticaosteriaromana.it/',
        when: 'dinner',
      },
      {
        id: 2,
        name: 'Boccon Divino',
        photo: 'https://www.bocondivino.com/wp-content/uploads/2020/10/logo-1.png',
        photoBlack: true,
        city: 'Camposampiero, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 7,
          service: 8,
          food: 7,
        },
        link: 'https://www.bocondivino.com/',
        when: 'dinner',
      },
    ];

    data.forEach((el) => {
      el.total = Math.round((((el.votes.food + el.votes.service + el.votes.price + el.votes.location) * 100 / 40) + Number.EPSILON) * 100) / 100;
    });

    return data;
  });
};
