import React from 'react';
import Image from 'next/image';

const TShirtCard = () => {
  return (
    <div className="justify-center">
      <h1 className="text-center text-4xl py-5 font-extrabold">
        Usman T-Shirt Collection&#39;s
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:justify-around lg:grid-cols-3">
        <div className="w-full bg-gray-400">
          <div className="flex justify-center">
            <Image src="/t-shirt1.png" alt="product3" width={200} height={200} />
          </div>
          <p className="text-center py-2 font-extrabold">T-Shirt</p>
          <p className="text-center py-2 font-medium">PKR 2000</p>
          <div className="flex justify-center my-5">
            <button className="bg-gray-800 text-white py-4 px-10 rounded-md">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-400">
          <div className="flex justify-center">
            <Image src="/1.png" alt="logo" width={200} height={200} />
          </div>
          <p className="text-center py-2 font-extrabold">T-Shirt</p>
          <p className="text-center py-2 font-medium">PKR 1500</p>
          <div className="flex justify-center my-5">
            <button className="bg-gray-800 text-white py-4 px-10 rounded-md">
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-400">
          <div className="flex justify-center">
            <Image src="/t-shirt2.png" alt="logo" width={200} height={200} />
          </div>
          <p className="text-center py-2 font-extrabold">T-Shirt</p>
          <p className="text-center py-2 font-medium">PKR 2000</p>
          <div className="flex justify-center my-5">
            <button className="bg-gray-800 text-white py-4 px-10 rounded-md">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtCard;
