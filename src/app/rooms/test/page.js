import HotelWidget from '@/components/HotelWidget/HotelWidget'
import RoomDescription from '@/components/room/RoomDescription/RoomDescription'
import RoomGallery from '@/components/room/RoomGallery/RoomGallery'
import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'

export default function Room() {
	return (
		<>
			<HotelWidget />
			<Header />
			<RoomGallery />
			<RoomDescription />
			<Footer />
		</>
	)
}
