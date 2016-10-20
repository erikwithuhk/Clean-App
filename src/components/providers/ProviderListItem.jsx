import React, { Component } from 'react';
import { Link } from 'react-router';

const propTypes = {
  providerID: React.PropTypes.number,
  providerName: React.PropTypes.string,
  prices: React.PropTypes.object,
  availability: React.PropTypes.object,
  selectedServices: React.PropTypes.object,
  setProviderTimeAndPrice: React.PropTypes.func,
};

class ProviderListItem extends Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }
  sumPrices() {
    return 10800;
    // TODO actually sum the price
  }
  handleSelect() {
    const provider = {
      id: this.props.providerID,
      name: this.props.providerName,
    };
    const selection = {
      selectedProvider: provider,
      selectedTime: this.props.availability,
      totalPrice: 10800,
    };
    this.props.setProviderTimeAndPrice(selection);
  }
  render() {
    const totalPrice = this.sumPrices();
    return (
      <Link to={`/providers/${this.props.providerID}`} onClick={this.handleSelect}>
        <h3>{this.props.providerName}</h3>
        <p>{`${this.props.availability.start}—${this.props.availability.start}`}</p>
        <p>Price: ${totalPrice}</p>
      </Link>
    );
  }
}

ProviderListItem.propTypes = propTypes;

export default ProviderListItem;