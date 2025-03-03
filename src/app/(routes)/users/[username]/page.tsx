import ProfilePageContent from "@/components/ProfilePageContent";
import { prisma } from "@/db";

export default async function UserProfilePage({
  params: { username }
}: {
  params: { username: string }
}) {
  const profile = await prisma?.profile.findFirstOrThrow({
    where: { username: username }
  });
  return (
    <ProfilePageContent profile={profile} />
  );
}