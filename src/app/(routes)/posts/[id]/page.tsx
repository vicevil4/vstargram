import Comment from "@/components/Comment";
import SessionCommentForm from "@/components/SessionCommentForm";
import { Suspense } from "react";
import { uniq } from "lodash";
import { BookmarkIcon, HeartIcon } from "lucide-react";
import LikesInfo from "@/components/LikesInfo";
import { getSessionEmailOrThrow } from "@/actions";

export default async function SinglePostPage({ params }: { params: { id: string } }) {
  const post = await prisma?.post.findFirstOrThrow({ where: { id: params.id } });
  const authorProfile = await prisma?.profile.findFirstOrThrow({ where: { email: post?.author } });
  const comments = await prisma?.comment.findMany({ where: { postId: post.id } });
  const commetnsAuthors = await prisma?.profile.findMany({
    where: {
      email: { in: uniq(comments?.map(c => c.author)) }
    }
  });
  const myLike = await prisma?.like.findFirst({
    where: {
      author: await getSessionEmailOrThrow(),
      postId: post?.id,
    }
  });
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <img
            className="rounded-md"
            src={post?.image} alt={post?.description} />
        </div>
        <div>
          <Comment
            createdAt={post?.createdAt}
            text={post?.description} authorProfile={authorProfile} />
          <div className="pt-4 flex flex-col gap-4">
            {comments?.map(comment => (
              <div key={comment.id}>
                <Comment
                  createdAt={comment.createdAt}
                  text={comment.text}
                  authorProfile={commetnsAuthors?.find(a => a.email === comment.author)} />
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-gray-700 justify-between py-4 mt-4 border-t border-t-gray-300">
            <LikesInfo sessionLike={myLike} post={post} />
            <div className="flex items-center">
              <button>
                <BookmarkIcon />
              </button>
            </div>
          </div>
          <div className="pt-8 border-t border-t-gray-300">
            <Suspense>
              <SessionCommentForm postId={post.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}