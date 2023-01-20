import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.divCard}>
         
         <button  className={styles.buttonCard} onClick={()=> props.onClose()}>X</button>
         
         <div>
            <h2>{props.name}</h2>
         </div>

         <img  src={props.image} alt="" />  

         <div>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         
      </div>
   );
}
