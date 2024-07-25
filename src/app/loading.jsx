import Image from "next/image";
import loading from "./utils/img/a-removebg-preview.png";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Image src={loading} alt="Loading" width={300} height={300} />
    </div>
  );
};

export default Loading;