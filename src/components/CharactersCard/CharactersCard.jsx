import './CharactersCard.css';

const CharactersCard = ({ key, name, image }) =>{
      return (
        <div className='character-card' key={key}>
            <div className='character-card-name-container'>
                <h2>{name}</h2>
            </div>
            <div className='character-card-img-container'>
                <img src={image} alt={name}  />
            </div>
        </div>
    )
}

export default CharactersCard;