'use client'
import { useState } from 'react'
import type { ItemsPriceInterface } from '../@types/products'
import type { AccountInterface } from '../@types/customer'

import ModalAccount from '../components/modalAccount'
import ModalBag from '../components/modalBag'
import ModalLogin from '../components/modalLogin'

const logo = '/logos/logo.svg'
const search_svg = '/logos/search.svg'
const bag = '/logos/shopping_bag.svg'
const account = '/logos/account_circle.svg'

{/* TODO: PUXAR DADOS DO BANCO DE DADOS */}

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
]

const accountInfo: AccountInterface = 
{
    id: 1,
    first_name: "Icaro",
    last_name: "O",
    email: "icaro@email.com"
}

export default function Header(){
    const [openAcc, setOpenAcc] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);

    const [search, setSearch] = useState("");
    
    const keydown = (event: { key: string }) => {
        if (event.key = 'Enter') {
            console.log('do validate')
        }
    }

    const handleModalAcc = () => {
        if (Object.keys(accountInfo).length === 0)
            setOpenLogin(!openLogin);
        else
            setOpenAcc(!openAcc);
    }

    const [openBag, setOpenBag] = useState(false);
    const handleModalBag = () => {
        if (bagItems.length != 0)
            setOpenBag(!openBag);
    }

    const hasItem = () => {
        if (bagItems.length == 0) return null;
        
        return (
            <div className="absolute -mt-1 ml-3 w-5 h-5 bg-red rounded-full content-center">
                <p className="flex justify-center font-bold font-noto text-light text-xs">
                    {bagItems.length}
                </p>
            </div>
        )
    }

    {/* TODO: CLICK OUTSIDE BUTTON AREA */}

    return (
    <div className="bg-light">
        <div className="flex justify-center w-full h-10 bg-dark-gray mb-2">
            <p className="text-light text-sm font-bold font-noto content-center ">UMA REVOLUÇÃO NO SEU GUARDA ROUPA</p>
        </div>

        <div className="flex mx-10 h-15 justify-between">
            <div className="content-center">
                <a href= "/">
                    <img src={logo} alt="Urban Soul" />
                </a>
            </div>

            <div className="grid grid-flow-col gap-4 content-center font-noto text-sm text-dark-gray">
                <a href="/search/M" className="hover:font-bold hover:underline underline-offset-4 decoration-red decoration-2" >Masculino</a> 
                <a href="/search/F" className="hover:font-bold hover:underline underline-offset-4 decoration-red decoration-2" >Feminino</a>
                <a href="/search/U" className="hover:font-bold hover:underline underline-offset-4 decoration-red decoration-2" >Kids</a>
            </div>

            <div className="content-center">
            <div className="flex">
                <div className="flex bg-light-gray w-40 h-5 rounded-2xl hover:border-1">
                    <img className="ml-2 h-3.5 w-3.5 my-0.5" src={search_svg} alt=""/>

                    <input type="text" className="ml-2 text-gray font-bold font-noto text-xs content-center outline-none "
                            name="filter" placeholder="Buscar" size={12}
                            onChange={(e) => { setSearch(e.target.value)}}
                            onKeyDown={keydown}/>

                </div>

                <div className="flex ml-4 gap-2">
                    {hasItem()}
                    <button className="cursor-pointer" onClick={handleModalBag}>
                        <img src={bag} alt=""/>
                    </button>

                    <button className="cursor-pointer" onClick={handleModalAcc}>
                        <img src={account} alt=""/>
                    </button>
                </div>
            </div>
            </div>
        </div>

        <div className="flex justify-end">
            { openBag && <ModalBag itens={bagItems} open={openBag} /> }
            { openAcc && <ModalAccount account={accountInfo} open={openAcc} /> }
        </div>

        <div className="flex justify-center">
            { openLogin && <ModalLogin></ModalLogin>}
        </div>

    </div>
    )
}