import { Fullscreen } from "@mui/icons-material";
import Image from "next/image";

const HomeBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 mb-8 shadow-md shadow-blue-600/50">
      <div className="flex flex-col md:flex-row items-center justify-evenly px-8 py-12">
        <div className="flex flex-col mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl mb-4 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-rose-200">
            <span className="whitespace-nowrap">E-commerce</span> Shop
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 h-auto relative aspect-video">
          <Image
            src="/images/banner-image.png"
            alt="banner-image"
            layout="fill"
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
