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
      {
        id: 3,
        name: 'OH MY GOD!',
        photo: 'https://ohmygodpadova.it/wp-content/uploads/2023/08/Logo-Oh-My-God-2023.png',
        city: 'Padova, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 5,
          location: 7.5,
          service: 5,
          food: 7,
        },
        link: 'https://ohmygodpadova.it/',
        when: 'dinner',
      },
      {
        id: 4,
        name: 'Shanghai Naturalmente',
        photo: 'https://www.shanghaipd.it/wp-content/uploads/2016/01/Logo_naturalmente.png',
        city: 'Padova, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 8,
          location: 8,
          service: 8,
          food: 6.5,
        },
        link: 'https://www.shanghaipd.it/',
        when: 'dinner',
      },
      {
        id: 5,
        name: 'Trattoria da Rocco',
        photo: 'https://www.daroccotrattoria.com/wp-content/uploads/2022/04/cropped-logo-rocco-2.png',
        city: 'Mercato di Sant’Ambrogio, FI',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 7,
          service: 6,
          food: 8,
        },
        link: 'https://www.daroccotrattoria.com/',
        when: 'lunch',
      },
      {
        id: 6,
        name: 'Trattoria Marione',
        photo: 'https://www.trattoriamarione.it/wp-content/uploads/2022/09/marione_white.png',
        photoBlack: true,
        city: 'Firenze, FI',
        flag: 'it',
        total: 0,
        votes: {
          price: 5,
          location: 7,
          service: 1,
          food: 8,
        },
        link: 'https://www.trattoriamarione.it/trattoria-marione/',
        when: 'dinner',
      },
      {
        id: 7,
        name: 'Osteria del Tegolaio',
        photo: '/placeholder.png',
        city: 'Firenze, FI',
        flag: 'it',
        total: 0,
        votes: {
          price: 4,
          location: 7,
          service: 8,
          food: 8,
        },
        link: 'https://www.osteriadeltegolaiofirenzegmail.com/',
        when: 'lunch',
      },
      {
        id: 8,
        name: 'Trattoria da Ezio',
        photo: 'https://trattoriadaezio.it/wp-content/uploads/2022/04/TDE_logoweb-1024x387.png',
        city: 'Teolo, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 8.5,
          service: 7,
          food: 7,
        },
        link: 'https://trattoriadaezio.it/',
        when: 'lunch',
      },
      {
        id: 9,
        name: 'Yokelz - Plan B Pub',
        photo: '/placeholder.png',
        city: 'Trebaseleghe, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 7.5,
          location: 8,
          service: 6,
          food: 8,
        },
        link: 'https://www.facebook.com/yokelzinc/',
        when: 'dinner',
      },
      {
        id: 10,
        name: 'Hereford Steak',
        photo: 'https://herefordsteak.dk/wp-content/uploads/2019/10/hereford-logo.png',
        city: 'Copenhagen, Denmark',
        flag: 'dk',
        total: 0,
        votes: {
          price: 7,
          location: 8,
          service: 6,
          food: 8,
        },
        link: 'https://herefordsteak.dk/',
        when: 'lunch',
      },
      {
        id: 11,
        name: 'American Restaurant & Diner',
        photo: 'https://images.squarespace-cdn.com/content/v1/64ece16e2fe71d4b73df6589/3243c8ec-87c2-46d7-abe9-2e36ca6a9cde/The+American_Logo_2020_HVID.png?format=1500w',
        photoBlack: true,
        city: 'Copenhagen, Denmark',
        flag: 'dk',
        total: 0,
        votes: {
          price: 4,
          location: 8,
          service: 8,
          food: 7,
        },
        link: 'https://www.theamericanfields.dk/',
        when: 'dinner',
      },
      {
        id: 12,
        name: 'Spill',
        photo: '/placeholder.png',
        city: 'Malmö, Sweden',
        flag: 'se',
        total: 0,
        votes: {
          price: 10,
          location: 8,
          service: 8,
          food: 8,
        },
        link: 'https://www.restaurangspill.se/',
        when: 'lunch',
      },
      {
        id: 13,
        name: 'Restaurant Mamas',
        photo: '/placeholder.png',
        city: 'Billund, Denmark',
        flag: 'dk',
        total: 0,
        votes: {
          price: 7,
          location: 4,
          service: 5,
          food: 6,
        },
        link: 'https://www.mamas-pizza.dk/',
        when: 'lunch',
      },
      {
        id: 14,
        name: 'Osteria Nonna Pina',
        photo: 'https://www.osterianonnapina.it/wp-content/uploads/2020/02/nonna-pina-logo-bianco.png',
        photoBlack: true,
        city: 'Noventa Padovana, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 8,
          location: 8,
          service: 8,
          food: 8,
        },
        link: 'https://www.osterianonnapina.it/',
        when: 'dinner',
      },
      {
        id: 15,
        name: 'Storie D\'Amore',
        photo: 'https://www.storiedamorerestaurant.it/images/Layout/storie-d-amore-logo.png',
        city: 'Borgoricco, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 8,
          location: 8,
          service: 9,
          food: 9,
        },
        link: 'https://www.storiedamorerestaurant.it/',
        when: 'dinner',
      },
      {
        id: 16,
        name: 'Hamerica\'s',
        photo: 'https://www.hamericas.com/images/hamericas-logo-white.svg',
        photoBlack: true,
        city: 'Padova, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 6,
          service: 6,
          food: 7,
        },
        link: 'https://www.hamericas.com/it/',
        when: 'dinner',
      },
      {
        id: 17,
        name: 'Luca\'S',
        photo: 'https://ristorantelucas.com/gallery_gen/d17c53d606fb6c6ac66eec1333b5c042_648x560_fit.png?ts=1703960294',
        city: 'Trebaseleghe, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 8,
          service: 8,
          food: 7,
        },
        link: 'https://ristorantelucas.com/',
        when: 'dinner',
      },
      {
        id: 18,
        name: 'Renato Bosco Pizzeria',
        photo: 'https://www.boscorenato.it/wp-content/uploads/2021/11/RenatoBosco-logo-bianco.png',
        photoBlack: true,
        city: 'San Martino Buon Albergo, VR',
        flag: 'it',
        total: 0,
        votes: {
          price: 8,
          location: 8,
          service: 9,
          food: 10,
        },
        link: 'https://www.boscorenato.it/',
        when: 'dinner',
      },
      {
        id: 19,
        name: 'Ama tigelleria',
        photo: 'https://www.ilsitodiama.it/wp-content/uploads/2018/11/logo_footer300.png',
        city: 'Mejaniga, PD',
        flag: 'it',
        total: 0,
        votes: {
          price: 8,
          location: 7,
          service: 4,
          food: 8,
        },
        link: 'https://www.ilsitodiama.it/',
        when: 'dinner',
      },
      {
        id: 20,
        name: 'Pizzeria Ristorante Stella d\'Oro',
        photo: '/placeholder.png',
        city: 'Asiago, VI',
        flag: 'it',
        total: 0,
        votes: {
          price: 6,
          location: 5,
          service: 4,
          food: 8,
        },
        link: 'https://www.facebook.com/PizzeriaRistoranteStellaDoroAsiago',
        when: 'dinner',
      },
       {
        id: 21,
        name: 'U. Glaubicü',
        photo: 'https://uglaubicu.com/wp-content/uploads/2021/03/logo.png',
        city: 'Prague, Czech Republic',
        flag: 'cz',
        total: 0,
        votes: {
          price: 7,
          location: 8,
          service: 5,
          food: 8,
        },
        link: 'https://uglaubicu.com',
        when: 'lunch',
      }
    ];

    data.forEach((el) => {
      el.total = Math.round((((el.votes.food + el.votes.service + el.votes.price + el.votes.location) * 100 / 40) + Number.EPSILON) * 10) / 10;
    });

    return data.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  });
};
