import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// COMPONENTE: Bloco isolado de HTML, CSS, JS, o qual não interfere no restante da aplicação
// ESTADO: Informações mantidas pelo componente (Lembrar: imutabilidade)
// PROPRIEDADE: Informações que um componente PAI passa para o componente FILHO