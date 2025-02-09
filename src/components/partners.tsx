type PartnersProps = {
    partners: string[]
}

export default function Partners({partners}:PartnersProps) {
    return (
        <div className=" container flex flex-col lg:flex-row items-center justify-center pt-[200px] lg:py-[10px] ">
            <div className="text-slate-500 lg:text-2xl">
                <p className="font-bold">Our support partners</p>
                <p>Over 30+ Partners</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-around w-3/4">
                {partners.map(partner => (
                    <img className="w-30 h-30 self-center" src={partner} alt="" />
                ))}
            </div>
        </div>
    )
}