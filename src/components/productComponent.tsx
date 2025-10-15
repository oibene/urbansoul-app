interface ProductComponentsProps{
    type: string,
    id: string | undefined
}

const desc = ("Camisa Tech Feminina - Leve, respirável e de secagem rápida, com modelagem ajustada que valoriza o corpo e garante conforto em qualquer ocasião." +
"Características: Tecido tecnológico de alta performance; Secagem rápida e respirabilidade; Leve, elástico e confortável;" +
"Modelagem feminina levemente ajustada;Ideal para treinos, viagens e uso diário")

const composition = ("70% poliester; 30% algodão")



export default function ProductComponents(data : ProductComponentsProps) {

    //#region DESCRIPTION TREATMENT

    var title: string = "";
    var first_part: string = "";
    var second_title: string = "";
    var second_part: string = "";

    if (desc.indexOf('-') !== -1)
        title = desc.slice(0, desc.indexOf('-') +1);
    
    if (desc.indexOf(':') !== -1)
        second_title = desc.slice(desc.indexOf('.') +1, desc.indexOf(':')+1)

    if (desc.indexOf('.') !== -1){
        first_part = desc.slice( ((title != "") ? desc.indexOf('-')+1 : 0) , desc.indexOf('.'))
        second_part = desc.slice( ((second_title != "") ? desc.indexOf(":")+1 : desc.indexOf('.') + 1) , desc.length)
    }

    const second_part_items: string[] = second_part.split(';');

    //#endregion

    //#region COMPOSITION TREATMENT
        const composition_items: string[] = composition.split(';');
    //#endregion


    if (data.type == 'DSC') {
        return (
            <div className="w-75 text-sm font-noto">
                <p>
                    <span className="font-bold">
                        {title}
                    </span>
                    {first_part}
                </p>

                <p className="mt-2 font-bold">
                    {second_title}
                </p>

                <ul className="ml-5 list-disc">
                    {second_part_items.map((item) => 
                        <li>{item}</li>
                    )}
                </ul>
            </div>
        )
    }

    if (data.type == "CMP"){
        return(
            <div>
                <ul className="ml-5 list-disc">
                    {composition_items.map((item) => 
                        <li>{item}</li>
                    )}
                </ul>
            </div>
        )
    }

    if (data.type == "FRT"){
        return(
            <div>
                
            </div>
        )
    }

    if (data.type == "COM"){
        return(
            <div>
                
            </div>
        )
    }

    return (<div></div>)
}