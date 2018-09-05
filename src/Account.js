import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawlClick = this.handleWithdrawlClick.bind(this)
  }
// DEPOSIT FUNCTION HERE 

  handleDepositClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance + amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

// WITHDRAWL FUNCTION HERE 
  handleWithdrawlClick(e) {
    e.preventDefault();
    if (isNaN(this.refs.amount.value)) {
      console.log("Not a number");
    }
    else {
      let amount = +this.refs.amount.value;
      let newBalance = this.state.balance - amount;
      this.setState({
        balance: newBalance
      })
      this.refs.amount.value = '';
    }
  }

// RENDERING HAPPENS HERE 
  render() {
    let balanceClass = 'balance';
    if (this.state.balance === 0) {
      balanceClass += ' zero';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <button type="button" value="Withdrawl" onClick={this.handleWithdrawlClick}>Withdrawl</button>
      </div>
    )
  }
}
