import { Follower, Profile } from "@prisma/client";
import { Avatar } from "@radix-ui/themes";
import { PlusIcon } from "lucide-react";



export default async function HomeTopRow({
  follows,
  profiles
}: {
  follows: Follower[];
  profiles: Profile[];
}) {

  return (
    <div className="flex gap-3">
      <div>
        <button
          className="size-[92px] bg-gradient-to-tr from-ig-orange to-ig-red text-white rounded-full flex items-center justify-center">
          <PlusIcon size="32" />
        </button>
        <p className="text-center text-gray-400 text-sm">New Story</p>
      </div>
      {profiles?.map(p => (
        <div
          key={p.id}
          className="w-24 flex flex-col items-center justify-center">
          <div>
            <div className="inline-block p-1 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
              <div className="inline-block p-0.5 bg-white rounded-full">
                <Avatar
                  size="6"
                  radius="full"
                  fallback={'avatar'}
                  src={p.avatar || ''} />
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-sm">{p.username}</p>
        </div>
      ))}
    </div>
  );
}