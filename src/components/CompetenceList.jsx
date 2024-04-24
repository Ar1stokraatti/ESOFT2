export const CompetencesList = ({ competences, onDelete }) => {
    return (
      <div>
        {competences.map((competence, index) => (
          <CompetenceCard
            key={index}
            title={competence.title}
            description={competence.description}
            level={competence.level}
            onDelete={() => onDelete(index)}
          />
        ))}
      </div>
    );
  };