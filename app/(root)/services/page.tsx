const ServicesPage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <div className="flex flex-col gap-4 w-full max-w-2xl mx-auto">
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
                    <h2 className="text-xl font-bold text-black">Manicure</h2>
                    <p className="text-black">
                        Treat your hands with our classic or gel manicure options that leave your
                        nails looking fresh and beautiful.
                    </p>
                    <p className="text-black font-bold">Starting at $25</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
                    <h2 className="text-xl font-bold text-black">Nail Art</h2>
                    <p className="text-black">
                        Choose from a variety of custom designs or bring your own ideas to life with
                        our expert nail artists.
                    </p>
                    <p className="text-black font-bold">Price varies</p>
                </div>
                <div className="service-card p-4 shadow-lg rounded-lg bg-white">
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
