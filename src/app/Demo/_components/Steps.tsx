import Image from "next/image";
import React from "react";
import { Timeline } from "../../../components/ui/Timeline";
import SignupImage from "../../../components/SignupPage.png";
import Addproductimage from "../../../components/Addproductimage.png";
import CreateProductImage from "../../../components/CreateProductImage.png";
import AddDiscountBasedOnParity from "../../../components/AddDiscountBasedOnParity.png";
import CustomizeYourBannerImage from "../../../components/CustomizeYourBannerImage.png";
import AddToSiteImage from "../../../components/AddToSiteImage.png";
import CopyScriptTag from "../../../components/CopyScriptTag.png";
import LocationOfScriptTagImage from "../../../components/LocationOfScriptTagImage.png";
import BannerPreviewImage from "../../../components/BannerPreviewImage.png";
export function Steps() {
  const data = [
    {
      title: "Sign Up & Onboard",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-3xl md:text-xl mb-10">
            Start by signing up and completing a simple onboarding process.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mr-10">
            <Image
              src={SignupImage}
              alt="startup template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Create a product",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-3xl md:text-xl font-normal mb-8">
            Start adding your product by selecting{" "}
            <button className="text-white bg-black p-2 rounded-lg m-1 font-bold hover:scale-105 duration-150">
              Add product
            </button>{" "}
            button.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mr-10">
            <Image
              src={Addproductimage}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fill the Product details",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200 text-3xl md:text-xl font-normal mb-8">
            Enter your <span className="font-semibold">Product name</span>,
            <span className="font-semibold">Website-URL</span> and{" "}
            <span className="font-semibold">Product Description</span>.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={CreateProductImage}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add Discount Based on Parity",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-8">
            Our system analyzes purchasing power, local economic conditions, and
            currency trends to provide pricing recommendations for each region.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={AddDiscountBasedOnParity}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Customize Your Banner",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-8">
            Now configure the banner that will be added to your site. You could
            adjust the text, design, and placement of the banner as per your
            website theme.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={CustomizeYourBannerImage}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add to your site",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-8">
            Click on{" "}
            <button className="text-white bg-accent p-2 rounded-lg m-1 font-bold hover:scale-105 duration-150">
              Add to site
            </button>
            .
          </p>
          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={AddToSiteImage}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Connect Your Store",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-2">
            Link your e-commerce store or platform just by adding this script to
            your code.
          </p>
          <p className="text-blue-500 dark:text-neutral-200  text-3xl md:text-xl font-normal mb-8">
            &lt;script
            src="http://localhost:3000/api/products/83cd4c1f-ea8e-4c5c-86cf-19680a5c5aea/banner"&gt;&lt;/script&gt;
          </p>

          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={CopyScriptTag}
              alt="hero template"
              width={500}
              height={500}
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Add script to Your Code",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-10">
            Add this script to your code at the end of your body tag.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={LocationOfScriptTagImage}
              alt="hero template"
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Preview Your Banner on your website",
      content: (
        <div>
          <p className="text-black dark:text-neutral-200  text-3xl md:text-xl font-normal mb-10">
          After adding Discomfy to your account, targeted customers from different countries will see a banner on your page.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mx-10">
            <Image
              src={BannerPreviewImage}
              alt="hero template"
              className="aspect-auto rounded-lg h-96 md:h-72 lg:h-60 w-auto md:w-full shadow-2xl hover:scale-105 duration-150 cursor-pointer"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full" id="step1">
      <Timeline data={data} />
    </div>
  );
}
