import { useEffect, useState } from 'react';
import CharactersCard from '../CharactersCard/CharactersCard';
import './Characters.css';
import { Link } from 'react-router-dom';



const Characters =()=> {

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCharacters(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  console.log(characters);

  return (
    <main>
      {loading ? (
          <div className='loading'>
              <img src='/assets/loading_tyrion.gif' alt='Loading...'/>
          </div>
        ):(
          <div className='characters-list'>
              {characters.map(character => (
                <Link to={`/characters/${character.id}`} key={character.id}>
                    <CharactersCard key={character.id} name={character.fullName} image={character.imageUrl}/>
                </Link >
              ))}
          </div>
        )
      }
    </main>
  )
}

export default Characters
