import './App.css'
import Cards from './componentes/Cards/Cards';
import NavBar from './componentes/Nav/Nav';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './componentes/About/About';
import Detail from './componentes/Detail';
import Forms from './componentes/Forms';
import Favorites from './componentes/Favorites/Favorites';


function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const example = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  const [characters, setCharacters] = useState([]);

  const [access, setAccess] = useState(false);

  const login = async (userData) => {

    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`)
      const { access } = data;
      setAccess(data);
      access && navigate('/home');

    } catch (error) {
      console.log(error.message);
    }
  };


  useEffect(() => {
    !access && navigate('/');
  }, [access]);




  const onSearch = async (id) => {

    try {
      const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)

      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      }
    } catch (error) {
      alert('¡No hay personajes con este ID!');
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id)
      })
    )
  };
  return (
    <div>
      {pathname !== '/' && <NavBar onSearch={onSearch} />}

      <Routes>
        <Route path='/' element={<Forms login={login} />} />

        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />

        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />

        <Route path='/favorites' element={<Favorites />} />
      </Routes>



    </div>
  )
};

export default App;



