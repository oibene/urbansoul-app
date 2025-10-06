import filter_svg from '../../public/logos/discover_tune.svg'
import arrow_down from '../../public/logos/arrow_down.svg'
import arrow_up from '../../public/logos/arrow_up.svg'

import { useState } from 'react'

export default function ProductSearch(){

    const [genderCollapse, setGenderCollapse] = useState(false);
    const [categoryCollapse, setCategoryCollapse] = useState(false);
    const [sizeCollapse, setSizeCollapse] = useState(false);
    const [priceCollapse, setPriceCollapse] = useState(false);

    const handleGender = () => {
        setGenderCollapse(!genderCollapse)
    }
    const handleCategory = () => {
        setCategoryCollapse(!categoryCollapse)
    }
    const handleSize = () => {
        setSizeCollapse(!sizeCollapse)
    }
    const handlePrice = () => {
        setPriceCollapse(!priceCollapse)
    }

    return(
        <div className="flex m-10">

            <div className="w-75 h-150 bg-light rounded-sm">

                <div className="m-5 font-noto text-dark-gray text-base">

                    <div className="flex">
                        <img className="mr-1" src={filter_svg} alt="" />
                        <p>Filtros</p>
                    </div>

                    <hr className="mt-2 w-full rounded-sm" />

                    <div className="mt-2">
                        <div className="flex justify-between">
                            <p>Gênero</p>
                            <button className="cursor-pointer outline-none" onClick={handleGender}>
                                <img src={genderCollapse ? arrow_up : arrow_down} alt="" />
                            </button>
                        </div>

                        <ul className={genderCollapse ? "text-sm" : "hidden "}>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                        </ul>
                    </div>

                    <div className="mt-2">
                        <div className="flex justify-between">
                            <p>Categoria</p>
                            <button className="cursor-pointer outline-none" onClick={handleCategory}>
                                <img src={categoryCollapse ? arrow_up : arrow_down} alt="" />
                            </button>
                        </div>

                        <ul className={categoryCollapse ? "text-sm" : "hidden "}>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                        </ul>
                    </div>

                    <div className="mt-2">
                        <div className="flex justify-between">
                            <p>Tamanho</p>
                            <button className="cursor-pointer outline-none" onClick={handleSize}>
                                <img src={sizeCollapse ? arrow_up : arrow_down} alt="" />
                            </button>
                        </div>

                        <ul className={sizeCollapse ? "text-sm" : "hidden "}>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                        </ul>
                    </div>

                    <div className="mt-2">
                        <div className="flex justify-between">
                            <p>Preço</p>
                            <button className="cursor-pointer outline-none" onClick={handlePrice}>
                                <img src={priceCollapse ? arrow_up : arrow_down} alt="" />
                            </button>
                        </div>

                        <ul className={priceCollapse ? "text-sm" : "hidden "}>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                            <li> item1</li>
                        </ul>
                    </div>

                </div>

                
            </div>

            <div></div>

        </div>
    )

}