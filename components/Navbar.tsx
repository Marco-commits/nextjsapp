import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

export default function Navbar(){
    const user = true;
    const username = true;
    
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <Link prefetch={false} href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>
                {username && (
                    <>
                        <li>
                            <Link href="/admin">
                                <button className="btn-blue">Write Posts</button> 
                            </Link>
                        </li>
                        <li>
                        <Link href={`/${username}`}>
                               <img src={user?.photoURL} />
                        </Link>
                        </li>
                    </>
                )}

                {!username && (
                     <>
                     <li>
                         <Link href="/enter">
                             <button className="btn-blue">Log in</button> 
                         </Link>
                     </li>
                 </>
                )}
            </ul>
        </nav>
    );
}