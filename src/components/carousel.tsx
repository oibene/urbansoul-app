'use client'
import { useEffect, useState } from "react";

const Carousel = ({data, theme, itemsPerView}) => {
    var [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex( () =>
            currentIndex === data.length -1 ? 0: currentIndex + 1
        );
    };
    const prevSlide = () => {
        setCurrentIndex( () =>
            currentIndex === 0 ? data.length -1 : currentIndex - 1
        );
    };

    const visibleItems = data.concat(data.slice(0, itemsPerView)).slice(currentIndex, currentIndex + itemsPerView)


    return (
        <div className="m-10">
            <div className="flex justify-center font-noto text-dark-gray mb-4">
                <p className="text-base font-bold"> MELHORES ESCOLHAS {theme} </p>
            </div>
            
            <div className="flex justify-center">
                <button onClick={prevSlide} className="rounded-full outline-1 w-10 h-10 text-xl font-bold cursor-pointer my-40 mx-10"> &lt; </button>

                <div className="flex w-250 h-110 gap-10">
                    {visibleItems.map((item, index) => (
                        <a key={index} href="#" className="transform hover:scale-105 m-2 ease-in-out">
                            <img src={item.img_URL} alt="" />
                            <div className="font-noto text-dark-gray mt-2">
                                <p className="font-bold text-base">{item.category}</p>
                                <p className="text-sm">{item.type}</p>
                            </div>
                        </a>
                    ))}
                </div>
                
                <button onClick={nextSlide} className="rounded-full outline-1 w-10 h-10 text-xl font-bold cursor-pointer my-40 mx-10"> &gt; </button>
            </div>


            <div className="flex justify-center">

                {data.map((item, index) => (
                    <button key={index} onClick={() => setCurrentIndex(index)}
                            className={index === currentIndex ? "h-3 w-3 mx-1 outline rounded-full bg-dark-gray cursor-pointer" :
                                                                "h-3 w-3 mx-1 outline rounded-full cursor-pointer"}>
                    </button>
                ))}
            </div>
            
        </div>
    )
}

export default Carousel;