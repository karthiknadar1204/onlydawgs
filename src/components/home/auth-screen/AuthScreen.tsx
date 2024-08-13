import HeroSection from "./HeroSection";
import UnderlinedText from "@/components/decorators/UnderlinedText";
import RotatedText from "@/components/decorators/RotatedText";
import MasonryGrid from "./MasonryGrid";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Pricing from "@/components/Pricing";
import Team from "./Team";
import TodaysHighlight from "./TodaysHighlight";

const AuthScreen = () => {
	return (
		<div className='flex flex-col'>
			<HeroSection />

			<div className='mb-20 mt-12'>
				<div className='max-w-6xl  mx-auto px-4'>
					<div className='flex flex-col gap-10 mt-10'>
						<div className='mt-24'>
							<p className='text-2xl md:text-5xl text-center tracking-tighter font-bold'>
								Meet the <RotatedText>Dawgs</RotatedText>
							</p>

							<MasonryGrid />
						</div>

						<Features />
						<Testimonials />
						<Pricing />
						<Team />
					</div>
				</div>
			</div>
		</div>
	);
};
export default AuthScreen;