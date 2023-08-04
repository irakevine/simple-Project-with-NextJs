import styles from '../../styles/txen.module.css'
export const getStaticProps = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    
    return{
        props : {  txens: data   }
    }
}

const Txens = ({ txens }) => {
    return ( 
        
        <div>
            <h1>All Txens</h1>
            {txens.map(txen =>(
                <div key={txen.id}>

            <a className={styles.single}>
         <h2>{txen.name}</h2>
             </a>
                </div>

            ))}
        </div>
       
     ); 
}
 
export default Txens;