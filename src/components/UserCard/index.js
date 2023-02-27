import styles from './styles.module.scss'; 

const UserCard = (props) => {

   return( 
   <div className={styles.wrapper}>
      <h1 className={styles.name}>User name: {props.name}</h1>
      <h2 className={styles.age}>Age: {props.age}</h2>
   </div>
);
}

export default UserCard;