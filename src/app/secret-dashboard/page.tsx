import BaseLayout from "@/components/BaseLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentTab from "./content/ContentTab";
import AnalyticsTab from "./analytics/AnalyticsTab";
import StoreTab from "./store/StoreTab";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { getUserProfileAction } from "../update-profile/actions";


const Page = async() => {
	const { getUser } = getKindeServerSession();
	const user = await getUser();

	const userProfile = await getUserProfileAction();

	const isAdmin = process.env.ADMIN_EMAIL === user?.email;
	return (
		<BaseLayout renderRightPanel={false}>
			<Tabs defaultValue='content' className='w-full mx-auto my-10 px-2 md:px-10'>
				<TabsList className='flex flex-col md:flex-row w-full md:w-3/4 mx-auto h-auto'>
					<TabsTrigger value='content' className='w-full md:w-auto'>
						Content
					</TabsTrigger>
					{isAdmin && (
					<TabsTrigger value='store' className='w-full md:w-auto'>
						Store
					</TabsTrigger>
					)}
				</TabsList>

				<TabsContent value='content'>
					<ContentTab />
				</TabsContent>
				<TabsContent value='store'>
					<StoreTab />
				</TabsContent>
			</Tabs>
		</BaseLayout>
	);
};
export default Page;