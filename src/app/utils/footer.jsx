import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-secondary grid grid-cols-3 pt-10 pb-10">
            <div className=" text-left px-10 ps-22">
                <h1 className=" text-primary text-xl font-semibold">CALON TEKNIK SIPIL</h1>
                <p className="text-xs mt-3 w-3/4 font-normal text-tertiary">
                Sebuah platform digital untuk memberikan <span className="font-bold">wawasan seputar dunia konstruksi</span> bagi masyarakat luas, khususnya yang menggeluti bidang keilmuan <span className="font-bold">teknik sipil.</span>
                </p>
            </div>    
            <div className=" text-left px-10 ps-22">
                <h1 className=" text-primary text-xl font-semibold">RESOURCES</h1>
                <div className="text-xs flex flex-col gap-4 text-tertiary mt-3">
                <Link href="/" className="hover:text-primary">Artikel</Link>
                <Link href="/" className="hover:text-primary">Berita</Link>
                <Link href="/" className="hover:text-primary">Event</Link>
                </div>
            </div>    
            <div className=" text-left px-10 ps-22">
                <h1 className=" text-primary text-xl font-semibold">CONTACT</h1>
                <div className="flex flex-col gap-4 text-tertiary mt-3">
                    <Link href="/about" className="text-xs hover:text-primary">
                        About Us
                    </Link>
                    <Link href="/Contact" className="text-xs text-tertiary hover:text-primary">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="col-span-3 text-center mt-10">
                <p className="text-xs text-tertiary">
                    &copy; 2024 Calon Teknik Sipil. All rights reserved.
                </p>
            </div>
        </div>
    )
}
export default Footer;