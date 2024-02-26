export const PerfilHackathon = () => {
    return (
        <>
            <section id="participantes" className="py-16">
                <div name="PerfilHackathon" className="container mx-auto rounded-xl shadow-md my-4">
                    <div className="bg-red-600 md:grid md:grid-flow-col md:grid-cols-2 justify-center gap-5 p-5 rounded-t-xl">
                        <div className="content-center tracking-wide m-auto">
                            <p className="text-xl md:text-4xl lg:text-5xl text-center text-balance align-middle p-5 text-white font-medium">
                                Si tienes entre <span className="text-cyan-900 bg-white rounded-full px-2">18</span> y <span className="text-cyan-900 bg-white rounded-full px-1">
                                    29</span> años,
                                ¡acepta el desafío! Junto con tu equipo, 
                                <span className="font-extrabold"> podrían ganar hasta $3000 dólares</span>.
                            </p>
                        </div>
                        <div className="tracking-wide m-auto">
                            <img src="https://res.cloudinary.com/dyhftwfrw/image/upload/v1708690740/davi/p2vuvs8bwbiin9otgfdm.jpg"
                                className="w-full rounded-[10%] block mx-auto p-5 sm:max-w-[calc(270px+4vw)] md:max-w-[calc(350px+3vw)] md:text-start lg:max-w-[500px]"
                                alt="hombre con laptop" />
                        </div>
                    </div>

                    <div className="md:grid md:grid-flow-rows md:grid-cols-auto bg-gray-200 rounded-md">
                        <div className="tracking-wide pt-4 lg:flex md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923931/Davivienda-landing/j3o6ew7n5lcpopjzddp8.png"
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Reto" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    El Reto
                                </span>
                            </div>
                            <p className="lg:w-1/2 text-center sm:text-center lg:text-left sm:text-xl text-balance font-medium lg:text-2xl pt-10 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-3 lg:my-5">
                                Diseñar la oferta de valor y experiencia para los jóvenes universitarios que fortalezca el ecosistema digital
                                de pagos en la universidades.
                            </p>
                        </div>

                        <div className="lg:flex tracking-wide p-4 md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-md m-1 h-auto">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                                <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923960/Davivienda-landing/m15568pq46o3vyhkqv0x.png"
                                    className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                    alt="Participantes" />
                                <span className="block font-bold text-2xl text-center mx-auto">
                                    ¿Quiénes participan?
                                </span>
                            </div>
                            <div className="block lg:w-1/2 ">
                                <p className="block text-xl sm:text-center lg:text-left text-balance font-medium pt-2 pb-4 px-[calc(1.5rem+5vw)] sm:px-20 md:px-2">
                                    Equipos de 2 a 5 personas conformados por estudiantes, egresados y graduados de Universidades de El Salvador,
                                    de cualquier carrera afín a tecnología, administración de empresas y diseño.
                                </p>
                                <h2 className="text-xl font-bold pt-2 px-[calc(1.5rem+5vw)] sm:px-20 md:px-2">Carreras</h2>
                                <ul className="mx-auto font-medium text-xl text-wrap pt-2 pb-4 px-[calc(1.5rem+5vw)] sm:px-20 md:px-2">
                                    <li className="py-1 tracking-wide">- Lic. En Innovación y Transformación Digital</li>
                                    <li className="py-1 tracking-wide">- Ing. En Software y Negocios Digitales</li>
                                    <li className="py-1 tracking-wide">- Ingeniería Industrial, Informática, en Sistemas y de Negocios</li>
                                    <li className="py-1 tracking-wide">- Diseño Estratégico</li>
                                    <li className="py-1 tracking-wide">- Comunicación y Estrategia Digital</li>
                                    <li className="py-1 tracking-wide">- Administración de Empresas y Mercadeo</li>
                                    <li className="py-1 tracking-wide">- Ciencia de Datos (Desarrolladores / programadores)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="tracking-wide pt-4 lg:flex md:border-r md:border-l backdrop-blur-md bg-white/90 rounded-xl m-1">
                            <div className="lg:w-1/2 lg:my-5 lg:drop-shadow-md lg:p-1">
                            <img src="https://res.cloudinary.com/dbhtbf2uu/image/upload/v1708923984/Davivienda-landing/fynovvllmkwocdpobkfw.png"
                                className="w-2/6 md:w-24 lg:w-40 block mx-auto my-2"
                                alt="Mockup" />
                            <span className="block font-bold text-2xl text-center mx-auto">
                                ¿Qué se debe entregar?
                            </span>
                            </div>
                            <p className="lg:w-1/2 text-center sm:text-xl lg:text-2xl sm:text-center lg:text-left text-balance font-medium pt-8 pb-9 px-[calc(1.5rem+5vw)] sm:px-16 md:px-4 xl:px-3">
                                Durante el evento de la Hackathon los equipos deben conceptualizar, prototipar a nivel de mockups y desarrollar
                                la nueva oferta de valor dentro de Daviplata y su código de desarrollo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
