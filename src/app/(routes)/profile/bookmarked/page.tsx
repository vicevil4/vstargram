import { auth } from "@/auth";
import { prisma } from "@/db";
import { redirect } from "next/navigation";
import ProfilePageInfo from "@/components/ProfilePageInfo";
import ProfileNav from "@/components/ProfileNav";
import PostsGrid from "@/components/PostsGrid";

export default async function BookmarkPage() {
  const session = await auth();
  const profile = await prisma.profile.findFirst({ where: { email: session?.user?.email as string } });
  if (!profile) {
    return redirect('/settings');
  }
  const bookmarks = await prisma.bookmark.findMany({
    where: {
      author: session?.user?.email as string
    }
  });
  const posts = await prisma.post.findMany({
    where: {
      id: { in: bookmarks.map(b => b.postId) }
    }
  });
  return (
    <div>
      <ProfilePageInfo profile={profile} isOurProfile={true} ourFollow={null} />
      <ProfileNav username={profile.username || ''} isOurProfile={true} />
      <div className="mt-4">
        <PostsGrid posts={posts} />
      </div>
    </div>
  );
}