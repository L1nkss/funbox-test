import React from 'react';
import './style/style.scss';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      isEnter: false,
    };

    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  getFooterDescription() {
    const { isAvailable, isSelected } = this.props.data;
    const { handleCardClick } = this.props;
    if (isSelected) {
      return <p className="product__description">{this.props.data.description}</p>;
    }

    if (!isAvailable) {
      return <p className="product__description product__description--over">{this.props.data.over}</p>;
    }

    return (
      <p className="product__description">
        Чего сидишь? Порадуй котэ,
        <button type="button" className="product__button" onClick={() => handleCardClick(this.props.data.id)}>купи</button>
      </p>
    );
  }

  getProductClass() {
    const { isAvailable, isSelected } = this.props.data;
    const { isHover, isEnter } = this.state;
    let productClass = 'product';
    if (!isAvailable) {
      productClass += ' product--disabled';
    }

    if (isSelected) {
      productClass += ' product--selected';
    }

    if (isEnter && isHover) {
      productClass += ' product--hover';
    }

    return productClass;
  }

  handleMouseLeave() {
    this.setState({ isHover: true, isEnter: false });
  }

  handleMouseEnter() {
    this.setState(({ isEnter: true }));
  }

  render() {
    const { isSelected } = this.props.data;
    const { isHover, isEnter } = this.state;
    return (
      <li className={this.getProductClass()} onMouseLeave={this.handleMouseLeave} onMouseEnter={this.handleMouseEnter}>
        <div className="product__body" onClick={() => this.props.handleCardClick(this.props.data.id)} tabIndex={0} role="article">
          <div className="product__header">
            <span className="product__title">{isHover && isEnter && isSelected ? 'Котэ не одобряет?' : 'Сказочное заморское яство'}</span>
            <h2 className="product__name">Нямушка</h2>
            <h3 className="product__flavor">{this.props.data.taste}</h3>
          </div>
          <ul className="product__bonus">
            {this.props.data.bonuses.map((bonus) => {
              return <li key={bonus}>{bonus}</li>;
            })}
          </ul>
          <div className="product__weight">
            <span className="product__weight-number">{this.props.data.weight}</span>
            <span className="product__weight-unit">кг</span>
          </div>
        </div>
        {this.getFooterDescription()}
      </li>
    );
  }
}
