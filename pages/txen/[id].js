export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    // map data to an array of path objects with params (id)
    const paths = data.map(txen => {
      return {
        params: { id: txen.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { txen: data }
    }
  }
  
  const Details = ({ txen }) => {
    return (
      <div>
        <h1>{ txen.name }</h1>
        <p>{ txen.email }</p>
        <p>{ txen.website }</p>
        <p>{ txen.address.city }</p>
      </div>
    );
  }
  
  export default Details;
