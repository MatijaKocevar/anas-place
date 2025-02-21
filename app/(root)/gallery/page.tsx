import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../../../utils/get-query-client";
import { Construction } from "lucide-react";

const GalleryPage = async () => {
    const queryClient = getQueryClient();

    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-hidden">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                    <Construction className="w-16 h-16 text-yellow-500 animate-pulse" />
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                        Galerija kmalu na voljo
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                        Trudimo se ustvariti izjemno galerijsko izkušnjo za vas. Oglejte si ponovno
                        kmalu!
                    </p>
                </div>
            </HydrationBoundary>
        </div>
    );
};

export default GalleryPage;
