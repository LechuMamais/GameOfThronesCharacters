import './Character.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Character = ()=> {
    
    const [character, setCharacter] = useState();
    const [loading, setLoading] = useState(true);
    let { id } = useParams();

            
    useEffect(() => {
        fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            
            return response.json();
          })
          .then(data => {
            setCharacter(data);
            setLoading(false);
            console.log(data);
          })
          .catch(error => {
            console.error('Error fetching data: ', error);
          });
      }, []);


    return(
        <>
        {loading ? (
          <div className='loading'>
              <img src='/assets/loading_tyrion.gif' alt='Loading...'/>
          </div>
        ):(
           
            <div className='character'>
                <Link to={`/`} key={id}>
                    <button className='back-to-characters'>
                        <img src="../public/assets/arrow-return.png" alt="Back" />
                    </button>
                </Link>
                <img className='character-img' src={character.imageUrl} alt={character.name}/>
                <h1>{character.fullName}</h1>
                <h2>{character.title}</h2>
                <h3>{character.family}</h3>
            </div>
        )
      }
    </>
    )
    
}

export default Character