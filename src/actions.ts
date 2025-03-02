"use server";
import { prisma } from "@/db";
import { auth } from "./auth";
import { uniq } from "lodash";

export async function getSessionEmailOrThrow() {
  const session = await auth();
  const userEmail = session?.user?.email;
  if (!userEmail) {
    throw "not logged in";
  }
  return userEmail;
}

export async function updateProfile(data: FormData) {
  const userEmail = await getSessionEmailOrThrow();
  const newUserInfo = {
    username: data.get("username") as string,
    name: data.get("name") as string,
    subtitle: data.get("subtitle") as string,
    bio: data.get("bio") as string,
    avatar: data.get("avatar") as string,
  };
  await prisma.profile.upsert({
    where: {
      email: userEmail,
    },
    update: newUserInfo,
    create: {
      email: userEmail,
      ...newUserInfo,
    },
  });
}

export async function postEntry(data: FormData) {
  const userEmail = await getSessionEmailOrThrow();
  const postDoc = await prisma.post.create({
    data: {
      author: userEmail,
      image: data.get("image") as string,
      description: (data.get("description") as string) || "",
    },
  });
  return postDoc.id;
}

export async function postComment(data: FormData) {
  const authorEmail = await getSessionEmailOrThrow();
  return prisma.comment.create({
    data: {
      author: authorEmail,
      postId: data.get("postId") as string,
      text: data.get("text") as string,
    },
  });
}

async function updatePostLikeCount(postId: string) {
  await prisma.post.update({
    where: {
      id: postId,
    },
    data: {
      likeCount: await prisma.like.count({ where: { postId: postId } }),
    },
  });
}

export async function likePost(data: FormData) {
  const authorEmail = await getSessionEmailOrThrow();
  const postId = data.get("postId") as string;
  await prisma.like.create({
    data: {
      author: authorEmail,
      postId: postId,
    },
  });
  await updatePostLikeCount(postId);
}

export async function removeLikeFromPost(data: FormData) {
  const authorEmail = await getSessionEmailOrThrow();
  const postId = data.get("postId") as string;
  await prisma.like.deleteMany({
    where: {
      author: authorEmail,
      postId: postId,
    },
  });
  await updatePostLikeCount(postId);
}

export async function getSinglePostData(postId: string) {
  const post = await prisma?.post.findFirstOrThrow({ where: { id: postId } });
  const authorProfile = await prisma?.profile.findFirstOrThrow({
    where: { email: post?.author },
  });
  const comments = await prisma?.comment.findMany({
    where: { postId: postId },
  });
  const commentsAuthors = await prisma?.profile.findMany({
    where: {
      email: { in: uniq(comments?.map((c) => c.author)) },
    },
  });
  const myLike = await prisma?.like.findFirst({
    where: {
      author: await getSessionEmailOrThrow(),
      postId: post?.id,
    },
  });
  return {
    post,
    authorProfile,
    comments,
    commentsAuthors,
    myLike,
  };
}
