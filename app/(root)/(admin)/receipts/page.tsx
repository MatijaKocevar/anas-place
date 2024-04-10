import { loremIpsumBig } from "../../../../constants/loremIpsumBig";

const ReceiptsPage = () => {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <p className="text-black">{loremIpsumBig}</p>
        </div>
    );
};

export default ReceiptsPage;
