import styles from './SearchBar.module.css';
import { useState } from 'react';



export default function SearchBar({onSearch}) {
   const [character,setCharacter]= useState('');
   const handleChange = (event) =>{
      
      setCharacter(event.target.value)

   }
    return (
      <div>
         <input className={styles.input} value= {character} onChange={handleChange} type='search' placeholder='Charater to search'/>
         <button className= {styles.button} onClick={()=>onSearch(character)} >Agregar</button> 
      </div>
   );
}
