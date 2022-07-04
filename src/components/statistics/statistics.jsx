import { StatisticsList } from 'components/statistics/statisticsList';
import CSS from 'components/statistics/statistics.module.css';

export const Statiistics = ({ title, stats }) => {
  return (
    <section className={CSS.statistics}>
      <h2 className={CSS.title}>{title}</h2>

      <ul className={CSS.stat_list}>
        {stats.map(({ label, percentage, id }) => (
          <StatisticsList key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};
