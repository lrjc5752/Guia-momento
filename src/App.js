import React, {Fragment,useState,useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

// definir la categoria y noticia
const [categoria,guardarCategoria] = useState('');
const [noticias,guardarNoticias] = useState([]);
const [pais,guardarPais] = useState('');


  useEffect(() => {

     const consultarApi = async () =>{
         const url = `https://newsapi.org/v2/top-headlines?country=${pais}&category=${categoria}&apiKey=033e9b82c7084c7986502e7a50ea1e23`;
         const respuesta = await fetch(url);
         const noticias = await respuesta.json();
         guardarNoticias(noticias.articles);
     }
//  const consultarApi = async () =>{
//    const url = `https://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=033e9b82c7084c7986502e7a50ea1e23`;
//    const noticias = await axios.get(url);
//     guardarNoticias(noticias.articles);
//  }
    consultarApi();
  },[categoria,pais]); 

  return (
   <Fragment>
     <Header
      titulo = 'Buscador de Noticias'
     />
      <div className = 'container white'>
          <Formulario
            guardarCategoria = {guardarCategoria}
          />
          <ListadoNoticias
              noticias = {noticias}
          />
     </div> 
   </Fragment>
  );
}

export default App;


