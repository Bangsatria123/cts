import Image from "next/image"
import cardimg from "../img/cc.png"
import Button from "./Button"
import pin from "../img/maps-and-flags.png"
import clock from "../img/clock-alarm.png"
import Link from "next/link"
import logo from "../img/a-removebg-preview.png"


const Card = ({ title,  location, address, time, price }) => {
    return (
        <div className="border border-secondary rounded-md">

            {/* IMAGE */}
            <div className="flex flex-col" >
                <Link
                    href={`/`}
                    className=" "
                    alt={`${title}`}
                >
                    <Image
                    src={cardimg}
                    alt="...."
                    width={150}
                    height={150}
                    className="w-full max-h-60 object-cover"
                    />
                </Link>
            </div>
            {/* END IMAGE */}

            {/* CONTENT */}
            <div className=" mx-3 flex flex-col py-6 md:text-xl md:gap-7 gap-5 lg:gap-8">
                {/* TAG */}
                <div className="gap-2 flex flex-col md:flex-row my-2">
                    <Button link="/" tag="Onsite" padd="p-2"/>
                    <Button link="/" tag="Kompetisi" padd="p-2"/>
                </div>
                {/* END TAG */}

                {/* TITLE */}
                <div className="flex gap-3 ">
                    <Link
                        href={`/`}
                        className=" flex justify-center items-center text-secondary object-cover"
                        >
                        <Image
                        src={logo}
                        alt="...."
                        width={35}
                        height={60}
                        className=""
                        />
                    </Link>
                    <Link
                    href={`/`}
                    className="font-bold text-xl text-secondary"
                    >
                    {title}
                    </Link>
                </div>
                {/* END TITLE */}

               
                <div className="flex flex-col gap-5 px-2">
                    {/* LOCATION */}
                    <div className="flex gap-2 ">
                        <div className="flex justify-center items-center">

                            <Link href='/' className=" ">
                                <Image
                                src={pin}
                                alt="...."
                                width={30}
                                height={30}
                                className=""
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col ">
                            <Link
                            href={`/`}
                            className="font-bold text-xl sm:text-lg text-secondary"
                            >
                            {location}
                            </Link>
                            <Link
                            href={`/`}
                            className="font-bold text-lg sm:text-sm text-secondary"
                            >
                            {address}
                            </Link>
                        </div>
                    </div>
                    {/* END LOCATION */}

                    {/* TIME */}
                <div className=" flex gap-2">
                    <div>
                        <Image 
                        src={clock}
                        alt="...."
                        width={30}
                        height={30}
                        className=""
                        />
                    </div>
                    <div>
                        <Link
                        href={`/`}
                        className="font-bold text-xl text-secondary"
                        >
                        {time}
                        </Link>
                    </div>
                </div>
                {/* END TIME */}

                {/* PRICE */}
                    <Link
                    href={`/`}
                    className="font-bold lg:text-2xl sm:text-xl md:text-2xl text-secondary"
                    >
                    {price}
                    </Link>
                {/* END PRICE */}
            </div>
                <div className="flex flex-col justify-center items-center mb-5">
                    <Button link="/" tag="Daftar" padd="p-4 py-2"/>
                </div>
            </div>
            {/* END CONTENT */}

        </div>
    )
}

export default Card