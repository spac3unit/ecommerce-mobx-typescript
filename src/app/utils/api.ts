// import qs from 'qs';
import * as urls from 'app/constants/urls';
export async function getProductsList() {
  let products = [];
  await fetch(urls.PRODUCTS_URL)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      products = response;
    });
  return products;
}

export async function getProductsByCategory(categoryName) {
  let products = [];
  await fetch(urls.PRODUCTS_BY_CATEGORY_URL + categoryName)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      products = response;
      console.log(products);
    });
  return products;
}

export async function getProductById(productId) {
  let product = {};
  await fetch(urls.PRODUCT_GET_BY_ID_URL + productId)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      product = response;
      console.log(product);
    });
  return product;
}

export async function getCategoriesList() {
  let categories = [];
  await fetch(urls.CATEGORIES_URL)
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => {
      categories = response;
    });
  return categories;
}
