import "./App.css";
import Konyv from "./Konyv";

const konyvTomb = [
  {
    cim:"Malevil",
    szerzo:"Robert Merle",
    ar: 1111
  },
  {
    cim:"Védett férfiak",
    szerzo:"Robert Merle",
    ar: 2222
  },
  {
    cim:"Állati elmék",
    szerzo:"Robert Merle",
    ar: 3333
  }
]

function App() {
  function kosarKezeles(adat){
    console.log(adat)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Könyváruház</h1>
      </header>
      <article>
      {
        konyvTomb.map
        ( (konyv, index)=>
          {
            return (<Konyv konyvObj={konyv} key={index} kosarKezelesFv = {kosarKezeles}/>)
          }
        )
      }

      </article>
      <footer>
        <p>Ulrich Bence</p>
      </footer>
    </div>
  );
}

export default App;