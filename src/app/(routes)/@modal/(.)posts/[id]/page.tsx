import { getSinglePostData } from "@/actions";
import Modal from "@/components/Modal";
import SinglePostContent from "@/components/SinglePostContent";

export default async function PostInModal(
  {
    params: { id }
  }: {
    params: { id: string }
  }) {

  const data = await getSinglePostData(id);
  return (
    <Modal>
      <SinglePostContent
        post={data.post}
        authorProfile={data.authorProfile}
        comments={data.comments}
        commentsAuthors={data.commentsAuthors}
        myLike={data.myLike} />
    </Modal>
  );
}