"use client"
import Link from "next/link";
import Button from "../utils/Button";
import Card from "../utils/card";
import Dropdown from "../utils/dropdown";
import Input from "../utils/input";
import Navbar from "../utils/navbar";
import Jumbotron from "../utils/jumbotron";


const Event = () => {
    return (
        <section>
            
            <div className="w-full ">
            
                <Navbar />
                <div className="my-10 gap-5 text-center flex flex-col justify-center items-center ">
                    <div className=" text-secondary md:text-3xl text-xl font-bold">
                        <h1>Buat event yang dapat dijangkau kepada komunitas kami, gratis!</h1>
                    </div>
                </div>

                {/* JUMBOTRON COLAPSE */}
                {/* <div className="my-10 border-2 border-red-500 w-full flex justify-center items-center">
                    <Jumbotron />
                </div> */}
                {/* END OF JUMBOTRON COLLAPSE */}

                {/* PROMOTE */}
                <div className="w-full flex justify-center items-center gap-8 mt-10 md:mt-30 lg:mt-40 
                                ">
                    <div className="text-secondary flex flex-col w-full text-sm md:text-xl lg:text-2xl font-bold  items-center text-center  gap-5 mx-2">
                        <div className="flex w-full flex-col md:flex-col lg:flex-row justify-center items-center gap-1 cursor-pointer">
                            <h2>Ingin mempromosikan acara kamu? </h2>
                            <Link href="/" className="text-secondary hover:text-primary"> Gratis!</Link>
                        </div>
                        <div>
                            <Button link="/event/CreateEvent" tag="Buat Event " padd="p-2" />
                        </div>
                    </div>
                    <div className="text-secondary text-center flex flex-col items-center w-full text-sm md:text-xl lg:text-2xl font-bold gap-5 ">
                        <div className="flex justify-center items-center w-full ">
                            <h2>Ingin ikut lomba atau dengerin insight terbaru?</h2>
                        </div>
                        <div>
                            <Button link="/event/CreateEvent" tag="Lihat Acara" padd="p-2" />
                        </div>
                    </div>
                </div>
                {/* END PROMOTE */}

                <div className="py-16 text-secondary text-center flex justify-center items-center text-3xl font-bold">
                        <h1>Event yang harus kamu ikuti!</h1>
                </div>
                
                {/* DROPDOWN INPUT */}
                <div className="flex flex-col gap-5 w-full
                ">
                    <div className="flex flex-wrap justify-center items-center">
                        <Input />
                    </div>

                    <div className="mx-8 md:mx-0 lg:mx-0 flex gap-3 justify-center items-center flex-col md:flex-row lg:flex-row">
                        <div className="w-full ">
                            <Dropdown value="Pilih kategori" q="Seminar" w="Webinar" e="Kompetisi" r="Bimbingan Belajar" padd="py-2 px-2 w-full" />
                        </div>
                        <div className="w-full ">
                            <Dropdown value="Pilih Media" q="Online (Zoom)" w="Offline" e="Optional" padd="py-2 px-2 w-full" />
                        </div>
                    </div>
                </div>
                {/* END DROPDOWN INPUT */}

                {/* CARD */}
                <div className="p-5 grid mb-4 gap-9
                lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 sm:items-center md:items-center  lg:items-center
                justify-center items-center">
                    <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
                    <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
                    <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
                </div>
                {/* CARD END */}
            
            </div>

        </section>
    )
}

export default Event;