import Image from "next/image";
import social from "../../../assets/Social.png"
export default function Social() {
    return(
        <div style={{ height: '100vh', overflow: 'scroll' }}>
            <Image src={social} style={{ width: '100%', height: '100%', position: 'absolute' }}/>
        </div>
    );
}