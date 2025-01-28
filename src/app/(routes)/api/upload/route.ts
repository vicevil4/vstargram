import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/config"

export const config = {
    api: {
        bodyParser: false,
    }
};

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;

    // upload to public groups
    const uploadData = await pinata.upload.file(file, {
        groupId: "0194ad8c-e2d3-7e74-bcdb-7fe04852c3b6"
    });
    const fileUrl = `https://${process.env.NEXT_PUBLIC_GATEWAY_URL}/files/${uploadData.cid}`;
    return NextResponse.json(fileUrl, { status: 200 });

    // create groups
    // const info = await pinata.groups.create({name: "vstargram-photos", isPublic: true});
    // console.log(info);
    // group-id: 0194ad8c-e2d3-7e74-bcdb-7fe04852c3b6

    // upload and create signedUrl
    // const uploadData = await pinata.upload.file(file)
    // const url = await pinata.gateways.createSignedURL({
    //  	cid: uploadData.cid,
    //  	expires: 3600,
  	// });
    // return NextResponse.json(url, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
