import { loremIpsumBig } from "../../../../constants/loremIpsumBig";

export default function BookingsPage() {
    return (
        <div className="w-full h-screen-9 max-h-screen-9 overflow-y-auto">
            <p className="text-black">{loremIpsumBig}</p>
        </div>
    );
}
