/**
 * Model for a Product, just defines lightweight the shape of data.
 */

interface Product {
  id: number;
  displayName: string;
  categoryId: number;
  categoryName: string;
  name: string;
  price: number;
  currency: string;
  displayCurrency: string;
}

export default Product;
