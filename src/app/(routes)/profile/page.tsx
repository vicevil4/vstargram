import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
    return (
        <main>
            <section className="flex justify-between items-center">
                <button>
                    <ChevronLeft />
                </button>
                <div className="font-bold flex items-center gap-2">
                    my name is simon
                    <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
                        <CheckIcon size={16}/>
                    </div>
                </div>
                <Link href={'/settings'}>
                    <CogIcon />
                </Link>
            </section>
            <section className="mt-8 flex justify-center">
                <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
                    <div className="size-44 p-2 bg-white rounded-full">
                        <div className="size-40 aspect-square overflow-hidden rounded-full">
                            <img className=""
                                src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=3840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center mt-4">
                <h1 className="text-xl font-bold">Simon</h1>
                <p className="text-gray-500 mt-1 mb-1">IT Programmer</p>
                <p>
                    Fullstack Developer, Husband, Father<br/>
                    contact: vicevil4@gmail.com
                </p>
            </section>
            <section className="mt-4">
                <div className="flex justify-center gap-4 font-bold">
                    <Link href="{''}">Posts</Link>
                    <Link className="text-gray-400" href="{'/highlights'}">Highlights</Link>
                </div>
            </section>
            <section className="mt-4">
                <PostsGrid />
            </section>
        </main>
    );
}
