import Image from "next/image";

const HomePage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <div className="flex flex-col h-full items-center justify-evenly">
                <div className="w-full flex justify-center">
                    <div className="w-[17rem] h-[17rem] overflow-hidden rounded-full border-8 bg-primary-1 border-primary-1">
                        <Image
                            src="/images/ana.webp"
                            width={278}
                            height={278}
                            alt="logo"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-black mb-4 text-center">
                        Welcome to Ana&apos;s place!
                    </h1>
                    <p className="text-black mb-4 text-center">
                        Experience the art of nail design with Ana&apos;s place. Our salon provides
                        a relaxing atmosphere and premium services to ensure you leave feeling
                        pampered and polished.
                    </p>
                    <p className="text-black text-center">
                        Our website is currently under construction, but soon you will be able to
                        book appointments online with ease!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
