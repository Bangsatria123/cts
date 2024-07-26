import Image from "next/image"
import cardimg from "../img/cc.png"
import Button from "./Button"
import pin from "../img/maps-and-flags.png"
import clock from "../img/clock-alarm.png"


const Card = ({ title, icon_brand, location, address, time, price }) => {
    return (
        <div className="flex flex-col gap-10 border rounded-md border-black w-full">
            <div>
                <Image src={cardimg} alt="card" width={300} height={300} className="rounded-md object-cover w-full max-h-65" />
            </div>

            <div className="gap-3 flex ps-3">
                <Button link="/" tag="onsite " padd="px-4 py-2" />
                <Button link="/" tag="Kompetisi" padd="px-6 py-2" />
            </div>

            <div className="flex flex-col px-3 mb-5 gap-8 text-secondary">

                <h1 className="text-2xl font-bold">{title}</h1>
                <h1 className="text-xl font-bold">{icon_brand}</h1>

                <div className="flex gap-1">
                    <div>
                        <Image src={pin} alt="location pin" width={30} height={30} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-lg font-bold">{location}</h1>
                        <h3 className="text-sm font-normal">{address}</h3>
                    </div>
                </div>

                <div className="flex gap-2">
                    <div>
                        <Image src={clock} alt="clock" width={30} height={30} />
                    </div>
                <h1 className="text-lg font-bold">{time}</h1>
                </div>

                <h1 className="text-2xl font-bold">{price}</h1>
            </div>
            <div className="flex justify-center items-center pb-8">
                <Button link="/" tag="Detail event" padd="px-6 py-2" />
            </div>
        </div>
    )
}

export default Card