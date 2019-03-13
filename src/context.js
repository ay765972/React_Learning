import React, {Component} from 'react';
import {storeProducts, detailProduct} from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {
        ...item
      };
      tempProducts = [
        ...tempProducts,
        singleItem
      ];
    })
    this.setState(() => {
      return {products: tempProducts}
    })
  }
  handledetails = () => {
    console.log("hello from handle");
  }
  addTocart = () => {
    console.log("hello from cart");
  }
  render() {
    return (
      <ProductContext.Provider
        value={{
        ...this.state,
        handledetails: this.handledetails,
        addTocart: this.addTocart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export {ProductConsumer, ProductProvider};
