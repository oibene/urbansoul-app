import { useState } from "react";
import type { LoginInterface } from "../@types/customer";

const logo = '/logos/logo2.svg'

export default function ModalLogin(){
    const [formEmail, setFormEmail] = useState("");
    const [formPassword, setFormPassword] = useState("");

    {/* TODO: REQUISIÇÃO PRO BANCO*/}
    const handleSubmit = () => {
        const data: LoginInterface = {
            email: formEmail,
            password: formPassword
        }
    }
    
    return (
        <div className="fixed bg-light w-180 h-80 my-5 outline-1 outline-dark-gray rounded-sm">

            <div className="flex gap-5 justify-center h-full items-center font-noto text-lg text-dark-gray">

                <div className="w-75">
                    <div className="font-bold text-2xl">
                        <p>BEM VINDO</p>
                        <div className="flex">
                            <p>À</p>
                            <img src={logo} alt="" className="m-1 h-10" />
                        </div>
                    </div>

                    <p>
                        <span className="font-bold">Entre </span> ou
                        <span className="font-bold"> Crie uma conta </span>
                        para aproveitar promoções e cupons exclusivos
                    </p>
                </div>

                <hr className="w-px h-2/3 bg-gray rounded-sm"/>

                <form action="">
                    <p className="font-bold text-xl">Entre com E-mail e Senha</p>

                    <div className="my-3">
                        <div className="outline-1 rounded-xs text-gray mb-3 h-8 content-center">
                            <input type="text" className="ml-2 text-base text-dark-gray outline-none"
                            name="email" placeholder="Insira seu E-mail" size={12}
                            onChange={(e) => { setFormEmail(e.target.value)}} />
                        </div>
                        
                        <div className="outline-1 rounded-xs text-gray h-8 content-center">
                            <input type="text" className="ml-2 text-base text-dark-gray outline-none"
                            name="senha" placeholder="Insira sua Senha" size={12}
                            onChange={(e) => { setFormPassword(e.target.value)}} />
                        </div>
                    </div>

                    <a href="/account/create" className="text-base underline underline-offset-1">Não possui conta?</a>
                    
                    <div className="flex justify-center">
                        <button onSubmit={handleSubmit}
                        className="w-20 h-8 mt-4 bg-dark-gray rounded-sm content-center outline-none cursor-pointer">
                            <p className="text-lg mx-4 text-light"> Login </p>
                        </button>
                    </div>

                </form>
                
            </div>

        </div>
    )
}