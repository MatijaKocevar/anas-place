import Gallery from "../../_components/Gallery";

const GalleryPage = async () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto hidden-scrollbar">
            <Gallery />
        </div>
    );
};

export default GalleryPage;
