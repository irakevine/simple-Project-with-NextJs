import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return (
        <nav>
<div className="logo"> 
<Image src="/lo.png" width={128} height={77} alt=''/>
</div>
<Link href="/">Home</Link>
<Link href="/about">About</Link>
<Link href="/txen">Txen List</Link>

        </nav>
    );
}
 
export default Navbar;