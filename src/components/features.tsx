export default function Features() {
    const features = [
        {
            title: 'Quick Currency Exchange',
            description: 'Our app supports multiple global currencies, allowing you to send money to family, friends, and business partners around the world in just a few steps.'
        },
        {
            title: 'Low Transfer Fees',
            description: 'We believe in transparency, which is why our currency exchange rates and transfer fees are clearly displayed before you confirm any transaction.'
        },
        {
            title: 'Real-Time Updates',
            description: "Track the status of every transfer in real-time, with updates sent directly to your device, so you're always informed."
        },
        {
            title: 'Diverse Crypto Selection',
            description: 'Trade in popular cryptocurrencies like Bitcoin, Ethereum, Litecoin, and more. Our platform ensures liquidity and competitive rates for all transactions.'
        },
        {
            title: 'Popular Gift Card Support',
            description: 'Redeem and exchange gift cards from major brands-whether for cash or crypto-quickly and with no hidden costs.'
        },
        {
            title: 'Assets Security',
            description: 'All digital assets are safeguarded in secure wallets with top-tier encryption and anti-hack protocols.'
        }
    ]

    return (
        <div className="container w-[90vw]">
            <div className="text-center text-lg/relaxed lg:text-2xl/relaxed mb-15">
                <h3 className="text-3xl lg:text-4xl mb-8 font-bold">Emitly Features</h3>
                <p className="text-slate-800">Here are the frequently asked questions from our friends and customers.</p>
                <p className="text-slate-800">Look through to get insight on how we can serve you better.</p>
            </div>
            <div className="flex flex-col w-[100vw] -mx-5 flex-wrap max-w-[1500px] lg:flex-row gap-x-20 lg:mx-auto">
                {features.map(feature => (
                    <div className="items-center mb-20 shadow-lg shadow-blue-200 w-[95vw] mx-auto h-[350px] lg:w-[400px] rounded-2xl p-5 flex flex-col justify-between">
                        <img className=" w-13 lg:w-17 aspect-square bg-blue-400 rounded-lg" src="/assets/icons/feature.svg" alt="" />
                        <h4 className="font-bold text-lg">{feature.title}</h4>
                        <p className="text-lg/snug text-center text-slate-700">{feature.description}</p>
                        <a className="hover:underline decoration-2 text-blue-500 font-bold" href="">Get started</a>
                    </div>
                ))}
            </div>
        </div>
    )
}