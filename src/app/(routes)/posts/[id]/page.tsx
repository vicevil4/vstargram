import { getSinglePostData } from "@/actions";
import SinglePostContent from "@/components/SinglePostContent";

export default async function SinglePostPage({ params }: { params: { id: string } }) {
  const data = await getSinglePostData(params.id);
  return (
    // <SinglePostContent {...data} />
    <SinglePostContent
      post={data.post}
      authorProfile={data.authorProfile}
      comments={data.comments}
      commentsAuthors={data.commentsAuthors}
      myLike={data.myLike}
      myBookmark={data.myBookmark}
    />
  )
}