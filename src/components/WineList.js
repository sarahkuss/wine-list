import { useState, useEffect } from "react"
import WineCard from "./WineCard"

export default function WineList() {
  const [theWines, setTheWines] = useState() //no wines to put in here so leave it empty
  const [color, setColor] = useState('reds')
  const getWines = () => {
    fetch(`https://api.sampleapis.com/wines/${color}`)
      .then(response => response.json())
      .then(data => setTheWines(data)) //.then(setTheWines)
      .catch(alert)
  }

  useEffect(() => {
    getWines()
  }, [color]) //if color changes get the wines onClick={() => setColor('')}

  return (
    <>
      <div className="buttons">
        <button onClick={() => setColor('reds')}>Reds</button>
        <button onClick={() => setColor('whites')}>Whites</button>
        <button onClick={() => setColor('sparkling')}>Sparkling</button>
        <button onClick={() => setColor('rose')}>Rose</button>
      </div>
      <section className="wine-list">
        {(!theWines)
          ? <h2>Loading...</h2>
          : theWines.map(wine => (
            <WineCard key={wine.id} wine={wine} /> 
          ))
        }
      </section>
    </>
  )
}