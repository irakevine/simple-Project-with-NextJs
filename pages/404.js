import Link from 'next/link'
const Notfound = () => {
    return ( 
        <div className="not-found">
<h1>OoOoOoOops....</h1>
<h2>that page can not found.</h2>
<p>go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default Notfound;