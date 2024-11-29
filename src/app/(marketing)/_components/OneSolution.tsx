import React from "react";
import holidayImage from "../../../components/Holiday-Image.png"
import dashBoardImage from "../../../components/dashBoardImage.png"
import GlobeDiscount from "../../../components/Globe-Discount-image.png";
import NoCode from "../../../components/NoCodeImage.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const OneSolution = () => {
  return (
    <div className="cursor-pointer">
      <h1 className="font-bold text-6xl flex justify-center mb-10">
        One product for all your pricing strategies
      </h1>
      <div className="md:flex justify-normal">
        <div className="bg-[#E4F0E3] rounded-xl m-5 p-12 ">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl text-[#436D39] mt-5 p-2">
                Run festivals and holidays discount deals to boost your sales
              </h1>
              <p className="text-[#436D39] mb-5 p-2 font-semibold">
                Provide discount by festival, holidays, product launch, success
                milestones, or on your Birthday :)
              </p>
            </div>
            <Image
              alt="holidayImage"
              src={holidayImage}
              className="flex w-[400px] h-[200px] mt-7"
            />
          </div>
          <Link href={"/Demo/#steps"}>
            <button className="ml-2 flex bg-[#436D39] p-3 rounded-lg font-semibold text-white hover:bg-[#E4F0E3] hover:text-[#436D39] hover:border hover:border-[#436D39]">
              Learn More{" "}
              <span>
                <ArrowRight className="size-7  p-1" />
              </span>
            </button>
          </Link>
        </div>
        <div className="bg-[#E2E3F1] rounded-xl m-5 p-12 ">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl text-[#38396D] mt-5 p-2">
                Optimize pricing globally based on economic affordability
              </h1>
              <p className="text-[#38396D] mb-5 font-semibold p-2">
                Setup various discount rules for different countries to maximize
                revenue.
              </p>
            </div>
            <Image
              src={GlobeDiscount}
              alt="holidayImage"
              className="flex justify-center w-[300px]  h-[230px]"
            />
          </div>
          <Link href={"/Demo/#steps"}>
            <button className="ml-2 flex bg-[#38396D] p-3 rounded-lg font-semibold text-white hover:bg-[#E2E3F1] hover:text-[#38396D] hover:border hover:border-[#38396D] mb-2 border border-[#38396D]">
              Learn More{" "}
              <span>
                <ArrowRight className="size-7  p-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="md:flex justify-evenly my-5">
      <div className="bg-[#F1E3E2] rounded-xl m-5 p-12 ">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl text-[#6D3938] mt-5 p-2">
              Monitor your sales performance in action
              </h1>
              <p className="text-[#6D3938] mb-5 font-semibold p-3">
              Stay close pulse to sales performance by discount offers, locations, and products.
              </p>
            </div>
            <Image
              src={dashBoardImage}
              alt="holidayImage"
              className="flex justify-center w-[300px]  h-[230px]"
            />
          </div>
          <Link href={"/Demo/#steps"}>
            <button className="ml-2 flex bg-[#6D3938] p-3 rounded-lg font-semibold text-white hover:bg-[#F1E3E2] hover:text-[#6D3938] hover:border hover:border-[#6D3938] mb-2 border border-[#6D3938]">
              Learn More{" "}
              <span>
                <ArrowRight className="size-7  p-1" />
              </span>
            </button>
          </Link>
        </div>
        <div className="bg-[#D8EAFE] rounded-xl m-5 p-12 ">
          <div className="flex justify-center">
            <div>
              <h1 className="font-bold text-3xl text-[#4749A2] mt-5 p-2">
              No-code magic setup
              </h1>
              <p className="text-[#4749A2] mb-5 p-2 font-semibold">
              Automatically display discount banners by the users' location
              </p>
            </div>
            <Image
              src={NoCode}
              alt="holidayImage"
              className="flex justify-center w-[300px]  h-[230px]"
            />
          </div>
          <Link href={"/Demo/#steps"}>
            <button className="ml-2 flex bg-[#4749A2] p-3 rounded-lg font-semibold text-white hover:bg-[#D8EAFE] hover:text-[#4749A2] hover:border hover:border-[#4749A2] mb-2 border border-[#4749A2]">
              Learn More{" "}
              <span>
                <ArrowRight className="size-7  p-1" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneSolution;
