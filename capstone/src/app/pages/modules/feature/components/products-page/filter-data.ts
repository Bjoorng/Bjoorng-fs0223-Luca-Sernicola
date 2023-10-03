export const filters = [
  {
    id: 'genre',
    name: 'Genre',
    options: [
      { value: 'rock', label: 'Classic Rock' },
      { value: 'alternative rock', label: 'Alternative' },
      { value: 'garage rock', label: 'Garage Rock' },
      { value: 'progressive rock', label: 'Progressive' },
      { value: 'pop rock', label: 'Pop Rock' },
      { value: 'punk', label: 'Punk' },
      { value: 'glam rock', label: 'Glam' },
    ],
  },
];
export const singleFilter = [
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: '0-20', label: '0 to 10' },
      { value: '20-40', label: '20 to 40' },
      { value: '40-60', label: '40 to 60' },
      { value: '60-100', label: '60 to 100' },
      { value: '100-200', label: '100 to 200' },
    ],
  },
  {
    id: 'discount',
    name: 'Discount',
    options: [
      { value: '5', label: '5%' },
      { value: '10', label: '10%' },
      { value: '15', label: '15%' },
      { value: '20', label: '20%' },
      { value: '50', label: '50%' },
    ],
  },
  {
    id: 'available',
    name: 'Available',
    options: [
      { value: 'available', label: 'In Stock' },
      { value: 'soon', label: 'Available Soon' },
      { value: 'preorder', label: 'Preorder' },
    ],
  },
];
