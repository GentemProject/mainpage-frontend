import React from 'react';

interface Props {
  title: string;
  description?: string;
  image: string;
}

export function Hero({ title, description, image }: Props) {
  return (
    <div className="flex justify-items-center items-center h-[400px] w-full relative overflow-hidden z-10">
      <div className="absolute w-full h-full top-0 left-0 translate-y-1/2 z-10">
        <img src={image} className="w-full" />
      </div>
      <div className="text-center w-full z-20">
        <h2 className="font-medium text-white text-3xl">{title}</h2>
        {description && (
          <p className="text-base text-gray-300">{description}</p>
        )}
      </div>
    </div>
  );
}
