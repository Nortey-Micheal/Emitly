export default function Benefits() {
    return (
        <div className="max-w-[1100px] w-[95vw] mx-auto mb-[70px]">
            <div className="mb-30 text-center text-lg/relaxed lg:text-2xl/relaxed ">
                <h3 className="text-3xl lg:text-4xl mb-8 font-bold text-center">Platform Benefit</h3>
                <p className="mb-5">Our platform offers unparalleled efficiency and reliability, ensuring that your operations run smoothly and without interruption. With state-of-the-art technology and a user-friendly interface, you can easily manage your tasks and achieve your goals.</p>
    
            </div>
            <div className="card card-side container flex flex-col  lg:flex-row rounded-2xl shadow-blue-400 shadow-sm">
                <figure>
                    <img
                    className=" h-[300px] lg:w-9/2 lg:h-[620px] lg:im"
                    src="/assets/images/finApp.gif"
                    alt="Movie" />
                </figure>
                <div className="card-body gap-7 lg:w-6/5 lg:gap-y-0">
                    <h2 className="card-title text-2xl lg:text-4xl pb-5">Manage your finance digitally in on Plateform</h2>
                    <p className="text-lg/relaxed text-[20px] lg:text-[1.3rem] text-slate-800">Our platform simplifies financial management by providing intuitive tools and real-time insights. Stay on top of your finances with ease and make informed decisions to achieve your financial goals.</p>
                    <div className="card-actions rounded-2xl justify-end -mx-5 lg:mx-0 w-[90vw] lg:w-full">
                        <ul className="list rounded-2xl w-full shadow-md">                            
                            <li className="list-row items-center hover:bg-blue-500 hover:text-blue-50 rounded-2xl">
                                <div><img className="size-10 rounded-box" src="/assets/icons/metaverse.png"/></div>
                                <div>
                                    <h5 className="font-bold text-[1.1rem]/relaxed">Efficient Task Management</h5>
                                    <div className="text-[18px] font-semibold opacity-60">Streamline your workflow with our efficient task management tools.</div>
                                </div>
                            </li>
                            
                            <li className="list-row items-center hover:bg-blue-500 hover:text-blue-50 rounded-2xl">
                                <div><img className="size-10 rounded-box" src="/assets/icons/metaverse(1).png"/></div>
                                <div>
                                    <h5 className=" font-bold text-[1.1rem]/relaxed">Real-Time Insights</h5>
                                    <p className="text-[18px] font-semibold opacity-60">Gain valuable insights with our real-time data analytics.</p>
                                </div>
                                
                            </li>
                            
                            <li className="list-row items-center hover:bg-blue-500 hover:text-blue-50 rounded-2xl">
                                <div><img className="size-10 rounded-box" src="/assets/icons/metaverse(2).png"/></div>
                                <div>
                                    <h5 className=" font-bold text-[1.1rem]/relaxed">Robust Security</h5>
                                    <p className="text-[18px] font-semibold opacity-60">Protect your data with our robust security features.</p>
                                </div>
                            </li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}