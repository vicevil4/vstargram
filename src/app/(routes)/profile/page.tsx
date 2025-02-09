import { auth } from "@/auth";
import { prisma } from "@/db";
import PostsGrid from "@/components/PostsGrid";
import { CheckIcon, ChevronLeft, CogIcon } from "lucide-react";
import Link from "next/link";

export default async function ProfilePage() {
    const session = await auth();
    let profile;
    try {
        profile = await prisma.profile.findFirstOrThrow({where:{email: session?.user?.email as string }});

        // FIXME: 예외를 발생시켜도 catch 블록으로 처리가 안되는데, 이건 좀더 공부해보고 넣어봅시다.
        // throw new Error("예외테스트");
    } catch (error) {
        // 프로필을 찾을 수 없는 경우의 처리
        console.error('프로필을 찾을 수 없습니다:', error);
        // 에러 페이지로 리다이렉트하거나 기본 프로필을 보여줄 수 있습니다
        return (
            <main className="text-center p-8">
                <h1 className="text-2xl font-bold">일시적인 오류가 발생했습니다</h1>
                <p className="mt-4">서버 연결에 문제가 있습니다. 잠시 후 다시 시도해주세요.</p>
                <div className="mt-4 flex justify-center gap-4">
                    <Link href="/" className="text-blue-500 hover:underline">
                        홈으로 돌아가기
                    </Link>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="text-blue-500 hover:underline"
                    >
                        새로고침
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main>
            <section className="flex justify-between items-center">
                <button>
                    <ChevronLeft />
                </button>
                <div className="font-bold flex items-center gap-2">
                    {profile.username}
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
                                src={profile.avatar || ""}
                                alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center mt-4">
                <h1 className="text-xl font-bold">{profile.name}</h1>
                <p className="text-gray-500 mt-1 mb-1">{profile.subtitle}</p>
                <p>
                    {profile.bio}
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
