import PropTypes from "prop-types";

export const TransactionsHistoryElement = ({ data }) => {
  return (
    <tr>
      <td>{data.type.toUpperCase()}</td>
      <td>{data.amount}</td>
      <td>{data.currency}</td>
    </tr>
  );
};

TransactionsHistoryElement.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
