import { getSinglePostData } from "@/actions";
import SinglePostContent from "./SinglePostContent";

export default async function ModalPostContent({ postId }: { postId: string }) {

  const data = await getSinglePostData(postId);
  return (
    <SinglePostContent
      post={data.post}
      authorProfile={data.authorProfile}
      comments={data.comments}
      commentsAuthors={data.commentsAuthors}
      myLike={data.myLike}
      myBookmark={data.myBookmark} />
  );
}