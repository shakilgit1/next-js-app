import Image from 'next/image';
import React from 'react';
import shakil from '@/assets/shakil.png.jpg'

const Album = () => {
    return (
        <div>
            <h2>This is image using Image</h2>
            <Image width={500} height={500} src='https://images.pexels.com/photos/10637819/pexels-photo-10637819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image'/>
            <Image width={500} height={500} src={shakil} alt='image'/>
            {/* <h2>This is image using img</h2> */}
            {/* <img width='500px' height='500px' src={'https://images.pexels.com/photos/10637819/pexels-photo-10637819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} alt='image'/> */}
        </div>
    );
};

export default Album;