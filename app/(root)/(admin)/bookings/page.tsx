import { loremIpsumBig } from "../../../../constants/loremIpsumBig";

export default function BookingsPage() {
    return (
        <div className="w-full h-screen-100 max-h-screen-100 overflow-y-auto">
            <p className="text-black">{loremIpsumBig}</p>
        </div>
    );
}
