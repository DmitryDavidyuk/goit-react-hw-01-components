import CSS from 'components/statistics/statistics.module.css';

export const StatisticsList = ({ label, percentage }) => {
  return (
    <li className={CSS.item}>
      <span className={CSS.label}>{label}</span>
      <span className={CSS.percentage}>{percentage}%</span>
    </li>
  );
};
