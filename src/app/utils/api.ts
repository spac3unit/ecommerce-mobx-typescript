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

export async function brandsFindOne(id) {
  console.log(id);
  let brand;
  await fetch(`http://localhost:1337/brands/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      brand = data;
    })
    .catch((error) => console.error('Error in brandsFindOne:', error));
  return brand;
}
export async function categoriesFindOne(id) {
  let category;
  await fetch(`http://localhost:1337/categories/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      category = data;
    })
    .catch((error) => console.error('Error:', error));
  return category;
}

export async function getProductsByCategory(categoryName) {
  return new Promise((resolve) => {
    fetch(`http://localhost:1337/products?category_rel=${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return resolve(data);
      })
      .catch((error) => console.error('Error:', error));
  });
}

// export async function getProductById(productId) {
//   let product = {};
//   await fetch(urls.PRODUCT_GET_BY_ID_URL + productId)
//     .then((res) => res.json())
//     .catch((error) => console.error('Error:', error))
//     .then((response) => {
//       product = response;
//       console.log(product);
//     });
//   return product;
// }
export const getProductById = (id): Promise<{}> => {
  return new Promise((resolve) => {
    return fetch(urls.PRODUCT_GET_BY_ID_URL + id)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => {
        console.log('An error occurred:', error);
      });
  });
};
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

export async function getBrandsList() {
  let brands = [];
  await fetch(urls.BRANDS_URL)
    .then((res) => res.json())
    .then((response) => {
      brands = response;
    })
    .catch((error) => console.error('Error:', error));

  return brands;
}
