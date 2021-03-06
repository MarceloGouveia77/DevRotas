import React, { useEffect, useState } from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" 
            id="github_username" 
            required 
            onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" 
            id="techs" 
            required 
            onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input type="number"
               name="latitude"
               id="latitude" 
               required 
               value={latitude}
               onChange={e => setLatitude(e.target.value)}
               />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input type="number" 
              name="longitude" 
              id="longitude" 
              required 
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              />
            </div>

          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/11440712?s=460&v=4" alt="Marcelo Gouveia"/>
            <div className="user-info">
              <strong>Marcelo Gouveia</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
          </header>
          <p>Texto para teste só pra testar mesmo o container porque já são 4 da manhã e eu queria mesmo era estar dormindo na minhca cama quentinha</p>
          <a href="https://github.com/MarceloGouveia77">GitHub</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/11440712?s=460&v=4" alt="Marcelo Gouveia"/>
            <div className="user-info">
              <strong>Marcelo Gouveia</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
          </header>
          <p>Texto para teste só pra testar mesmo o container porque já são 4 da manhã e eu queria mesmo era estar dormindo na minhca cama quentinha</p>
          <a href="https://github.com/MarceloGouveia77">GitHub</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/11440712?s=460&v=4" alt="Marcelo Gouveia"/>
            <div className="user-info">
              <strong>Marcelo Gouveia</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
          </header>
          <p>Texto para teste só pra testar mesmo o container porque já são 4 da manhã e eu queria mesmo era estar dormindo na minhca cama quentinha</p>
          <a href="https://github.com/MarceloGouveia77">GitHub</a>
        </li>

        <li className="dev-item">
          <header>
            <img src="https://avatars3.githubusercontent.com/u/11440712?s=460&v=4" alt="Marcelo Gouveia"/>
            <div className="user-info">
              <strong>Marcelo Gouveia</strong>
              <span>ReactJS, React Native, NodeJS</span>
            </div>
          </header>
          <p>Texto para teste só pra testar mesmo o container porque já são 4 da manhã e eu queria mesmo era estar dormindo na minhca cama quentinha</p>
          <a href="https://github.com/MarceloGouveia77">GitHub</a>
        </li>
      </ul>
      </main>
    </div>
  );
}

export default App;
