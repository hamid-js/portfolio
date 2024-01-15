import PropTypes from 'prop-types';

export default function SkillItem({
  title = 'skill',
  className = ' ',
  percentage = '100',
}) {
  return (
    <div>
      <span className="font-serif capitalize ">{title}</span>
      <div className="mb-2 flex items-center  justify-start gap-4">
        <div className="my-2 h-2 w-5/6 overflow-hidden  border">
          <div
            className={`w-5/5 h-full bg-[var(--secondary-color-500)] transition-all ${className}`}
          ></div>
        </div>
        {<div>{percentage}%</div>}
      </div>
    </div>
  );
}
SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
};

SkillItem.defaultProps = {
  title: 'skill',
  className: ' ',
  percentage: '100',
};
