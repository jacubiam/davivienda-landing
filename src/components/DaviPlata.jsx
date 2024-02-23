const DaviPlata = () => {
    return <>
            <section className=" flex flex-wrap justify-between content-center text-center items-center relative max-w-[1280px] mb-10 mx-4 md:justify-evenly md:mx-auto lg:justify-around bg-red-600 p-5">
            <div className="max-full text-center p-5 sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]">
                <p className="text-center text-white text-2xl">
                ¡Mientras tanto,  <span className="font-bold">aprovecha para descargar la aplicación, </span><span className=" text-white italic font-bold underline underline-offset-8">DaviPlata</span> en las plataformas disponibles!
                </p>
                <div className="flex flex-wrap justify-between items-center relative max-w-[1280px] mb-10 mx-4 my-8 md:justify-evenly md:mx-auto lg:justify-around">
                    <a href="https://itunes.apple.com/sv/app/daviplata-el-salvador/id1441370114?mt=8" target="_blank" className="block rounded-lg text-white font-bold text-lg bg-black p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-rgray-300 hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">App Store</a>
                    <a href="https://play.google.com/store/apps/details?id=imoves.com.daviplata&hl=es" target="_blank" className="block rounded-lg text-white font-bold text-lg bg-black p-5 mb-5 w-fit mx-auto sm:text-2xl md:mx-0 hover:bg-gray-300  hover:shadow-xl hover:shadow-slate-950/40 hover:scale-105">Google Play</a>
                </div>
            </div>
            <div className="mx-auto">
                <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708690046/davi/zwe2pjq1rqr1f9d1gzhm.webp"
                    alt="daviplata" className="w-full rounded-[10%] sm:max-w-[calc(200px+4vw)] md:max-w-[calc(200px+3vw)] lg:max-w-[200px] " />
            </div>
        </section>
    </>
}
export default DaviPlata