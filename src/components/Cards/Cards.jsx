import Card from '../Card/Card';
import style from './Cards.module.css';

export default function Cards({characters,onClose}) {
   
   return (
         <div className={style.divCards}>
      {
         characters.map(({id,name,species, gender, image })=> {
            return<Card
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={()=>onClose(id)}
            />
            
         })
      }
   </div>
   )
}
