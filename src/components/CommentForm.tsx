import { auth } from "@/auth";
import { Button, TextArea } from "@radix-ui/themes";
import Avartar from "./Avatar";

export default async function CommentForm() {
  const session = await auth();
  const profile = await prisma?.profile.findFirstOrThrow({
    where: {
      email: session?.user?.email as string
    }
  })
  return (
    <form>
      <div className="flex gap-2">
        <div>
          <Avartar src={profile?.avatar || ''} />
        </div>
        <div className="w-full flex flex-col gap-2">
          <TextArea 
            placeholder="Tell the world what you think..." />
          <div>
            <Button>Post comment</Button>
          </div>
        </div>
      </div>
    </form>
  );
}