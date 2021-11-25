import React from 'react';
import styles from './Formulario.module.css'
import useSelect  from '../hooks/useSelect';
import usePais  from '../hooks/usePais';

const Formulario = ({guardarCategoria}) =>  {

    const OPCIONES = [
        {value: 'general', label:'General'},
        {value: 'business', label:'Negocios'},
        {value: 'entertainment', label:'Entretenimiento'},
        {value: 'health', label:'Salud'},
        {value: 'science', label:'Ciencia'},
        {value: 'sports', label:'Deportes'},
        {value: 'technology', label:'Tecnologia'}
    ];
     const PAISES = [
         {codigo: 'ae', nombre:'Emiratos Árabes Unidos'},
         {codigo: 'ar', nombre:'Argentina'},
         {codigo: 'at', nombre:'Austria'},
         {codigo: 'au', nombre:'Australia'},
         {codigo: 'be', nombre:'Bélgica'},
         {codigo: 'bg', nombre:'Bulgaria'},
         {codigo: 'br', nombre:'Brasil'},
         {codigo: 'ca', nombre:'Canadá'},
         {codigo: 'ch', nombre:'Suiza'},
         {codigo: 'cn', nombre:'China'},
         {codigo: 'co', nombre:'Colombia'},
         {codigo: 'cu', nombre:'Cuba'},
         {codigo: 'cz', nombre:'República Checa'},
         {codigo: 'de', nombre:'Alemania'},
         {codigo: 'eg', nombre:'Egipto'},
         {codigo: 'fr', nombre:'Francia'},
         {codigo: 'gb', nombre:'Reino Unido'},
         {codigo: 'gr', nombre:'Grecia'},
         {codigo: 'hk', nombre:'Hong Kong'},
         {codigo: 'hu', nombre:'Hungría'},
         {codigo: 'id', nombre:'Indonesia'},
         {codigo: 'ie', nombre:'Irlanda'},
         {codigo: 'il', nombre:'Israel'},
         {codigo: 'in', nombre:'India'},
         {codigo: 'it', nombre:'Italia'},
         {codigo: 'jp', nombre:'Japón'},
         {codigo: 'kr', nombre:'Corea del Sur'},
         {codigo: 'lt', nombre:'Lituania'},
         {codigo: 'lv', nombre:'Letonia'},
         {codigo: 'ma', nombre:'Marruecos'},
         {codigo: 'mx', nombre:'México'},
         {codigo: 'my', nombre:'Malasia'},
         {codigo: 'ng', nombre:'Nigeria'},
         {codigo: 'nl', nombre:'Países Bajos'},
         {codigo: 'no', nombre:'Noruega'},
         {codigo: 'nz', nombre:'Nueva Zelanda'},
         {codigo: 'ph', nombre:'Filipinas'},
         {codigo: 'pl', nombre:'Polonia'},
         {codigo: 'pt', nombre:'Portugal'},
         {codigo: 'ro', nombre:'Rumanía'},
         {codigo: 'rs', nombre:'Serbia y Montenegro'},
         {codigo: 'ru', nombre:'Rusia'},
         {codigo: 'sa', nombre:'Arabia Saudita'},
         {codigo: 'se', nombre:'Suecia'},
         {codigo: 'sg', nombre:'Singapur'},
         {codigo: 'si', nombre:'Eslovenia'},
         {codigo: 'sk', nombre:'Eslovaquia'},
         {codigo: 'th', nombre:'Tailandia'},
         {codigo: 'tr', nombre:'Turquía'},
         {codigo: 'tw', nombre:'Taiwán'},
         {codigo: 'ua', nombre:'Ucrania'},
         {codigo: 'us', nombre:'Estados Unidos de América'},
         {codigo: 've', nombre:'Venezuela'},
         {codigo: 'za', nombre:'Sudáfrica'}
     ];
    const [pais, SelectPais] = usePais('ve','',PAISES);

    // utilizar custom hook
    const [categoria,SelectNoticias] = useSelect('general',OPCIONES);

    // submit al form, pasar categoria a App.js
    const buscarNoticias = evento => {
            evento.preventDefault();
            guardarCategoria(categoria);
    };


  return (
   <div className = {`${styles.buscador} row`} >
       <div className = 'col s12 m8 offset-m2'>
           <form
                onSubmit = {buscarNoticias}
           >
               <h2 className = {styles.heading}>Encuentra Noticias por Categoria</h2>
                {/* <SelectPais/> */}
               <SelectNoticias/>

               <div className = 'input-field col s12'>
                   <input
                        type = 'submit'
                        className = {`${styles.btn_block} btn-large amber darken-2`} 
                        value = 'Buscar'
                   />
               </div>
           </form>
       </div>
   </div>
  );
}

export default Formulario;
