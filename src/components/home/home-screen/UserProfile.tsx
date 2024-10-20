import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CoverImage from "./CoverImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import prisma from "@/db/prisma";
import { getUserProfileAction } from "@/app/update-profile/actions";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const UserProfile = async () => {
  const admin = await prisma.user.findUnique({
    where: {
      email: process.env.ADMIN_EMAIL!,
    },
  }); 

  const currentUser = await getUserProfileAction();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex flex-col">
      <CoverImage adminName={admin?.name!} />

      <div className="flex flex-col p-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between">
          <Avatar className="w-20 h-20 border-2 -mt-10">
            <AvatarImage
              src={"/user-placeholder.png"}
              className="object-cover"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="flex">
            {!currentUser?.isSubscribed && (
              <Button asChild className="rounded-full flex gap-10">
                <Link href={"/thank-you"}>
                  <span className="uppercase font-semibold tracking-wide">
                    Subscribe
                  </span>
                </Link>
              </Button>
            )}

            {currentUser?.isSubscribed && (
              <Button className="rounded-full flex gap-10" variant={"outline"}>
                <span className="uppercase font-semibold tracking-wide">
                  Subscribed
                </span>
              </Button>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <p className="text-lg font-semibold">{admin?.name}</p>
          <p className="text-sm mt-2 md:text-md">
            This is just a fun website I built on top of OnlyFans. Please feel free to
            explore and post your content about dogs and dog-related stuff. As a dog owner
            myself, this is just a way to express my love for the canine species. I have the
            admin access. The site is still being updated, and I will soon add a payment interface
            and a subscription model to understand the workings of webhooks. I will also strive to give a more personalized experience to all visitors.
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="h-2 w-full bg-muted" />
    </div>
  );
};

export default UserProfile;
