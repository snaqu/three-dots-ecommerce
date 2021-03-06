import { Collection, collections } from 'mock/collections';
import { ProductProperty, productProperties } from 'mock/productProperties';
import { Product, products } from 'mock/products';
import create from 'zustand';

interface State {
  products: Product[];
  collections: Collection[];
  productProperties: ProductProperty[];
  removeProduct: (key: string) => void;
  addProduct: (product: Product) => void;
  editProduct: (product: Product) => void;
  removeProductProperty: (key: string) => void;
  addProductProperty: (product: ProductProperty) => void;
  editProductProperty: (product: ProductProperty) => void;
}

const useStore = create<State>(set => ({
  products: products,
  collections: collections,
  productProperties: productProperties,
  removeProduct: key =>
    set(state => ({
      products: state.products.filter(item => item.key !== key),
    })),
  addProduct: product =>
    set(state => ({
      products: [...state.products, product],
    })),
  editProduct: product =>
    set(state => ({
      products: state.products.map(item => {
        if (item.key === product.key) {
          return product;
        }

        return item;
      }),
    })),
  removeProductProperty: key =>
    set(state => ({
      productProperties: state.productProperties.filter(item => item.key !== key),
    })),
  addProductProperty: productProperty =>
    set(state => ({
      productProperties: [...state.productProperties, productProperty],
    })),
  editProductProperty: productProperty =>
    set(state => ({
      productProperties: state.productProperties.map(item => {
        if (item.key === productProperty.key) {
          return productProperty;
        }

        return item;
      }),
    })),
}));

export { useStore };
