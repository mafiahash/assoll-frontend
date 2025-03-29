import AboutUs from '@/app/(index)/sections/AboutUs/AboutUs'
import Intro from '@/app/(index)/sections/Intro/Intro'
import IntroRooms from '@/app/(index)/sections/IntroRooms/IntroRooms'
import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import Advantages from './sections/Advantages/Advantages'

export default function Home() {
	return (
		<>
			<Header />
			<Intro />
			<AboutUs />
			<Advantages />
			<IntroRooms />
			<Footer />
		</>
	)
}
