import { useParams } from 'react-router-dom';
import { useState } from 'react';
import ProductComponents from '../components/productComponent';
import type { ItemsInterface } from '../@types/products';

const star = '/logos/star_rate.svg'

interface ColorInterface{
    name: string
    hex: string
}

const item: ItemsInterface = 
{
    id: 2,
    name: "Camisa Tech Feminina",
    size: "GG",
    gender: "F",
    category: "jeans",
    color: "Preto",
    quantity: 4,
    price: 890.50,
    has_descount: true,
    descount_price: 712.00
}

const colors : ColorInterface[] = [
    {
        name: "Branco",
        hex: "bg-[#D9D9D9]"
    },
    {
        name: "Preto",
        hex: "bg-[#1E1E1E]"
    },
    {
        name: "Vermelho",
        hex: "bg-[#990100]"
    },
    {
        name: "Bege",
        hex: "bg-[#C5A385]"
    }
]

export default function ProductPage(){
    const { id } = useParams();

    const [component, setComponent] = useState("DSC")
    const [color, setColor] = useState("Preto")
    const [size, setSize] = useState("")
    const [qtd, setQtd] = useState(0)

    const rating: string = "5.0"
    const rating_int: number = parseInt(rating)
    const comments_count: number = 5

    const formatMoney = (amount: number) => {
        return amount.toLocaleString('pt-BR',
            {style: 'currency', currency:'BRL'})
    };

    const percent : string = (100 - ( (item.descount_price * 100) / item.price )).toFixed(0) + "% OFF"
    const parcel : number = parseInt((item.price / 12).toFixed(2))

    const handleColor = () => {
        const colorBtn = document.querySelector<HTMLInputElement>('input[name="color"]:checked');
        if (colorBtn != undefined)
            setColor(colorBtn?.id)
    }

    const addQtd = () => {
        if (qtd < 15)
            setQtd(qtd + 1)
        else
            setQtd(15)   
    }

    const subQtd = () => {
        if (qtd > 0)
            setQtd(qtd - 1)
        else
            setQtd(0)
    }

    return(
        <div className="flex m-10 font-noto text-dark-gray text-sm">

            <div className="w-100 bg-light">
                <div className="m-5">
                    <p className="font-bold text-xl">{item.name.toUpperCase()}</p>
                </div>

                <div className="flex m-5">
                    <div className="flex mr-8">
                        {Array.from({ length: rating_int }).map((_, index) => (
                            <img key={index} src={star} alt="" />
                        ))}
                    </div>

                    <div className="h-6 w-6 bg-light-gray rounded-sm content-center">
                        <p className="mx-0.5">{rating}</p>
                    </div>

                    <div className="ml-3 text-xs text-gray content-center">
                        <p>{comments_count} avaliações</p>
                    </div>
                </div>

                <div className="m-4 h-15 bg-light-gray rounded-sm">

                    <div className="flex mx-4 justify-between">

                        <div className="flex mt-2">
                            <p className={(item.has_descount) ? "font-bold text-green mr-2" : "font-bold"}>
                                {(item.has_descount) ? formatMoney(item.descount_price) : formatMoney(item.price)}
                            </p>
                            <p className={(item.has_descount) ? "font-bold text-gray line-through text-xs content-center" : "hidden"}>
                                {formatMoney(item.price)}
                            </p>
                        </div>

                        <p className="text-green font-bold mt-2"> {percent} </p>
                    </div>

                    <p className="mx-4 font-bold text-gray"> ou até 12x de {formatMoney(parcel)} </p>
                    
                </div>

                <div className="m-4 font-bold text-gray">
                    <div>
                        <p className="mt-2 mb-1"> Cor: <span className="font-bold">{color}</span></p>

                        {colors.map((item, index) => 
                            <input type="radio" name="color" id={item.name} onChange={handleColor} key={index}
                            className={"appearance-none rounded-full h-5 w-5 m-1 " + item.hex +
                                        " checked:border-2 checked:outline-1 checked:border-light checked:" + item.hex} />
                        )}
                    </div>
                    
                    <div>
                        <p className="mt-2 mb-1"> Tamanho: <span className="font-bold">{size}</span></p>

                        <button onClick={e => setSize('PP')}
                            className={ (size == 'PP') ? "w-10 h-8 m-1 rounded-xl bg-dark-gray text-light cursor-pointer" :
                                "w-10 h-8 m-1 rounded-xl border border-dark-gray cursor-pointer" } > PP
                        </button>

                        <button onClick={e => setSize('P')}
                            className={ (size == 'P') ? "w-10 h-8 m-1 rounded-xl bg-dark-gray text-light cursor-pointer" :
                                "w-10 h-8 m-1 rounded-xl border border-dark-gray cursor-pointer" } > P
                        </button>

                        <button onClick={e => setSize('M')}
                            className={ (size == 'M') ? "w-10 h-8 m-1 rounded-xl bg-dark-gray text-light cursor-pointer" :
                                "w-10 h-8 m-1 rounded-xl border border-dark-gray cursor-pointer" } > M
                        </button>

                        <button onClick={e => setSize('G')}
                            className={ (size == 'G') ? "w-10 h-8 m-1 rounded-xl bg-dark-gray text-light cursor-pointer" :
                                "w-10 h-8 m-1 rounded-xl border border-dark-gray cursor-pointer" } > G
                        </button>

                        <button onClick={e => setSize('GG')}
                            className={ (size == 'GG') ? "w-10 h-8 m-1 rounded-xl bg-dark-gray text-light cursor-pointer" :
                                "w-10 h-8 m-1 rounded-xl border border-dark-gray cursor-pointer" } > GG
                        </button>
                    </div>

                </div>
                
                <div className="flex justify-between mx-5">

                    <div>
                        <p className="mt-2 mb-1 text-gray">Quantidade</p>

                        <div className="flex h-10 w-20 rounded-lg outline justify-center font-bold">
                            <button className="outline-none cursor-pointer" onClick={subQtd}>-</button>
                            <p className="mx-4 content-center">{qtd}</p>
                            <button className="outline-none cursor-pointer" onClick={addQtd}>+</button>
                        </div>

                    </div>
                    
                    <button className="w-40 h-10 mt-8 bg-dark-gray rounded-sm content-center outline-none cursor-pointer">
                        <p className="text-sm font-bold mx-4 text-light"> Adicionar a Sacola </p>
                    </button>

                </div>

                <hr className="w-80 mt-5 mx-10 bg-dark-gray rounded-sm"/>

                <div className="flex m-2 justify-center">
                    <button onClick={e => setComponent('DSC')}>
                        <p className={(component == 'DSC' ? "m-2 underline underline-offset-4 decoration-red decoration-2 cursor-pointer" :
                                                            "m-2 hover:font-bold cursor-pointer")}>
                            Descrição
                        </p>
                    </button>

                    <button onClick={e => setComponent('CMP')}>
                        <p className={(component == 'CMP' ? "m-2 underline underline-offset-4 decoration-red decoration-2 cursor-pointer" :
                                                            "m-2 hover:font-bold cursor-pointer")}>
                            Composição
                        </p>
                    </button>

                    <button onClick={e => setComponent('FRT')}>
                        <p className={(component == 'FRT' ? "m-2 underline underline-offset-4 decoration-red decoration-2 cursor-pointer" :
                                                            "m-2 hover:font-bold cursor-pointer")}>
                            Frete
                        </p>
                    </button>

                    <button onClick={e => setComponent('COM')}>
                        <p className={(component == 'COM' ? "m-2 underline underline-offset-4 decoration-red decoration-2 cursor-pointer" :
                                                            "m-2 hover:font-bold cursor-pointer")}>
                            Avaliações({comments_count})
                        </p>
                    </button>
                </div>

                <div className="flex m-4">
                    <ProductComponents type={component} id={id}></ProductComponents>
                </div>

            </div>

        </div>
    )
}