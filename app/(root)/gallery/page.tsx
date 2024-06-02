import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient } from "../../../utils/get-query-client";
import Gallery from "../../_components/Gallery";
import { fetchInstagramPosts } from "../../actions/instagram";

const GalleryPage = async () => {
    const queryClient = getQueryClient();
    const posts = await fetchInstagramPosts();

    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-hidden">
            <HydrationBoundary state={dehydrate(queryClient)}>
                <Gallery initialData={posts} />
            </HydrationBoundary>
        </div>
    );
};

export default GalleryPage;
