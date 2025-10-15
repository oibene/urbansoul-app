import { useParams } from 'react-router-dom';

const add_photo = '/logos/add_photo.svg'
const person = '/logos/person_big.svg'

export default function Account() {
    const { variant } = useParams();


    return(
       <div className="w-250 h-145 m-10 bg-light">
            <div className="m-4 content-center font-noto text-dark-gray text-sm">

                <div className="m-10">

                    <div>
                        <p className="text-xl font-bold">
                            {(variant == 'create') ? 'Crie Sua Conta' : 'Sua Conta'}
                        </p>

                        <p className={(variant == 'create') ? "text-xs mt-2" : "hidden"}>
                            Crie sua conta e aproveite nossas promoções e cupons exclusivos
                        </p>
                    </div>

                    <div className="flex my-10">
                        <div className="grid grid-cols-2 gap-4">
                        
                            <div>
                                <p className="mb-2">Nome</p>
                                <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="mx-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Sobrenome</p>
                                <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="mx-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div className="col-span-2">
                                <p className="mb-2">E-mail</p>
                                <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="mx-2 text-base text-dark-gray w-145 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Senha</p>
                                <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="mx-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                            <div>
                                <p className="mb-2">Confirme Senha</p>
                                <div className="outline-1 rounded-xs text-gray h-8 content-center">
                                    <input type="text" name="name"
                                    className="mx-2 text-base text-dark-gray w-70 outline-none"/>
                                </div>
                            </div>

                        </div>

                        <div className={(variant == 'create') ? "hidden" : "ml-15 mt-5 w-35"}>
                            <div className="w-35 h-35 rounded-lg outline-2 text-gray">
                                <img className="m-2" src={person} alt="" />
                            </div>

                            <a className="flex mt-2" href="#">
                                <img src={add_photo} alt="" />
                                <p className="ml-2 text-xm">
                                    adicionar uma foto
                                </p>
                            </a>

                        </div>

                    </div>

                    <div className="flex justify-between w-125">
                        <div className={(variant == 'create') ? "w-60" : "hidden"}>
                            <p>Ao clicar em Continuar você concorda com nossos
                            <a href="#" className="font-bold underline mx-1">Termos de Uso</a>
                            e
                            <a href="#" className="font-bold underline mx-1">Politica de Privacidade.</a>
                            </p>
                        </div>

                        <div className="flex">

                            <a href="/" className={(variant == 'create') ? "hidden" :
                                                "w-25 h-8 mt-4 mr-4 outline-2 rounded-sm content-center cursor-pointer"}>
                                <p className="text-sm font-bold mx-4 text-dark-gray"> Cancelar </p>
                            </a>

                            <button className="w-30 h-8 mt-4 bg-dark-gray rounded-sm content-center outline-none cursor-pointer">
                                <p className="text-sm font-bold mx-4 text-light"> Continuar </p>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}