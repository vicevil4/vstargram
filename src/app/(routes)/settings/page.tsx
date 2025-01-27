import { auth } from "@/auth";
import { prisma } from "@/db";
import SettingsForm from "@/components/SettingsForm";

export default async function SettingsPage() {
    const session = await auth();
    if (!session?.user?.email) {
        return "not logged in";
    }
    const profile = await prisma.profile.findFirstOrThrow({
        where: {email: session.user.email as string }
    });
    
    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">
                Profile settings
            </h1>
            <SettingsForm
                profile={profile} 
                userEmail={session.user.email}/>
        </div>
    );
};
