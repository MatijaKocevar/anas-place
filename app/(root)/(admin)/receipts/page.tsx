import { Construction } from "lucide-react";

const ReceiptsPage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <div className="flex flex-col items-center justify-center h-full space-y-4">
                <Construction className="w-16 h-16 text-yellow-500 animate-pulse" />
                <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                    Računi kmalu na voljo
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                    Trudimo se vzpostaviti sistem za upravljanje računov. Oglejte si ponovno kmalu!
                </p>
            </div>
        </div>
    );
};

export default ReceiptsPage;
