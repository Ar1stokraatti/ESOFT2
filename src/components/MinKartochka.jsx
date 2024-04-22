export const MinCard = (props) => {
    return (
      <div className="mincard">
        <img src={props.src} alt={props.alt} />
        <h2>{props.name}</h2>
        <p>{props.text}</p>
      </div>
    );
  };