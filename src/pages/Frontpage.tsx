import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Link } from 'react-router-dom';
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export default function Frontpage() {

    const position = { lat: 47.633353263856826, lng: -122.15691055397083 };

    return (
        <div className='flex flex-col mx-[20%] py-15 space-y-4'>
            <img src="src\assets\Haikyuu Silhouette.png" alt="Haiku" className='absolute z-[-5] bottom-[5%] left-[15%]' />
            <img src="src\assets\Volleyball.png" alt="Volleyball" className='absolute z-[-5] top-[10%] right-[30%] w-50' />

            <div className='self-center'>
                <div className='text-5xl font-light mb-2'>Welcome to...</div>
                <div className='text-6xl font-bold mb-4 text-orange-600'>Connect Net</div>
                <div className='text-xl mb-6 italic text-gray-600'>
                    Open Gym Volleyball located @ Westminster Chapel
                </div>
            </div>

            <div className=' self-center bg-gray-100 p-3 rounded-lg mb-6 font-medium w-100'>
                Status: <span className="text-green-600">Open</span> (Next session today @ 6PM)
            </div>

            <div className='self-center'>
                Put Status Bar Here
            </div>



            <button className='bg-orange-600 hover:bg-orange-700 text-white py-3 px-8 rounded-lg font-bold text-lg mb-8 transition-colors w-100 self-center'>
                <Link to='/Join'>Join Now</Link>
            </button>

            <div className='space-y-3 text-gray-700'>
                <div className='flex justify-center items-center gap-2'>
                    <span>13646 NE 24th St, Bellevue WA 98005</span>
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <span>Sundays @ 2:30–4PM | Thursdays @ 6–8PM</span>
                </div>
            </div>
            <div className='self-center'>
                <APIProvider apiKey={apiKey}>
                    <div className='w-100 h-100'> {/* Fixed size for better visibility */}
                        <Map defaultCenter={position} defaultZoom={15}>
                            <Marker position={position} />
                        </Map>
                    </div>
                </APIProvider>
            </div>
        </div>
    )
}
