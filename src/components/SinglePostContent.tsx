import Comment from "@/components/Comment";
import SessionCommentForm from "@/components/SessionCommentForm";
import { Suspense } from "react";
import { BookmarkIcon, HeartIcon } from "lucide-react";
import LikesInfo from "@/components/LikesInfo";
import { Comment as CommentModel, Post, Profile, Like } from "@prisma/client";

export default function SinglePostContent({
  post,
  authorProfile,
  comments,
  commentsAuthors,
  myLike,
}: {
  post: Post;
  authorProfile: Profile;
  comments: CommentModel[];
  commentsAuthors: Profile[];
  myLike: Like | null;
}) {

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
                  authorProfile={commentsAuthors?.find(a => a.email === comment.author)} />
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