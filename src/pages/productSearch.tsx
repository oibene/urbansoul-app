import { useParams } from "react-router-dom";
import type { ItemsFilterInterface, ItemsInterface } from "../@types/products"
import Filters from "../components/filters"

import img_placeholder from '/images/item_img.svg'

export default function ProductSearch() {
    const { product } = useParams();

    const formatMoney = (amount: number) => {
        return amount.toLocaleString('pt-BR',
            {style: 'currency', currency:'BRL'})
    };

    const percent = (price: number, descount: number) => {
        const descountValue = 100 -( (descount * 100) / price )

        return descountValue.toString() + "% OFF"
    }
    
    //#region so much data
    const items: ItemsInterface[] = [
        {
            id: 1,
            name: "Camisa Tech Feminina",
            size: "GG",
            gender: "F",
            category: "jeans",
            color: "Preto",
            quantity: 4,
            price: 890.50,
            has_descount: false,
            descount_price: 712.00
        },
        {
            id: 2,
            name: "Camisa Tech Feminina",
            size: "G",
            gender: "U",
            category: "sweater",
            color: "Preto",
            quantity: 1,
            price: 890.00,
            has_descount: true,
            descount_price: 712.00
        },
    ]
    
    //#endregion

    var itemsFiltered:  ItemsInterface[] = items.filter(
        item => item.category == 'sweater'
    )

    function filterCallback(filter: any) {
        console.log(filter)
    }
    
    return(
        <div className="flex m-10">

            <Filters callback={filterCallback}></Filters>
            
            <div className="w-full bg-light ml-10 rounded-sm">

                <div className="bg-bglight h-10 m-5">
                    {/* TODO: SISTEMA DE FILTROS DE ORDENAÇÃO E EXIBIR FILTROS USADOS*/}

                </div>

                <div className="grid grid-cols-5 overflow-y-scroll h-170 gap-5 m-5">
                    
                    {itemsFiltered.map((item) => 
                        <a href={"/product/" + item.id} key={item.id} className="w-60 h-80 bg-bglight rounded-md">

                            <div className="mx-4">
                                
                                <img className="w=50 h-60" src={img_placeholder} alt="" />

                                <div className="mt-2 font-noto text-dark-gray text-sm">
                                    <p>{item.name}</p>

                                    <div className="flex">

                                        <p className={(item.has_descount)? "font-bold content-center" : "hidden"}>
                                            {formatMoney(item.descount_price)}
                                        </p>

                                        <p className={(item.has_descount)? "content-center ml-2 text-gray text-xs line-through font-bold"
                                            : "content-center font-bold"}>
                                            {formatMoney(item.price)}
                                        </p>

                                        <p className={(item.has_descount)? "content-center ml-3 font-bold text-xs text-green" : "hidden"}>
                                            {percent(item.price, item.descount_price)}
                                        </p>

                                    </div>

                                </div>

                            </div>
                            

                        </a>
                    )}

                </div>


            </div>
            
        </div>
    )
}