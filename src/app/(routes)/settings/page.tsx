import { auth } from "@/auth";
import { prisma } from "@/db";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { CloudUploadIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default await function SettingsPage() {
    const session = auth();
    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Profile settings
            </h1>
            <form action={async (data: FormData) => {
                "use server";
                // console.log(data, data.get("username"));
                await prisma.profile.upsert({
                    where: {
                        email: session?.user?.email || "",
                    },
                    update: {
                        username: data.get("username") as string,
                        name: data.get("name") as string,
                    },
                    create: {
                        email: session?.user?.email || "",
                        username: data.get("username") as string,
                        name: data.get("name") as string,
                    },
                });
                redirect("/profile");

            }}>
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="bg-gray-400 size-24 rounded-full"></div>
                    </div>
                    <div>
                        <Button variant="surface">
                            <CloudUploadIcon />
                            change avatar
                        </Button>
                    </div>
                </div>
                <p className="mt-2 font-bold">username</p>
                <TextField.Root
                    name="username"
                    placeholder="your username" />
                <p className="mt-2 font-bold">name</p>
                <TextField.Root
                    name="name"
                    placeholder="simon jung" />
                <p className="mt-2 font-bold">subtitle</p>
                <TextField.Root placeholder="Graphic Designer" />
                <p className="mt-2 font-bold">bio</p>
                <TextArea />
                <div className="mt-4 flex justify-center">
                    <Button variant="solid">Save settings</Button>
                </div>
            </form>
        </div>
    );
};
