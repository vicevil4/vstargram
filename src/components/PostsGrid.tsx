"use client";

import { Post } from "@prisma/client";
import Masonry from "react-masonry-css";

// const images = Array.from({ length: 30 }, (_, i) => {
//     const id = 30 + i;
//     if (i % 2 == 0) return `https://picsum.photos/id/${id}/1024/768`;
//     return `https://picsum.photos/id/${id}/768/1024`;
// });
export default function PostsGrid({posts}:{posts:Post[]}) {
    return (
        <div className="max-w-4xl mx-auto">
            <Masonry
                breakpointCols={{
                    default: 4,
                    860: 3,
                    500: 2,
                }}
                className="flex -ml-4 "
                columnClassName="pl-4"
                >
                {posts.map(posts => (
                    <div key={posts.id} className="mb-4">
                        <img src={posts.image} alt="" />
                    </div>
                ))}
            </Masonry>
        </div>
    );
}