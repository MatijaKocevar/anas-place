const ServicesPage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
                <div className="service-card p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold text-black">Manicure</h2>
                    <p className="text-black">
                        Treat your hands with our classic or gel manicure options that leave your
                        nails looking fresh and beautiful.
                    </p>
                    <p className="text-black font-bold">Starting at $25</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold text-black">Pedicure</h2>
                    <p className="text-black">
                        Relax with a soothing pedicure that includes a foot soak, scrub, and nail
                        polish application.
                    </p>
                    <p className="text-black font-bold">Starting at $35</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold text-black">Nail Art</h2>
                    <p className="text-black">
                        Choose from a variety of custom designs or bring your own ideas to life with
                        our expert nail artists.
                    </p>
                    <p className="text-black font-bold">Price varies</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg">
                    <h2 className="text-xl font-bold text-black">Full Set Acrylic</h2>
                    <p className="text-black">
                        Go for a complete makeover with our durable and long-lasting acrylic nails,
                        available in various shapes and sizes.
                    </p>
                    <p className="text-black font-bold">Starting at $50</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
