import Image from 'next/image'
import React from 'react'

const Card = ({ item }) => {
    return (
        <div className='card'>
            <div className='imgDiv'>
                <Image height={250} width={240} src={item.links.mission_patch} className='image' />

            </div>

            <div className='spacex-container pt-4 '>
                <span className='blue_text text-big '>
                    {item.mission_name}{" "}#{item.flight_number}
                </span>
                <div className='flex-col pt-2'>
                    <span className='text-big text-black'>
                        Mission Ids:
                    </span>
                    <div className='text-big blue_text'>

                        <ul>
                            {item.mission_id.map((item) => {


                                return (<li> {item}</li>)
                            })}

                        </ul>
                    </div>

                </div>
                <div className='flex-row pt-2'>
                    <span className='text-big text-black'>
                        Launch Year:
                    </span>
                    <span className='text-big  blue-text'>
                        {item.launch_year}
                    </span>

                </div>
                <div className='flex-row pt-2'>
                    <span className='text-big text-black'>
                        Successfull Launch:
                    </span>
                    <span className='text-big  blue-text'>
                    {item.launch_success== false? "false":"true"}
                    </span>
                  
                </div>
                <div className='flex-row pt-2'>
                    <span className='text-big text-black'>
                        Successfull Landing:
                    </span>
                    <span className='text-big  blue-text'>
                        {item?.launch_failure_details? "true":"false"}
                    </span>

                </div>
            </div>
        </div>
    )
}

export default Card
