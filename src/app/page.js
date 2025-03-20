import HotelWidget from '@/components/HotelWidget/HotelWidget'
import AboutUs from '@/components/sections/AboutUs/AboutUs'
import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import Intro from '@/components/sections/Intro/Intro'
import IntroRooms from '@/components/sections/IntroRooms/IntroRooms'

export default function Home() {
	return (
		<>
			<HotelWidget />
			<Header />
			<Intro />
			<AboutUs />
			<IntroRooms />
			<Footer />
		</>
	)
}
