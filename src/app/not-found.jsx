import Navbar from "./utils/navbar";

export default function NotFound() {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Page you find is Not Found</h1>
            </div>
        </div>
    )
}
