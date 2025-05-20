import { useState } from 'react'

import './App.css'
import obraz1 from "./obraz1.jpg";
import obraz2 from "./obraz2.jpg";
import obraz3 from "./obraz3.jpg";
import obraz4 from "./obraz4.jpg";
import obraz5 from "./obraz5.jpg";
import obraz6 from "./obraz6.jpg";
import obraz7 from "./obraz7.jpg";
import obraz8 from "./obraz8.jpg";
import obraz9 from "./obraz9.jpg";
import obraz10 from "./obraz10.jpg";
import obraz11 from "./obraz11.jpg";
import obraz12 from "./obraz12.jpg";



function App() {
  const [x,setX]=useState(1);
  const [y,setY]=useState(1);
  const [z,setZ]=useState(1);


  function change(index) { 
setPhotos(prevPhotos => prevPhotos.map(photo => photo.id === index ? {...photo,downloads:photo.downloads+1} : photo)); 
} 
function changeKwiaty(){
  setX(x*-1);
}
function changeZwierzeta(){
  setY(y*-1);
}
function changeSamochody(){
  setZ(z*-1);
}

  const [photos,setPhotos]=useState([
    {id: 0, alt: "Mak", filename: obraz1, category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: obraz2, category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: obraz3, category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: obraz4, category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: obraz5, category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: obraz6, category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: obraz7, category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: obraz8, category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: obraz9, category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: obraz10, category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: obraz11, category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: obraz12, category:3, downloads: 321}]);
  return (
    <>
    <div>
      <h1>Kategorie zdjęć</h1>
      <div id="kat">
        Kwiaty<input type="checkbox" id="Kwiaty" defaultChecked onChange={changeKwiaty}/>
        Zwierzęta<input type="checkbox" id="Zwierzeta" defaultChecked onChange={changeZwierzeta}/>
        Samochody<input type="checkbox" id="Samochody" defaultChecked onChange={changeSamochody}/>
      </div>
      {photos.map((photo,index)=>
      <div id={x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3?"container":""} key={index} >
        {x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3? <img src={photo.filename} alt={photo.alt}/>:""  }
        {x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3?<br/>:""}
        {x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3?<h4>Liczba pobrań {photo.downloads}</h4>:""}
        {x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3?<br/>:""}
        {x===1&&photo.category===1||y===1&photo.category===2||z===1&&photo.category===3?<button onClick={()=>change(index)}>Pobierz</button>:""}
      </div>  
      )}
    </div>
    </>
  )
}

export default App
