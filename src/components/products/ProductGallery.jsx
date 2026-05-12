import { useState } from 'react';

export default function ProductGallery({ images }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="w-full h-full text-center">
      
      <div className="w-full h-[80%] bg-gray-50 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={selected}
          alt="producto"
          className="w-full object-contain bg-gray-50 rounded-xl p-4"
        />
      </div>

      <div className="flex gap-2 mt-4 flex-wrap justify-center">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setSelected(img)}
            className={`w-[60px] cursor-pointer transition-opacity ${
              selected === img
                ? 'border-2 border-[#ec5840] opacity-100'
                : 'opacity-70 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
}