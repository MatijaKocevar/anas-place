import { loremIpsumBig } from "../../../../constants/loremIpsumBig";

const ReceiptsPage = () => {
    return (
        <div className="w-full h-screen-100 max-h-screen-100 overflow-y-auto">
            <p className="text-black">{loremIpsumBig}</p>
        </div>
    );
};

export default ReceiptsPage;
