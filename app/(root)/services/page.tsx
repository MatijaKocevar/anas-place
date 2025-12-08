const ServicesPage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
                    <h2 className="text-xl font-bold text-black">GELIRANI NOHTI dolgi</h2>
                    <p className="text-black">
                        Podaljšajte in okrepite svoje nohte z našimi dolgimi geliranimi nohti, ki
                        zagotavljajo trajnost in lep videz.
                    </p>
                    <p className="text-black font-bold">Cene se začnejo pri 30 €</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
                    <h2 className="text-xl font-bold text-black">GELIRANI NOHTI kratki</h2>
                    <p className="text-black">
                        Uživajte v naravnem videzu s kratkimi geliranimi nohti, ki nudijo zaščito in
                        čudovit sijaj.
                    </p>
                    <p className="text-black font-bold">Cene se začnejo pri 20 €</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
                    <h2 className="text-xl font-bold text-black">Popravilo nohta na rokah</h2>
                    <p className="text-black">
                        Hitro in učinkovito popravilo poškodovanega nohta, da bodo vaše roke vedno
                        videti urejene.
                    </p>
                    <p className="text-black font-bold">Cena 5 €</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
