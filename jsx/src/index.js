//Importar o React e o ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText()
{
    return 'Botão passado como função';
}


//Criar um component react
const App = () => {

const buttonText = 'Click Me!';
const buttonTextObj = {text: 'Clique me'};
const style = {backgroundColor: 'blue', color: 'white'};

        return <div>
            <label className="label" htmlFor="name">Enter name:</label>
            <input id="name" type="text" />
            <button style={style}>
            
                {buttonTextObj.text}
            
            </button>
            </div> 
    };

//Mostrar o component na tela
ReactDOM.render(<App />, document.querySelector('#root'));