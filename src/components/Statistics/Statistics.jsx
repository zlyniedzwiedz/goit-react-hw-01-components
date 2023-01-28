import { StatisticsElement } from "./StatisticsElement";
import css from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ title, statistics }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statisticsList}>
        {statistics.map((statistic) => (
          <StatisticsElement key={statistic.id} statistics={statistic} />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.array.isRequired,
};
