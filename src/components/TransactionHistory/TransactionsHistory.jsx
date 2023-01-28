import css from "./TransactionsHistory.module.css";
import { TransactionsHistoryElement } from "./TransactionsHistoryElement.jsx";
import PropTypes from "prop-types";

export const TransactionsHistory = ({ data }) => {
  return (
    <table className={css.transactionsHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <TransactionsHistoryElement key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  data: PropTypes.array.isRequired,
};
