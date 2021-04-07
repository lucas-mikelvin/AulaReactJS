var container = window.document.getElementById("app");

/*
var titulo = document.createElement("h1");
titulo.innerHTML = "Título by JS :O";
container.appendChild(titulo);
*/

function Contador(props) {

    //let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar() {
        //numero++
        setNumero(numero + 1);
        console.log("Resultado depois de adicionar: " + (numero + 1))
    }

    function subtrair() {
        //numero--;
        setNumero(numero -1);
        console.log("Resultado depois de subtrair: " + (numero + 1))
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Vote no teu preferido!</h1>
            <Contador titulo="NetFlix" />
            <Contador titulo="Disney+" />
            <Contador titulo="Amazon Prime Video" />
        </React.Fragment>
    );
}

ReactDOM.render(React.createElement(App, null, null), container);

/*
ReactDOM.render(App(), container);

1. PascalCase -> Componentes em React seguem esse padrão
2. camelCase -> Funções em JavaScript
3. Componentes só podem retornar um elemento por Componente
saída => aninhar em React.Fragment
4. Podemos criar propriedades
*/
