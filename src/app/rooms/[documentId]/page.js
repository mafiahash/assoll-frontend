import RoomGallery from '@/app/rooms/[documentId]/sections/RoomGallery/RoomGallery'
import HotelWidget from '@/components/HotelWidget/HotelWidget'
import Footer from '@/components/sections/Footer/Footer'
import Header from '@/components/sections/Header/Header'
import RoomDescription from './sections/RoomDescription/RoomDescription'

export default async function Room({ params }) {
	const { documentId } = await params

	const res = await fetch(
		`${process.env.STRAPI_URL}/api/rooms/${documentId}?populate=photos`,
		{
			cache: 'no-store',
		}
	)

	const resJson = await res.json()
	const roomData = resJson.data

	return (
		<>
			<HotelWidget />
			<Header />
			<RoomGallery
				name={roomData.name}
				rating={roomData.stars}
				reviews={roomData.reviews}
				photos={roomData.photos}
			/>
			<RoomDescription
				name={roomData.name}
				description={roomData.description}
				advantage1={roomData.advantage1}
				advantage2={roomData.advantage2}
				advantage3={roomData.advantage3}
				price={roomData.price}
			/>
			<Footer />
		</>
	)
}
