import constants from '../constants';

const bankActionCreators = {
  depositIntoAccount(amount) {
    return {
      type: constants.DEPOSIT_INTO_ACCOUNT,
      amount: amount
    };
  },

  withdrawFromAccount(amount) {
    return {
      type: constants.WITHDRAW_FROM_ACCOUNT,
      amount: amount
    };
  },

  toggleInfo() {
    return {
      type: constants.TOGGLE_INFO
    };
  }
}


export default bankActionCreators;
