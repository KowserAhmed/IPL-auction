import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Player from './Components/Player/Player'
import Cart from './Components/Cart/Cart';
import Head from './Components/Head/Head';




function App() {
  const [player, setPlayer]=useState([])
  const [cart,setCart]=useState([])

  let handalerInfo=(cartInformation)=>{
    setCart([...cart,cartInformation]);
  }

  useEffect(()=>{
    fetch('http://www.json-generator.com/api/json/get/bUNNEXfDZu?indent=2')
    .then(res=>res.json())
    .then(data=>setPlayer(data))
  },[])
  return (
    <div>
      
      <Head></Head>
      
    <div className="App d-flex">
      <div className="player">
      {
       player.map(player=> <Player player={player} handalerInfo={handalerInfo} key={player.id}></Player>)
      }

      </div>
      <div className="cart">
      <Cart cart={cart}></Cart>
      </div>
     
    </div>
    </div>
  );
}

export default App;
