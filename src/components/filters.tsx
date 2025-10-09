import filter_svg from '/logos/discover_tune.svg'
import arrow_down from '/logos/arrow_down.svg'
import arrow_up from '/logos/arrow_up.svg'

import { useState } from 'react'
import type { CategoryInterface, ItemsFilterInterface } from '../@types/products';

const sendFilters : ItemsFilterInterface = {
        gender: [],
        category: [],
        size: [],

        min_price: 0,
        max_price: 0
}


export default function Filters(){

    //#region COLLAPSES
    const [genderCollapse, setGenderCollapse] = useState(true);
    const [categoryCollapse, setCategoryCollapse] = useState(true);
    const [sizeCollapse, setSizeCollapse] = useState(true);
    const [priceCollapse, setPriceCollapse] = useState(true);

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
    //#endregion

    //#region STATES
    const [btnPP, setBtnPP] = useState(false);
    const [btnP, setBtnP] = useState(false);
    const [btnM, setBtnM] = useState(false);
    const [btnG, setBtnG] = useState(false);
    const [btnGG, setBtnGG] = useState(false);

    const handleBtnPP = () => {
        setBtnPP(!btnPP)
        sendFilters.size.push((btnPP) ? "" : "PP");
    }
    const handleBtnP = () => {
        setBtnP(!btnP)
        sendFilters.size.push((btnP) ? "" : "P");
    }
    const handleBtnM = () => {
        setBtnM(!btnM)
        sendFilters.size.push((btnM) ? "" : "M");
    }
    const handleBtnG = () => {
        setBtnG(!btnG)
        sendFilters.size.push((btnG) ? "" : "G");
    }
    const handleBtnGG = () => {
        setBtnGG(!btnGG)
        sendFilters.size.push((btnGG) ? "" : "GG");
    }
    
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    sendFilters.min_price = Math.max(0, Math.min(9999, minValue))
    sendFilters.max_price = Math.max(0, Math.min(9999, maxValue))
    
    const handleChecks = () => {
        const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        if (checkedCheckboxes.item.name == 'gender')
            sendFilters.gender = Array.from(checkedCheckboxes).map(checkbox => checkbox.id);

        if (checkedCheckboxes.item.name == 'category')
            sendFilters.category = Array.from(checkedCheckboxes).map(checkbox => checkbox.id);
    }

    //#endregion

    const checkboxStyle: string = ("appearance-none rounded-sm h-4 w-4 border border-gray" +
                                        " checked:border-2 checked:outline-1 checked:border-light checked:bg-dark-gray");
    
    //#region VALUES
    const category: CategoryInterface[] = [
        {
            id: 1,
            type: 'jeans',
            description: 'Jeans'
        },
        {
            id: 2,
            type: 'tshirt',
            description: 'Camisas'
        },
        {
            id: 3,
            type: 'pants',
            description: 'Calças'
        },
        {
            id: 4,
            type: 'longshirt',
            description: 'Manga Longa'
        },
        {
            id: 5,
            type: 'sweater',
            description: 'Moletom'
        }
    ]
    //#endregion

    enum gender {
        F= 'Feminino',
        M= 'Masculino',
        U= 'Unissex',
    }
    enum size {
        PP= 'PP',
        P= 'P',
        M= 'M',
        G= 'G',
        GG= 'GG'
    }

    return(
        <div className="w-75 h-150 mt-5 bg-light rounded-sm">
            <div className="m-5 font-noto text-dark-gray text-base">

                <div className="flex">
                    <img className="mr-1" src={filter_svg} alt="" />
                    <p>Filtros</p>
                    <p>{sendFilters.gender}</p>
                </div>
                <hr className="mt-2 w-full rounded-sm" />

                <div className="mt-2">
                    <button className="flex justify-between w-full cursor-pointer outline-none" onClick={handleGender}>
                        <p>Gênero</p>
                        <img src={genderCollapse ? arrow_up : arrow_down} alt="" />
                    </button>

                    <ul className={genderCollapse ? "text-sm mt-1" : "hidden "}>
                        <li className="flex mb-1 cursor-pointer">
                            <input type="checkbox" name="gender" id="M" onChange={handleChecks} className={checkboxStyle} />
                            <p className="ml-2 content-center">{gender.M}</p>
                        </li>

                        <li className="flex mb-1 cursor-pointer">
                            <input type="checkbox" name="gender" id="F" onChange={handleChecks} className={checkboxStyle} />
                            <p className="ml-2 content-center">{gender.F}</p>
                        </li>

                        <li className="flex mb-1 cursor-pointer">
                            <input type="checkbox" name="gender" id="U" onChange={handleChecks} className={checkboxStyle}/>
                            <p className="ml-2 content-center">{gender.U}</p>
                        </li>
                    </ul>
                    <hr className={genderCollapse ? "mt-2 w-full rounded-sm  text-gray": "mt-2 w-full rounded-sm"} />
                </div>

                <div className="mt-2">

                    <button className="flex justify-between w-full cursor-pointer outline-none" onClick={handleCategory}>
                        <p>Categoria</p>
                        <img src={categoryCollapse ? arrow_up : arrow_down} alt="" />
                    </button>

                    <ul className={categoryCollapse ? "text-sm mt-1" : "hidden "}>
                        {category.map((item:any, index:number) =>(
                            <li key={index} className="flex mb-1 cursor-pointer">
                                <input type="checkbox" name="category" id={item.type} onChange={handleChecks} className={checkboxStyle}/>
                                <p className="ml-2 content-center">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                    <hr className={categoryCollapse ? "mt-2 w-full rounded-sm  text-gray": "mt-2 w-full rounded-sm"} />
                </div>
                        

                <div className="mt-2">
                    <button className="flex justify-between w-full cursor-pointer outline-none" onClick={handleSize}>
                        <p>Tamanho</p>
                        <img src={sizeCollapse ? arrow_up : arrow_down} alt="" />
                    </button>

                    <ul className={sizeCollapse ? "flex text-sm mt-3 mx-2 justify-between font-bold" : "hidden"}>

                        <li className="cursor-pointer">
                            <button onClick={handleBtnPP}
                                className={ btnPP? "w-10 h-8 rounded-xl bg-dark-gray text-light" :
                                    "w-10 h-8 rounded-xl border border-dark-gray" } >
                                {size.PP}
                            </button>
                        </li>

                        <li className="cursor-pointer">
                            <button onClick={handleBtnP}
                                   className={ btnP? "w-10 h-8 rounded-xl bg-dark-gray text-light" :
                                    "w-10 h-8 rounded-xl border border-dark-gray" } >
                                {size.P}
                            </button>
                        </li>

                        <li className="cursor-pointer">
                            <button onClick={handleBtnM}
                                className={ btnM? "w-10 h-8 rounded-xl bg-dark-gray text-light" :
                                    "w-10 h-8 rounded-xl border border-dark-gray" } >
                                {size.M}
                            </button>
                        </li>

                        <li className="cursor-pointer">
                            <button onClick={handleBtnG}
                                className={ btnG? "w-10 h-8 rounded-xl bg-dark-gray text-light" :
                                    "w-10 h-8 rounded-xl border border-dark-gray" } >
                                {size.G}
                            </button>
                        </li>

                        <li className="cursor-pointer">
                            <button onClick={handleBtnGG}
                                className={ btnGG? "w-10 h-8 rounded-xl bg-dark-gray text-light" :
                                    "w-10 h-8 rounded-xl border border-dark-gray" } >
                                {size.GG}
                            </button>
                        </li>

                    </ul>
                    <hr className={sizeCollapse ? "mt-3 w-full rounded-sm  text-gray": "mt-2 w-full rounded-sm"} />
                </div>

                <div className="mt-2">
                    <button className="flex justify-between w-full cursor-pointer outline-none" onClick={handlePrice}>
                        <p>Preço</p>
                        <img src={priceCollapse ? arrow_up : arrow_down} alt="" />
                    </button>

                    <ul className={priceCollapse ? "flex text-sm mt-3 mx-2 justify-evenly" : "hidden "}>

                        <p className="content-center">De</p>

                        <li className="outline-1 mr-4 rounded-xs text-gray h-8 w-1/3 content-center">
                            <input type="number" className="ml-2 text-base text-dark-gray outline-none w-20"
                                name="price" min={0} max={9999}
                                value={Math.max(0, Math.min(9999, minValue))}
                                onChange={(e) => { setMinValue(parseInt(e.target.value))}} />
                        </li>

                        <p className="content-center">Até</p>

                        <li className="outline-1 rounded-xs text-gray h-8 w-1/3 content-center">
                            <input type="number" className="ml-2 text-base text-dark-gray outline-none w-18"
                                name="price" min={0} max={9999}
                                value={Math.max(0, Math.min(9999, maxValue))}
                                onChange={(e) => { setMaxValue(parseInt(e.target.value))}} />
                        </li>

                    </ul>
                    <hr className={priceCollapse ? "mt-3 w-full rounded-sm  text-gray": "mt-2 w-full rounded-sm"} />
                        
                </div>

            </div>
        </div>
    )

}