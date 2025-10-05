import Carousel from "../components/carousel"

const banner_img = '/images/banner.svg'
const truck = '/logos/delivery_truck_speed.svg'
const credit = '/logos/credit_score.svg'
const savings = '/logos/savings.svg'

{/* IMAGES CARROSSEL */}

const images_fem = [
    {img_URL: '/images/category0.svg', category: "CAMISA SIMPLES", type: "Camisas"},
    {img_URL: '/images/category1.svg', category: "MANGA LONGA", type: "Novidades"},
    {img_URL: '/images/category2.svg', category: "MOLETOM", type: "Conforto"},
    {img_URL: '/images/category3.svg', category: "CASACOS", type: "Conforto"},
    {img_URL: '/images/category0.svg', category: "CAMISA SIMPLES", type: "Camisas"},
    {img_URL: '/images/category1.svg', category: "MANGA LONGA", type: "Novidades"},
]

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
                <img src={banner_img} alt="mulher" />
            </div>


            {/* DIVISORIA */}
            <div className="bg-red text-light font-bold text-sm">
                <div className="flex justify-evenly mx-10 h-20 items-center">

                    <div className="flex gap-2">
                        <img src={truck} alt="" />
                        <p className="my-1">Frete Rápido</p>
                    </div>
                    
                    <hr className="w-0.5 h-2/3 bg-light rounded-sm "/>

                    <div className="flex gap-2">
                        <img src={credit} alt="" />
                        <p className="my-1">Compra Segura</p>
                    </div>
                    
                    <hr className="w-0.5 h-2/3 bg-light rounded-sm"/>

                    <div className="flex gap-2">
                        <img src={savings} alt="" />
                        <p className="my-1">Economize com Cupons</p>
                    </div>
                    
                </div>
            </div>

            {/* CATEGORIAS*/}
            <Carousel data={images_fem} theme="FEMININAS" itemsPerView={4}></Carousel>

        </div>
    )
}