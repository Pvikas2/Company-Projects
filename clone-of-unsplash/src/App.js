// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import {GoSearch} from 'react-icons/go'

function App() {
const [value,setValue] = useState("");
const [results , setResults] = useState([]);
const [visible,setVisible]  = useState(8);



function loadmore() {
   setVisible((prevValue)=> prevValue + 8);

}

//Fetching images from unsplash site
const fetchImages =() => {
   fetch(`https://api.unsplash.com/search/photos?client_id=tgm8L6hxQDVn3lGQaRLHEjCLIgZe6NfczG80ICTgrhg&query=${value}&orientation=landscape&per_page=40`)
   .then(res => res.json())
   .then(data => 
    // console.log(data)
    setResults(data.results)

    )}

  return (
    <div className="App">
      <div className="mydiv">
          <input type="text"
          className="myinput"
          style={{width :"80%"}}
           value={value} 
           onChange={(e)=>setValue(e.target.value)}
           placeholder="Search for photos"/>
           <button className="mybtn" onClick= {()=> fetchImages()}><GoSearch style={{height: "60%", width:"80%"}}/></button>
      </div>
      <div className="gallery">
        <div className="gal-first">
        <h1> 
          {value}
          </h1>
        <h4>
          {results.length} images found</h4>
        </div>
   
        
        {
          results.slice(0,visible).map((item) => {
            return <>
             <img src={item.urls.regular}  className="myimg"/>
             </>
          })
        }
      </div>
    <div className="loadmore">
       <button onClick={loadmore} >Load More</button>
    </div>
    </div>
  );
}

export default App;



//tgm8L6hxQDVn3lGQaRLHEjCLIgZe6NfczG80ICTgrhg