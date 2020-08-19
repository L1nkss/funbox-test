const Products = [
  {
    id: 1,
    taste: 'с фуа-гра',
    bonuses: [
      '10 порций',
      'мышь в подарок',
    ],
    description: 'Печень утки разварная с артишоками.',
    weight: '0,5',
    over: 'Печалька, с фуа-гра закончился.',
    isAvailable: true,
    isSelected: false,
  },
  {
    id: 2,
    taste: 'с рыбой',
    bonuses: [
      '40 порций',
      '2 мыши в подарок',
    ],
    description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    weight: '2',
    over: 'Печалька, с рыбой закончился.',
    isAvailable: true,
    isSelected: true,
  },
  {
    id: 3,
    taste: 'с курой',
    bonuses: [
      '100 порций',
      '5 мышей в подарок',
      'заказчик доволен',
    ],
    description: 'Филе из цыплят с трюфелями в бульоне.',
    weight: '5',
    over: 'Печалька, с курой закончился.',
    isAvailable: false,
    isSelected: false,
  },
];

export default Products;
