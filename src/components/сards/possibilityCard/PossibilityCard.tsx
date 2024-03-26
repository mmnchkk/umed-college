import "./PossibilityCard.css";

const PossibilityCard = ({ possibility }: any) => {
  return (
    <div className="possibility-card">
      <p>{possibility.text}</p>
      <img src={possibility.img} alt="" />
    </div>
  );
};

export default PossibilityCard;
