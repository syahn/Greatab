import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';

import bankStore from '../.././stores/bankStore';
import constants from '../../constants';
import bankActionCreators from '../.././actions/BankActionCreator';

class BankApp extends Component {
  handleDeposit() {
    this.props.onDeposit(this.refs.amount.value);
    this.refs.amount.value = '';
  }

  handleWithdraw() {
    this.props.onWithdraw(this.refs.amount.value);
    this.props.amount.value = '';
  }

  render() {
    return(
      <div>
        <header>
          <img src="//www.pro-react.com/logos/redux-bank.svg" width="150" />
          Redux Bank
        </header>
        <h1> Your balance is ${(this.props.balance).toFixed(2)}</h1>
        <div className="atm">
          <input
            type="text"
            placeholder="Enter Ammount"
            ref="amount" />
          <button onClick={this.handleWithdraw.bind(this)}>Withdraw</button>
          <button onClick={this.handleDeposit.bind(this)}>Deposit</button>
        </div>

        <div className="exchange" onClick={this.props.onToggle}>
          <strong>Exchange Rates:</strong>
          <div className={this.props.showExchange? 'exchange--visible' : 'exchange--closed'}>
            <strong>$1 USD = </strong>
            <span className="rate">0.9990 EUR</span>
            <span className="rate">0.7989 GBP</span>
            <span className="rate">710.15 JPY</span>

          </div>
        </div>

      </div>
    );
  }
}


// Generate a container app by Mapping state and dispatch to props
const mapStateToProps = (state) => {
  return {
    showExchange: state.ui.showExchange,
    balance: state.balance
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeposit: (amount) => dispatch(bankActionCreators.depositIntoAccount(amount)),
    onWithdraw: (amount) => dispatch(bankActionCreators.withdrawFromAccount(amount)),
    onToggle: () => dispatch(bankActionCreators.toggleExchange()),
  }
}

const BankAppContainer = connect(mapStateToProps, mapDispatchToProps)(BankApp)


const propTypes = {
  balance: PropTypes.number,
  showExchange: PropTypes.bool,
  onDeposit: PropTypes.func,
  onWithdraw: PropTypes.func,
  onToggle: PropTypes.func,
};

BankApp.propTypes = propTypes;

export default BankAppContainer;
