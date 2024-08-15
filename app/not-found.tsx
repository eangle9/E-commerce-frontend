import Image from "next/image";
import Link from "next/link";

const notFoundPage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-[1200px] min-h-[386px] w-full flex flex-col items-center justify-center my-10 bg-slate-100">
        <div className="mb-1 text-center">
          <Image
            src="/images/no_items.gif"
            alt="NotFound-Page"
            width={160}
            height={160}
          />
        </div>
        <div className="text-xl font-bold text-center">
          Sorry, the page you are looking for does not exist.
        </div>
        <p className="text-[12px] leading-5 text-[#666]">
          But we still have lots for you to discover
        </p>
        <Link
          href="/"
          className="flex justify-center items-center mt-3 h-11 px-10 leading-[44px] rounded-[4px] text-[#fff] bg-[#ff4747]"
        >
          back to homepage
        </Link>
      </div>
    </div>
  );
};

export default notFoundPage;
