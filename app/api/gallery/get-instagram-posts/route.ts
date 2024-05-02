import axios from "axios";

const INSTAGRAM_API_URL = "https://graph.instagram.com";
const ACCESS_TOKEN =
    "IGQWRPb2ZAVRG1CS0huVXNnRW1sdy1mbEtCSXMxQlpvTlJnanNZAQmV1YWktR2tsMkVEQ0RDWk1VLVdwdS1lTU1iZAk1XVjZAoc3VmM2l1bTJCMnR0NFFNbVdScmprcEVheHpNTDFPdUJ2NkJHUmlhNWVISkVaWENnNFkZD";

export type InstagramPost = {
    id: string;
    caption: string;
    media_type: string;
    media_url: string;
    permalink: string;
};

export async function GET() {
    try {
        const result = await axios.get(`${INSTAGRAM_API_URL}/me/media`, {
            params: {
                fields: "id,caption,media_type,media_url,permalink",
                access_token: ACCESS_TOKEN,
            },
        });

        const posts = result.data;

        return Response.json(posts.data);
    } catch (error) {
        console.error("Error fetching Instagram posts:", error);
        return new Response(null, { status: 404 });
    }
}
