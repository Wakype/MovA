import { imageUrl } from '@/libs/axios';
import Image from 'next/image';
import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const Card = ({ image, title, overview, popularity }) => {
  return (
    <>
      <div className="anti-overflow w-full overflow-hidden rounded-xl flex flex-col items-start cursor-pointer hover:scale-105">
        <div className="w-full mb-3 h-[430px] relative border rounded-xl border-[#FE024E] overflow-hidden shadow-lg">
          <Image
            src={imageUrl + image}
            priority
            width="0"
            height="0"
            sizes="100vw"
            className="h-full w-full bg-cover anti-overflow"
            quality={100}
            loading="eager"
            style={{ objectFit: 'cover', overflow: 'hidden' }}
            alt={title}
          />
          <div className="absolute top-5 left-5 bg-white bg-opacity-80 rounded-md px-2">
            <p className="flex items-center text-[#FE024E] text-[13px] py-1">
              <AiTwotoneStar className="mr-2" color="#FE024E" /> {popularity}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between">
          <div className="mb-2">
            <h1 className="text-[20px] line-clamp-2 mb-2">{title}</h1>
            <p className="text-gray-400 text-[13px] line-clamp-2">{overview}</p>
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default Card;
