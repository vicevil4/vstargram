'use client';

import { bookmarkPost, unbookmarkPost } from "@/actions";
import { Bookmark, Post } from "@prisma/client";
import { BookmarkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookmarkButton({
  post, sessionBookmark
}: {
  post: Post;
  sessionBookmark: Bookmark | null;
}) {
  const router = useRouter();
  const [bookmarkedByMe, setBookmarkedByMe] = useState(!!sessionBookmark);
  return (
    <form
      action={async (data: FormData) => {
        setBookmarkedByMe(prev => !prev);
        if (bookmarkedByMe) {
          await unbookmarkPost(data);
        } else {
          await bookmarkPost(data);
        }
        router.refresh();
      }}
      className="flex items-center gap-2">
      <input type="hidden" name="postId" value={post.id} />
      <button type="submit"
        className="">
        <BookmarkIcon className={bookmarkedByMe ? 'fill-gray-700 dark:text-white dark:fill-white' : 'dark:text-white'} />
      </button>
    </form>
  );
}