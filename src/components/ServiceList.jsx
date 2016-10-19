import React, { Component } from 'react';
import { Link } from 'react-router';
import Service from './Service.jsx';

const propTypes = {
  servicesSelected: React.PropTypes.object,
  handleIncreaseCount: React.PropTypes.func,
  handleDecreaseCount: React.PropTypes.func,
};


class Services extends Component {
  constructor() {
    super();
    this.state = {
      airCondition1: 0,
      airCondition2: 0,
      rangeHood: 0,
      bathroom: 0,
      toilet: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }
  increaseCount(serviceName) {
    Object.keys(this.state).forEach((stateKey) => {
      if (stateKey === serviceName) {
        const currentValue = this.state[stateKey];
        const nextValue = currentValue + 1;
        const newState = {};
        newState[stateKey] = nextValue;
        this.setState(newState);
      }
    });
  }
  decreaseCount(serviceName) {
    Object.keys(this.state).forEach((stateKey) => {
      if (stateKey === serviceName) {
        const currentValue = this.state[stateKey];
        if (currentValue > 0) {
          const nextValue = currentValue - 1;
          const newState = {};
          newState[stateKey] = nextValue;
          this.setState(newState);
        }
      }
    });
  }
  handleSelections () {
    this.props.setSelectedOfferings(this.state);
  }
  render() {
    return (
      <div className="service-list-container">
        <p className="service-list-header">Select desired cleaning services</p>
        <Service
          serviceType="airCondition1"
          count={this.props.servicesSelected.airCondition1}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="airCondition2"
          count={this.props.servicesSelected.airCondition2}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="rangeHood"
          count={this.props.servicesSelected.rangeHood}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="bathroom"
          count={this.props.servicesSelected.bathroom}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Service
          serviceType="toilet"
          count={this.props.servicesSelected.toilet}
          handleIncreaseCount={this.props.handleIncreaseCount}
          handleDecreaseCount={this.props.handleDecreaseCount}
        />
        <Link onClick={this.handleSelections} className="service-bottom-button" to="/">Next</Link>
      </div>
    );
  }
}

Services.propTypes = propTypes;

export default Services;
