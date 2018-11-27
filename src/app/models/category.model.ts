/**
 * Model for a Category, just defines lightweight the shape of data.
 */
// https://github.com/atroppmann/shoppu/blob/f21688604fb41b54c87e2ca551621d81a36384b9/app/javascript/packs/models/record.model.ts
interface Category {
  id: number;
  displayName: string;
  name: string;
  productsCount: number;
  parentId: number;
  parentName: string;
}

export default Category;
