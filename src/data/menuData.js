export const MENU_CATEGORIES = [
  {
    id: 'mandi',
    name: 'Mandi',
    description: 'Traditional slow-cooked rice dishes',
  },
  {
    id: 'grills',
    name: 'Grills',
    description: 'Charcoal-grilled specialties',
  },
  {
    id: 'appetizers',
    name: 'Appetizers',
    description: 'Start your culinary journey',
  },
  {
    id: 'beverages',
    name: 'Beverages',
    description: 'Refreshing drinks and traditional blends',
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet Arabian delicacies',
  },
];

export const MENU_ITEMS = {
  mandi: [
    {
      id: 'mandi-1',
      name: 'Royal Lamb Mandi',
      description: 'Tender lamb slow-cooked for 8 hours with fragrant basmati rice, aromatic spices, and traditional Yemeni seasoning',
      price: '₹1,299',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Mint Lemonade',
        description: 'Complements the rich spices',
      },
    },
    {
      id: 'mandi-2',
      name: 'Chicken Mandi Platter',
      description: 'Whole chicken marinated in traditional spices, served with saffron-infused rice and special mandi sauce',
      price: '₹899',
      image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Fresh Laban',
        description: 'Traditional yogurt drink',
      },
    },
    {
      id: 'mandi-3',
      name: 'Seafood Mandi Special',
      description: 'Fresh prawns and hammour fish with saffron rice, topped with crispy onions and cashews',
      price: '₹1,699',
      image: 'https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=800&q=80',
      dietary: [],
      beveragePairing: {
        name: 'Pomegranate Juice',
        description: 'Fresh and tangy',
      },
    },
    {
      id: 'mandi-4',
      name: 'Mutton Kabsa',
      description: 'Premium mutton pieces cooked with kabsa spices, long-grain rice, tomatoes, and bay leaves',
      price: '₹1,399',
      image: 'https://images.unsplash.com/photo-1596040033229-a0b531e3d6fc?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Arabic Coffee',
        description: 'Traditional and aromatic',
      },
    },
  ],
  grills: [
    {
      id: 'grill-1',
      name: 'Mixed Grill Supreme',
      description: 'Assorted lamb chops, chicken tikka, seekh kebab, and prawns grilled to perfection',
      price: '₹1,499',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Jallab',
        description: 'Date and grape molasses drink',
      },
    },
    {
      id: 'grill-2',
      name: 'Lamb Chops',
      description: 'Four premium lamb chops marinated in Arabic spices, charcoal-grilled and served with grilled vegetables',
      price: '₹1,199',
      image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Red Grape Juice',
        description: 'Rich and full-bodied',
      },
    },
    {
      id: 'grill-3',
      name: 'Chicken Shish Tawook',
      description: 'Tender chicken cubes marinated in garlic, lemon, and yogurt, grilled on skewers',
      price: '₹799',
      image: 'https://images.unsplash.com/photo-1633964913295-ceb43826969b?w=800&q=80',
      dietary: [],
      beveragePairing: {
        name: 'Mint Lemonade',
        description: 'Light and refreshing',
      },
    },
  ],
  appetizers: [
    {
      id: 'app-1',
      name: 'Mezze Platter',
      description: 'Assorted dips including hummus, baba ganoush, moutabal, labneh, and muhammara with warm pita',
      price: '₹699',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Fresh Laban',
        description: 'Creamy and tangy',
      },
    },
    {
      id: 'app-2',
      name: 'Falafel Plate',
      description: 'Crispy chickpea fritters served with tahini sauce, pickles, and fresh vegetables',
      price: '₹449',
      image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Mint Tea',
        description: 'Traditional and aromatic',
      },
    },
    {
      id: 'app-3',
      name: 'Kibbeh',
      description: 'Deep-fried bulgur shells stuffed with spiced minced lamb, pine nuts, and onions',
      price: '₹599',
      image: 'https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=800&q=80',
      dietary: ['spicy'],
      beveragePairing: {
        name: 'Tamarind Juice',
        description: 'Sweet and sour',
      },
    },
    {
      id: 'app-4',
      name: 'Arabic Salad',
      description: 'Fresh tomatoes, cucumbers, lettuce, and radish with lemon-olive oil dressing',
      price: '₹349',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Fresh Juice',
        description: 'Your choice',
      },
    },
  ],
  beverages: [
    {
      id: 'bev-1',
      name: 'Fresh Laban',
      description: 'Traditional Arabian yogurt drink with a hint of mint',
      price: '₹149',
      image: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=800&q=80',
      dietary: ['vegetarian'],
    },
    {
      id: 'bev-2',
      name: 'Mint Lemonade',
      description: 'Freshly squeezed lemon with crushed mint leaves and a touch of honey',
      price: '₹179',
      image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f6d?w=800&q=80',
      dietary: ['vegetarian'],
    },
    {
      id: 'bev-3',
      name: 'Arabic Coffee (Gahwa)',
      description: 'Traditional cardamom-infused coffee served with dates',
      price: '₹199',
      image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80',
      dietary: ['vegetarian'],
    },
    {
      id: 'bev-4',
      name: 'Jallab',
      description: 'Date and grape molasses with rose water, pine nuts, and raisins',
      price: '₹229',
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80',
      dietary: ['vegetarian'],
    },
  ],
  desserts: [
    {
      id: 'des-1',
      name: 'Kunafa',
      description: 'Crispy kataifi pastry filled with sweet cheese, soaked in sugar syrup, topped with pistachios',
      price: '₹399',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Arabic Coffee',
        description: 'Perfect pairing',
      },
    },
    {
      id: 'des-2',
      name: 'Baklava Assortment',
      description: 'Six pieces of assorted baklava with walnuts, pistachios, and cashews',
      price: '₹499',
      image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Mint Tea',
        description: 'Balances the sweetness',
      },
    },
    {
      id: 'des-3',
      name: 'Umm Ali',
      description: 'Traditional bread pudding with milk, cream, nuts, and coconut',
      price: '₹349',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
      dietary: ['vegetarian'],
      beveragePairing: {
        name: 'Saffron Milk',
        description: 'Warm and comforting',
      },
    },
  ],
};

export const DIETARY_INFO = {
  vegetarian: {
    icon: '🌱',
    label: 'Vegetarian',
    color: 'text-green-400',
  },
  spicy: {
    icon: '🌶️',
    label: 'Spicy',
    color: 'text-red-400',
  },
  'gluten-free': {
    icon: '🌾',
    label: 'Gluten Free',
    color: 'text-yellow-400',
  },
};
