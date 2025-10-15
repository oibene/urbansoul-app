import { useState } from "react";
import type { ItemsPriceInterface } from "../@types/products";

const search_svg = '/logos/search.svg'

interface Transport {
    name: string;
    days: number;
    price: number;
}

interface Cupom {
    name: string;
    value: number;
}

export default function PaymentPage(){
    const [cupom, setCupom] = useState("")
    const [radio, setRadio] = useState("")

    const bagItems: ItemsPriceInterface[] = [
        {
            id: 1,
            name: "Camisa Tech Feminina",
            size: "GG",
            color: "Preto",
            quantity: 4,
            price: 890.50,
            has_descount: false,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 2,
            name: "Camisa Tech Feminina",
            size: "G",
            color: "Preto",
            quantity: 1,
            price: 890.00,
            has_descount: true,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 1,
            name: "Camisa Tech Feminina",
            size: "GG",
            color: "Preto",
            quantity: 4,
            price: 890.50,
            has_descount: false,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 2,
            name: "Camisa Tech Feminina",
            size: "G",
            color: "Preto",
            quantity: 1,
            price: 890.00,
            has_descount: true,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 1,
            name: "Camisa Tech Feminina",
            size: "GG",
            color: "Preto",
            quantity: 4,
            price: 890.50,
            has_descount: false,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 2,
            name: "Camisa Tech Feminina",
            size: "G",
            color: "Preto",
            quantity: 1,
            price: 890.00,
            has_descount: true,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 1,
            name: "Camisa Tech Feminina",
            size: "GG",
            color: "Preto",
            quantity: 4,
            price: 890.50,
            has_descount: false,
            descount_price: 712.00,
            gender: '',
            category: ''
        },
        {
            id: 2,
            name: "Camisa Tech Feminina",
            size: "G",
            color: "Preto",
            quantity: 1,
            price: 890.00,
            has_descount: true,
            descount_price: 712.00,
            gender: '',
            category: ''
        }
    ]

    const transport : Transport[] = [
        {
            name: "Sedex",
            days: 4,
            price: 0
        },
        {
            name: "Sedex2",
            days: 2,
            price: 10
        },
    ]

    const cupoms: Cupom[]  = [
        {
            name: "CUPOM100",
            value:100
        },
        {
            name: "CUPOM50",
            value:50
        },
    ]

    const validCupom : Cupom | undefined = cupoms.find(element => element.name == cupom)
    const chosenRadio : Transport | undefined = transport.find(element => element.name == radio)

    const handleRadio = () => {
        const radiocheck = document.querySelector<HTMLInputElement>('input[name="frete"]:checked');

        if (radiocheck != undefined)
            setRadio(radiocheck?.id)
    }
    
    const subtotal = bagItems.map(item =>
        (item.has_descount ? item.descount_price : item.price) * item.quantity ).reduce(
            (total: number, current: number) => total + current, 0
        );

    const itemsCount = bagItems.map(item => 
        item.quantity).reduce(
            (total: number, current: number) => total + current, 0
        );
    
    const total = subtotal -
            ((validCupom != undefined) ? validCupom?.value : 0 ) -
            ((chosenRadio  != undefined) ? chosenRadio.price : 0)

    const formatMoney = (amount: number) => {
        return amount.toLocaleString('pt-BR',
            {style: 'currency', currency:'BRL'})
    };

    const checkboxStyle: string = ("appearance-none rounded-sm h-4 w-4 border border-gray" +
                                    " checked:border-2 checked:outline-1 checked:border-light checked:bg-dark-gray");

    return(
        <div className="h-175 m-10 bg-light">
            <div className="flex content-center font-noto text-dark-gray text-sm">

                <div className="m-5 w-1/3">
                    <div>
                        <p className="font-bold text-xl">Contato</p>

                        <div className="grid grid-cols-2 gap-4 my-5">
                            <div>
                                <p className="mb-2">E-mail</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="email"
                                    className="ml-2 text-base text-dark-gray w-full outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Telefone</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="tel" name="phone"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Nome</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Sobrenome</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="lastname"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <p className="font-bold text-xl">Endereço de Entrega</p>

                        <div className="grid grid-cols-2 gap-4 my-5">

                            <div className="col-span-2">
                                <p className="mb-2 ">CEP</p>
                                 <div className="flex outline-1 rounded-xs text-gray h-8 w-1/3 content-center">
                                    <input type="text" name="postalcode" maxLength={10}
                                    className="ml-2 text-base text-dark-gray w-full outline-none"/>
                                    <img src={search_svg} alt="" className="h-4 w-4 m-2"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Endereço</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="address"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Número</p>
                                 <div className="outline-1 rounded-xs text-gray w-1/4 h-8 content-center">
                                    <input type="text" name="number" maxLength={5}
                                    className="ml-2 text-base text-dark-gray w-full outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Complemento</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="complement"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Bairro</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="district"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Cidade</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="city"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Estado</p>
                                 <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="state"
                                    className="ml-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <hr className="w-0.5 m-10 h-150 bg-gray rounded-sm"/>

                <div>
                    <ul className="m-5 h-65 overflow-y-auto">
                        {bagItems.map((item, index) => (
                            
                            <li key={index} className="flex outline rounded-sm m-2">

                                <div className="m-2 flex">
                                    {/* TODO: ADICIONAR IMAGEM DOS ITENS*/}
                                    <div className="h-15 w-15 mx-2 bg-light-gray self-center">
                                        
                                        <div className="-mt-1 -ml-2 w-5 h-5 bg-dark-gray rounded-full content-center">
                                            <p className="flex justify-center font-bold font-noto text-light text-xs">
                                                {item.quantity}
                                            </p>
                                        </div>
                                        
                                    </div>

                                    <div className="flex font-noto text-dark-gray text-sm">
                                        <div className="w-1/2">
                                            <p>{item.name}</p>
                                            <p className="text-xs font-bold">{item.size}/{item.color}</p>
                                        </div>
                                            
                                        <div className="font-bold mt-1 content-center">
                                            <p className={item.has_descount ? "text-gray text-xs mr-4 line-through" : ""}>
                                                {formatMoney(item.price)}
                                            </p>
                                            <p className={item.has_descount ? "" : "hidden"}>{formatMoney(item.descount_price)}</p>
                                        </div>

                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="w-full h-5 content-center">
                        <div className="font-noto text-dark-gray text-sm font-bold mx-4">

                            <div className="flex font-normal">

                                <p className="mr-10 mb-5 w-20 text-xs">Cupom de Desconto</p>

                                <div className="outline-1 rounded-xs text-gray h-8 w-50 content-center">
                                    <input type="text" name="email" placeholder="Insira Cupom" onChange={(e) => { setCupom(e.target.value)}}
                                    className="mx-2 text-xs text-dark-gray w-45 outline-none"/>
                                </div>
                            </div>

                            <p className="text-xs"> {itemsCount} Itens</p>

                            <hr className="my-1"/>

                            <div className="flex justify-between">
                                <p>Subtotal</p>
                                <p>{formatMoney(subtotal)}</p>
                            </div>

                                <div className={(validCupom != undefined) ? "flex mt-1 justify-between" : "hidden"}>
                                    <p>{validCupom?.name}</p>
                                    <p> - {(validCupom != undefined) ? formatMoney(validCupom?.value) : ""}</p>
                                </div>

                                <hr className="my-1"/>

                                <div>
                                    <p>Frete</p>

                                <ul className="mt-2">
                                    {transport.map((item, index) => (
                                        <li key={index} className="flex mb-1">
                                            <input type="radio" name="frete" id={item.name} onChange={handleRadio} className={checkboxStyle}/>

                                            <p className="ml-2 font-normal">
                                                <span className="font-bold">{item.name}</span>
                                                - Entrega em {item.days} dias </p>

                                            <p className="font-normal ml-15"> {formatMoney(item.price)}</p>
                                        </li>
                                    ))}
                                </ul>

                            </div>

                            <hr className="my-1"/>

                            <div className="flex justify-between">
                                <p>Total</p>
                                <p>{formatMoney(total)}</p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-10">
                            <button className="w-25 h-8 mt-4 mr-4 outline-2 rounded-sm content-center cursor-pointer">
                                <p className="text-sm font-bold mx-4 text-dark-gray"> Cancelar </p>
                            </button>

                            <button className="w-60 h-8 mt-4 bg-dark-gray rounded-sm content-center outline-none cursor-pointer">
                                <p className="text-sm font-bold mx-4 text-light"> Continuar para pagamento </p>
                            </button>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
    )
}