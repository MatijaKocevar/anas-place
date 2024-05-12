import { NextResponse } from "next/server";
import { refreshInstagramToken } from "../../../data/instagram-service";

export async function GET() {
    const result = await refreshInstagramToken();
    const data = await result.json();

    return new NextResponse(JSON.stringify({ datetime: data.datetime }));
}
