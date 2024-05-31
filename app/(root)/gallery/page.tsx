import { getInitialInstagramPosts } from "../../../actions/instagram.actions";
import Gallery from "../../_components/Gallery";

const GalleryPage = async () => {
    const initialData = await getInitialInstagramPosts();

    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto hidden-scrollbar">
            <Gallery initialData={initialData} />
        </div>
    );
};

export default GalleryPage;
