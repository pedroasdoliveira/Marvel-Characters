import './style.css'

interface cardProps {
  character: {
    identity: string;
    image: string;
    name: string;
    reality: string;
    id: string;
    userName: string;
    avatar: string;
    userId: string;
  }
} 

const Card = ({character}: cardProps) => {
  return (
    <div className="card">
      <img className="character-image" src={character.image} alt="" />
      <div>
        <h2>{character.name}</h2>
        <p>{character.reality}</p>
        <p>{character.identity}</p>
        <span className="user-card">By: {character.userName}</span>
      </div>
    </div>
  );
};

export default Card;
