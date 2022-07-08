import PropTypes from 'prop-types';
import {
  Statistics,
  Title,
  StatList,
  Percentage,
  ItemList,
} from 'components/statistics/statistics.styled';

export const StatiisticsList = ({ title, stats }) => {
  return (
    <Statistics>
      <Title>{title}</Title>

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <ItemList key={id} percentage={percentage} label={label}>
            <span className="label">{label}</span>
            <Percentage>{percentage}%</Percentage>
          </ItemList>
        ))}
      </StatList>
    </Statistics>
  );
};

StatiisticsList.prototype = {
  percentage: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
