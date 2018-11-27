// // https://github.com/codempireio/shopApp/blob/32a617c9856136a41189311e43a5ae4953357cc7/src/features/stores/filterStore.ts

// import { observable, action } from 'mobx';
// import { findCategoryIndex } from '../shared';
// import { categoriesKeys } from '../filter/categoriesKeys';

// export default class ObservableStore implements IFilterStore {
//   constructor(public root: RootStore) {}

//   @observable categoriesFilter: Category[] = [];
//   @observable tab: string = '';

//   get listOfCategory() {
//     return this.categoriesFilter;
//   }

//   get filterTab() {
//     return this.tab;
//   }

//   @action
//   setFilterTab = (tab: string) => {
//     this.tab = tab;
//   };

//   @action
//   clearFilters = () => {
//     this.categoriesFilter = [];
//   };

//   @action
//   public addNewCategory = (category: string, subCutegory: string) => {
//     const categoryIndex: number = findCategoryIndex(
//       this.categoriesFilter,
//       category
//     );
//     if (this.categoriesFilter[categoryIndex]) {
//       const newCategoriesFilter: Category[] = [...this.categoriesFilter];
//       newCategoriesFilter[categoryIndex].subCategories.push(subCutegory);
//       this.categoriesFilter = [...newCategoriesFilter];
//     } else {
//       this.categoriesFilter = [
//         ...this.categoriesFilter,
//         { category, subCategories: [subCutegory] }
//       ];
//     }
//   };

//   @action
//   public removeCategory = (category: string, subCutegory: string) => {
//     const categoryIndex: number = findCategoryIndex(
//       this.categoriesFilter,
//       category
//     );
//     const subCategoryLength: number = this.categoriesFilter[categoryIndex]
//       .subCategories.length;
//     const newCategoriesFilter: Category[] = [...this.categoriesFilter];
//     if (subCategoryLength === 1) {
//       newCategoriesFilter.splice(categoryIndex, 1);
//     }
//     if (subCategoryLength > 1) {
//       const newSubcategiries: string[] = newCategoriesFilter[
//         categoryIndex
//       ].subCategories.filter(
//         (_subCutegory: string) => _subCutegory !== subCutegory
//       );
//       newCategoriesFilter[categoryIndex].subCategories = [...newSubcategiries];
//     }
//     this.categoriesFilter = [...newCategoriesFilter];
//   };

//   @action
//   public selectAllSubCategories = (category: string) => {
//     const categoryIndex: number = findCategoryIndex(
//       this.categoriesFilter,
//       category
//     );
//     const subCategories: string[] = categoriesKeys.find(
//       (_category: Category) => _category.category === category
//     ).subCategories;
//     if (this.categoriesFilter[categoryIndex]) {
//       const newCategoriesFilter: Category[] = [...this.categoriesFilter];
//       newCategoriesFilter[categoryIndex].subCategories = [...subCategories];
//       this.categoriesFilter = [...newCategoriesFilter];
//     } else {
//       this.categoriesFilter = [
//         ...this.categoriesFilter,
//         { category, subCategories: [...subCategories] }
//       ];
//     }
//   };
// }
