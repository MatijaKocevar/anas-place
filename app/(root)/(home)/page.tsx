import Image from "next/image";

const HomePage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto flex flex-col justify-center text-center">
            <h1 className="text-3xl font-bold text-black mb-4">Welcome to Ana&apos;s place!</h1>
            <p className="text-black mb-4">
                Experience the art of nail design with Ana&apos;s place. Our salon provides a
                relaxing atmosphere and premium services to ensure you leave feeling pampered and
                polished.
            </p>
            <p className="text-black">
                Our website is currently under construction, but soon you will be able to book
                appointments online with ease!
            </p>
            <div className="w-full flex justify-center pt-4">
                <Image src="/icons/logo.svg" width={100} height={100} alt="logo" />
            </div>
        </div>
    );
};

export default HomePage;
