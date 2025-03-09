import { getSessionEmailOrThrow } from "@/actions";
import { Avatar } from "@radix-ui/themes";



export default async function HomeTopRow() {
  const follows = await prisma?.follower.findMany({
    where: { followingProfileEmail: await getSessionEmailOrThrow() || '' }
  });
  const profiles = await prisma?.profile.findMany({
    where: {
      id: { in: follows?.map(f => f.followedProfileId) }
    }
  })
  return (
    <div className="flex gap-2">
      {profiles?.map(p => (
        <div key={p.id}>
          <Avatar
            size="6"
            radius="full"
            fallback={'avatar'}
            src={p.avatar || ''} />
        </div>
      ))}
    </div>
  );
}