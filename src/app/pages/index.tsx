import Image from "next/image"

import banner_img from  "../../../public/images/banner.svg"
import truck from "../../../public/logos/delivery_truck_speed.svg"
import credit from "../../../public/logos/credit_score.svg"
import savings from "../../../public/logos/savings.svg"

{/* IMAGES CARROSSEL */}
import image0 from "../../../public/images/category0.svg"
import image1 from "../../../public/images/category1.svg"
import image2 from "../../../public/images/category2.svg"
import image3 from "../../../public/images/category3.svg"

{/* TODO: padronizar tamanhos */}
const images_fem = [
    {img_URL: image0, category: "CAMISA SIMPLES", type: "Camisas"},
    {img_URL: image1, category: "MANGA LONGA", type: "Novidades"},
    {img_URL: image2, category: "MOLETOM", type: "Conforto"},
    {img_URL: image3, category: "CASACOS", type: "Conforto"},
    {img_URL: image0, category: "CAMISA SIMPLES", type: "Camisas"},
    {img_URL: image1, category: "MANGA LONGA", type: "Novidades"},
]

import Carousel from "../components/carousel"

export default function Index(){
    return (
        <div className="font-noto">

            {/* BANNER */}
            <div className="flex mx-10 justify-between">
                <div className="grid grid-rows-2 gap-5 self-center font-noto text-dark-gray w-2/5 text-center">
                
                    <p className="text-6xl font-light italic">NOVA COLEÇÃO PRIMAVERA VERÃO</p>
                    
                    <div>
                        <hr className="w-5/6 h-1 bg-red rounded-sm mb-4 justify-self-center"/>
                        <p className="text-4xl font-bold">50% OFF</p>
                        <p className="text-x1 font-semibold">Em compras acima de R$ 200,00</p>
                    </div>
                    
                </div>
                <Image src={banner_img} alt="mulher"></Image>
            </div>


            {/* DIVISORIA */}
            <div className="bg-red text-light font-bold text-sm">
                <div className="flex justify-evenly mx-10 h-20 items-center">

                    <div className="flex gap-2">
                        <Image src={truck} alt=""></Image>
                        <p className="my-1">Frete Rápido</p>
                    </div>
                    
                    <hr className="w-0.5 h-2/3 bg-light rounded-sm "/>

                    <div className="flex gap-2">
                        <Image src={credit} alt=""></Image>
                        <p className="my-1">Compra Segura</p>
                    </div>
                    
                    <hr className="w-0.5 h-2/3 bg-light rounded-sm"/>

                    <div className="flex gap-2">
                        <Image src={savings} alt=""></Image>
                        <p className="my-1">Economize com Cupons</p>
                    </div>
                    
                </div>
            </div>

            {/* CATEGORIAS*/}
            <Carousel data={images_fem} theme="FEMININAS" itemsPerView={4}></Carousel>

        </div>
    )
}