export const CompetenceCard = ({ title, description, level, onDelete }) => {
    return (
      <div className="mincard">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Уровень знания: {level}%</p>
        <button onClick={onDelete}>Удалить</button>
      </div>
    );
  };