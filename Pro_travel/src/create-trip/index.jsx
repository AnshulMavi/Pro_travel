import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SelectBudgetOptions, SelectTravelsList } from '@/constants/options'

function CreateTrip() {
  const [place, setPlace] = useState('');
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  
const OnGenerateTrip=()=>{
  if(formData?.noOfDays>8){
    alert('You can only generate a trip for a maximum of 7 days');
    return;
  }
  console.log(formData);
}


  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-200 mt-10'>

      <h2 className='text-3xl font-bold'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl'>just provide some basic information and our trip planner will generate a customized itinerary for you</p>

      <div className='mt-20 flex flex-col gap-9 '>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
          <Input
            type='text'
            placeholder='Ex.Ratlam'
            height={10}
            bordercolor='black' 
            onChange={(e) => {
              setPlace(e.target.value);
              handleInputChange('Location', e.target.value);
            }}
          />
        </div>
        <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning to trip?</h2>
          <Input
            type='number'
            placeholder='Ex.3'
            height={10}
            bordercolor='black'
            onChange={(e) => handleInputChange('noOfDays', e.target.value)}
          />
        </div>


        <div>
          <h2 className='text-xl my-3 font-medium'>What is your Budget?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item, index) => (
              <div key={index} 
              onClick={() => handleInputChange('budget', item.title)}
              className={`p-4 border rounded-lg hover:shadow-md cursor-pointer ${formData?.budget === item.title && 'shadow-lg border-black'}`}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>


        <div>
          <h2 className='text-xl my-3 font-medium'>Who do you traveling with into next adventure?</h2>
          <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelsList.map((item, index) => (
              <div key={index} 
              onClick={() => handleInputChange('travelingWith', item.people)}
              className={`p-4 border rounded-lg hover:shadow-md cursor-pointer ${formData?.travelingWith === item.people && 'shadow-lg border-black'}`}>
                <h2 className='text-4xl'>{item.icon}</h2>
                <h2 className='font-bold text-lg'>{item.title}</h2>
                <h2 className='text-sm text-gray-500'>{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>


        <div className='my-10 justify-end flex'>
          <Button onClick={OnGenerateTrip}>Generate trip</Button>
        </div>

      </div>
    </div>
  )
}

export default CreateTrip