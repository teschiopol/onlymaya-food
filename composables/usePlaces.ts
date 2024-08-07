export const usePlaces = () => {
  return useState('places', () => [
    {
      id: 1,
      name: 'Antica Osteria Romana',
      photo: 'https://www.anticaosteriaromana.it/wp-content/uploads/2024/01/logo-1.jpg',
      city: 'Santa Giustina In Colle, PD',
      flag: 'it',
      total: 62.5,
      votes: {
        price: 7.5,
        location: 4,
        service: 5.5,
        food: 8,
      },
      link: 'https://www.anticaosteriaromana.it/',
      when: 'dinner'
    },
  ]);
};
