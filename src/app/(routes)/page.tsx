import { auth, signIn } from "@/auth"
import { LogoutButton } from "@/components/LogoutButton";

export default async function Home() {
  const session = await auth();
  return (
    <div className="">
      test<br/>
      {session && (
        <LogoutButton></LogoutButton>
      )}
      {!session && (
        <form action={async () => {
            "use server";
            await signIn("google");
        }}>
          <button 
            className="border px-4 py-2 bg-ig-red text-white rounded-lg"
            type="submit">Login with Google
          </button>
        </form>
      )}
   </div>
  );
}
