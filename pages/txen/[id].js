
export const getStaticProps = async () =>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json();

const paths = data.map(txen =>{
    return{
        params: {id: txen.toString()}
    }
})
return{
    paths,
    fallBack:false
}
}
const Details = () => {
    return ( 
        <div>
            <h1>Details page</h1>
        </div>
     );
}
 
export default Details;
