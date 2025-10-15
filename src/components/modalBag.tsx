import type { ItemsPriceInterface } from "../@types/products";
const delete_icon = '/logos/delete.svg'

interface ModalBagProps {
    itens:ItemsPriceInterface[];
    open: boolean;
}

export default function ModalBag(data: ModalBagProps) {
    if (!data.open) return null;
    
    // soma valores totais sem se preocupar com descontos
    const subtotal = data.itens.map(item => 
        item.price * item.quantity).reduce(
            (total: number, current: number) => total + current, 0
        );

    // soma apenas descontos, se nao possui, soma 0
    const descounts = data.itens.map(item => 
        (item.has_descount ? (item.price - item.descount_price) : 0) * item.quantity ).reduce(
            (total: number, current: number) => total + current, 0
        );

    // se possui descontos, ele soma o valor do desconto, se não, soma valor inteiro
    const total = data.itens.map(item =>
        (item.has_descount ? item.descount_price : item.price) * item.quantity ).reduce(
            (total: number, current: number) => total + current, 0
        );

    const itemsCount = data.itens.map(item => 
        item.quantity).reduce(
            (total: number, current: number) => total + current, 0
        );

    const formatMoney = (amount: number) => {
        return amount.toLocaleString('pt-BR',
            {style: 'currency', currency:'BRL'})
    };

    return(
        <div className="absolute w-100 h-140 bg-light-gray font-noto outline-1 outline-dark-gray mt-2 mr-2 rounded-sm">

            <div className="w-full h-15 bg-light content-center row-end-1">
                <div className="flex mx-4 font-bold text-dark-gray text-base justify-between">
                    <p>MINHA SACOLA</p>
                    <button className="cursor-pointer">X</button>
                </div>
            </div>

            <div>
                <ul className="m-5 h-65 overflow-y-auto">
                    {data.itens.map((item, index) => (
                        <li key={index} className="flex bg-light my-2 rounded-+sm">

                            <div className="m-2 flex">
                                {/* TODO: ADICIONAR IMAGEM DOS ITENS*/}
                                <div className="h-15 w-15 mx-2 bg-light-gray self-center">
                                    <div className="absolute -mt-1 -ml-2 w-5 h-5 bg-dark-gray rounded-full content-center">
                                        <p className="flex justify-center font-bold font-noto text-light text-xs">
                                            {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <div className="font-noto text-dark-gray text-sm">
                                    <p>{item.name}</p>
                                    <p className="text-xs font-bold">{item.size}/{item.color}</p>

                                    <div className="flex font-bold mt-1">
                                        <p className={item.has_descount ? "text-gray text-xs mr-4 line-through" : ""}>
                                            {formatMoney(item.price)}
                                        </p>
                                        <p className={item.has_descount ? "" : "hidden"}>{formatMoney(item.descount_price)}</p>
                                    </div>

                                </div>

                                <button className="cursor-pointer flex ml-20 text-dark-gray">
                                    <img src={delete_icon} alt="" />
                                </button>
                            </div>
                        </li>
                    ))}

                </ul>

            </div>

            <div className="w-full h-50 bg-light content-center">
                <div className="font-noto text-dark-gray text-sm font-bold mx-4">

                    <div className="flex my-1 justify-between">
                        <hr className="my-1 w-1/3"/>

                        <p className="text-xs">
                            {itemsCount} Itens
                        </p>

                        <hr className="my-1 w-1/3"/>

                    </div>

                    <div className="flex justify-between">
                        <p>Subtotal</p>
                        <p>{formatMoney(subtotal)}</p>
                    </div>
                    <hr className="my-1"/>

                    <div className="flex justify-between">
                        <p>Descontos</p>
                        <p>{formatMoney(descounts)}</p>
                    </div>
                    <hr className="my-1"/>

                    <div className="flex justify-between">
                        <p>Total</p>
                        <p>{formatMoney(total)}</p>
                    </div>
                </div>

                <div className="flex justify-center mt-2">
                    <a href="/pay" className="cursor-pointer text-base text-bglight bg-dark-gray font-bold p-2 rounded-2xl">
                        Finalizar Compra
                    </a>
                </div>
                
            </div>

        </div>
    )
}