import './App.css';
import './style.css'
import image from './IMG_20210401_101511.jpg'
function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}/>
      <h1 className='title red'>Rekhis Amir</h1>
      <img width='200px' src={image}/>
      <br/>
      <img src="../logo192.png"/>
      <br/>

      <iframe width="320" height="240" src="https://www.youtube.com/embed/VZLflMqC6dI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    
  );
}

export default App;
