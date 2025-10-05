const logo = '/logos/logo2.svg'

export default function ModalLogin(){
    return (
        <div className="fixed bg-light w-125 h-60 my-5 outline-1 outline-dark-gray rounded-sm">

            <div className="flex gap-5 justify-center h-full items-center font-noto text-sm text-dark-gray">

                <div className="w-50">

                    <div className="font-bold text-lg">
                        <p>BEM VINDO</p>
                        <div className="flex">
                            <p>À</p>
                            <img src={logo} alt="" className="m-1" />
                        </div>
                    </div>

                    <p>
                        <span className="font-bold">Entre </span> ou
                        <span className="font-bold"> Crie uma conta </span>
                        para aproveitar promoções e cupons exclusivos
                    </p>
                </div>

                <hr className="w-px h-2/3 bg-gray rounded-sm"/>

                <div>
                    <p className="font-bold text-base">Entre com E-mail e Senha</p>

                    <div className="my-3">
                        <div className="outline-1 rounded-xs text-gray mb-3 h-6 content-center">
                            <input type="text" className="ml-2 text-xs text-dark-gray outline-none"
                            name="email" placeholder="Insira seu E-mail" size={12} />
                        </div>
                        
                        <div className="outline-1 rounded-xs text-gray h-6 content-center">
                            <input type="text" className="ml-2 text-xs text-dark-gray outline-none"
                            name="senha" placeholder="Insira sua Senha" size={12} />
                        </div>
                    </div>

                    <a href="#" className="text-sm underline underline-offset-1">Não possui conta?</a>
                </div>

            </div>

        </div>
    )
}