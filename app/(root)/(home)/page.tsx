import Image from "next/image";

const HomePage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <div className="flex flex-col h-full items-center justify-evenly">
                <div className="w-full flex justify-center">
                    <div className="relative w-[10rem] h-[10rem] sm:w-[17rem] sm:h-[17rem]">
                        <div className="absolute inset-0 overflow-hidden rounded-full border-8 bg-primary-1 border-primary-1">
                            <Image
                                unoptimized
                                src="/images/ana.webp"
                                width={278}
                                height={278}
                                alt="logo"
                                className="object-cover"
                            />
                        </div>
                        <div className="absolute bottom-2 right-2 px-2 py-1 sm:px-4 sm:py-2 border-2 sm:border-4 border-primary-1 bg-white rounded-full z-20">
                            <span className="text-xs sm:text-base font-bold text-black">
                                Ana K.
                            </span>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-black mb-6 text-center">Dobrodošli!</h1>
                    <p className="text-black mb-4 text-center">
                        Moja spletna stran je trenutno v izdelavi, a kmalu boste lahko enostavno
                        rezervirali svoj termin kar na spletu!
                    </p>
                    <p className="text-black mb-4 text-center">
                        Medtem lahko v galeriji preverite moje delo in si zamislite kakšno idejo za
                        vaše nohte.
                    </p>
                    <p className="text-black mb-8 text-center">
                        Zaenkrat me lahko kontaktirate na telefonsko številko{" "}
                        <a href="tel:040513855" className="text-black underline">
                            040 513 855
                        </a>{" "}
                        ali preko{" "}
                        <a
                            href="https://www.instagram.com/anas.place/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black underline"
                        >
                            Instagrama
                        </a>
                        .
                    </p>
                    <p className="text-black text-center">Veselim se vašega obiska! 😊</p>
                </div>
                <div className="flex justify-center">
                    <a
                        href="/gallery"
                        className="bg-primary-1 text-black font-bold py-2 px-4 rounded-full hover:bg-accent-gold-1"
                    >
                        Pojdi v Galerijo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
