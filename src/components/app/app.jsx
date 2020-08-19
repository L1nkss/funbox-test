import React from 'react';
import Catalog from '../catalog/catalog';
import './style/style.scss';
import Products from '../../constants/constants';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: Products,
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(id) {
    // Находим элемент в стейте по ID
    const idx = this.state.products.findIndex((product) => product.id === id);
    // Создаем новый элемент, с изменёным ключом
    const newProduct = { ...this.state.products[idx], isSelected: !this.state.products[idx].isSelected };
    // Создаем новый массив
    const newStateProducts = [...this.state.products.slice(0, idx), newProduct, ...this.state.products.slice(idx + 1)];

    this.setState(() => {
      return {
        products: newStateProducts,
      };
    });
  }

  render() {
    return (
      <div className="app">
        <h4 className="app__header">Ты сегодня покормил кота?</h4>
        <Catalog products={this.state.products} handleCardClick={this.handleCardClick} />
      </div>
    );
  }
}
