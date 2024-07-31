
import gambar from "../img/a-removebg-preview.png"
import Image from "next/image"
import Link from "next/link"


const Jumbotron = () => {
    return (
        <div>
            <Link href="/">
                <Image src={gambar} alt="jumbotron" width={700} height={100} />
            </Link>
        </div>
    )
}

export default Jumbotron