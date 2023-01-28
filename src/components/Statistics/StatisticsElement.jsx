import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const StatisticsElement = ({ statistics }) => {
  return (
    <li className={css.item}>
      <span className={css.label}>{statistics.label}</span>
      <span className={css.percentage}>{statistics.percentage}%</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  stats: PropTypes.shape({
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
