"use client"
import Button from "../utils/Button";
import Card from "../utils/card";
import Dropdown from "../utils/dropdown";
import Input from "../utils/input";
import Navbar from "../utils/navbar";

const Event = () => {
    return (
        <>
        <Navbar />
        <div>
            <div className="py-10 text-secondary text-center flex justify-center items-center text-4xl font-bold">
                <h1>Event</h1>
            </div>
            <div className="py-10 text-secondary text-center flex justify-center items-center text-3xl font-bold">
                <h1>Buat event yang dapat dijangkau kepada komunitas kami, gratis!</h1>
            </div>
        </div>
        <div className="flex py-10 mx-72">
            <div className="text-secondary text-center flex flex-col w-1/2 justify-center items-center  text-lg font-bold ">
                <div className="flex flex-col justify-center items-center w-5/6 my-4 ">
                    <h2>Ingin mempromosikan acara kamu? Gratis!</h2>
                </div>
                <div>
                    <Button link="/event/CreateEvent" tag="Buat Event " padd="p-2" />
                </div>
            </div>
            <div className="text-secondary text-center flex flex-col items-center w-1/2   text-lg font-bold">
                <div className="flex flex-col justify-center items-start w-5/6 my-4  ">
                    <h2>Ingin ikut lomba atau dengerin insight terbaru?</h2>
                </div>
                <div>
                    <Button link="/event/CreateEvent" tag="Lihat Acara" padd="p-2" />
                </div>
            </div>
        </div>
        <div>
            <div className="py-16 text-secondary text-center flex justify-center items-center text-3xl font-bold">
                    <h1>Event yang harus kamu ikuti!</h1>
            </div>
        </div>
        <div className="justify-center items-center flex flex-col ">
            <div className="w-5/6">
                <Input />
            </div>
            <div className="flex gap-2  justify-center items-center rounded-md py-6">
                <div className="w-full">
                    <Dropdown value="Pilih kategori" q="Seminar" w="Webinar" e="Kompetisi" r="Bimbingan Belajar" />
                </div>
                <div className="w-full">
                    <Dropdown value="Pilih Media" q="Online (Zoom)" w="Offline" e="Optional" />
                </div>
            </div>
        </div>
        

        <div className="grid grid-cols-3 justify-center items-center gap-8 px-32 py-10">
            <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
            <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
            <Card title="Konstruksi Indonesia 2023" icon_brand="Konstruksi Indonesia" location="Jakarta International Expo" address="Pamendangan,Jakarta Utara" time="1 - 3 November 2023" price="FREE"/>
        </div>
        </>
    )
}

export default Event;