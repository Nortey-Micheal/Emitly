export default function Hero() {
    return (
        <div className="h-80 borde px-5 gap-12 flex flex-col my-16 text-center max-w-[800px] mx-auto">
            <h1 className="text-center text-lg text-slate-700">Welcome to Emitly</h1>
            <p className="text-6xl font-medium">Send,Recieve, and Trade <span className="text-blue-400">Across Borders</span> with Emitly</p>
            <p className="text-slate-700 text-lg">Unlock a world of financial possibility-send and receive money in major currencies, trade crypto, and exchange gift cards, all in one secure app.</p>
            <button className="hover:cursor-pointer hover:bg-blue-100 hover:text-blue-500 bg-blue-500 py-3 px-6 rounded-3xl text-blue-50 font-bold w-fit self-center">Download App</button>
        </div>
    )
}