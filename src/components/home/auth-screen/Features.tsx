import UnderlinedText from "@/components/decorators/UnderlinedText";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureProps {
	title: string;
	description: string;
	image: string;
}

const features: FeatureProps[] = [
	{
		title: "Expert Dog Care Tips",
		description:
			"Discover the best practices for keeping your dogs healthy and happy. From nutrition advice to grooming, we've got you covered.",
		image: "https://giphy.com/embed/6MWahPArixa6I",
	},
	{
		title: "Training Techniques",
		description:
			"Improve your dog's obedience and skills with our detailed training guides. Whether you're working on basic commands or advanced tricks, find the right techniques for your pup.",
		image: "https://giphy.com/embed/DOmoqqHVkhLos",
		
	},
	{
		title: "Daily Dog Life",
		description: "Get a glimpse into how we care for our dogs, manage their daily routines, and enjoy outdoor adventures together.",
		image: "https://giphy.com/embed/82nrkDUHJCMiA",
	},
];

const featureList: string[] = [
	"Dog Health Insights",
	"Daily Care Tips",
	"Behind-the-Scenes Access",
	"Training Tutorials",
	"Obedience Techniques",
	"Dog Care Advice",
];

const Features = () => {
	return (
		<section className='container py-24 sm:py-32 space-y-8'>
			<h2 className='text-3xl lg:text-4xl font-bold md:text-center'>
				Many <UnderlinedText className='underline-offset-8'>OnlyDawgs</UnderlinedText> Features 🐴
			</h2>

			<div className='flex flex-wrap md:justify-center gap-4'>
				{featureList.map((feature) => (
					<div key={feature}>
						<Badge className='text-sm rounded-full' variant={"secondary"}>
							{feature}
						</Badge>
					</div>
				))}
			</div>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{features.map(({ title, description, image }) => (
					<Card key={title} className='flex flex-col'>
						<CardHeader>
							<CardTitle>{title}</CardTitle>
						</CardHeader>

						<CardContent>{description}</CardContent>

						<CardFooter className='mt-auto'>
							<div className='w-full flex justify-center'>
								<iframe
									src={image}
									width="250"
									height="250"
									style={{ border: 'none', overflow: 'hidden' }}
									frameBorder="0"
									allowFullScreen
									title="Giphy"
								></iframe>
							</div>
						</CardFooter>
					</Card>
				))}
			</div>
		</section>
	);
};

export default Features;
