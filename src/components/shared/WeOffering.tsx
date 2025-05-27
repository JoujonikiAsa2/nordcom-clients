import Image from 'next/image'
import deliveryImg from '@/assets/deliveryIcon.png'
import moneyBackImg from '@/assets/moneyBackIcon.png'
import supportImg from '@/assets/supportIcon2.png'
import secureImg from '@/assets/secureIcon.png'

// Define offering data structure for better maintainability
const offerings = [
  {
    id: 1,
    icon: deliveryImg,
    title: 'Free Delivery',
    description: 'Delivery to any point of the city and regions',
  },
  {
    id: 2,
    icon: moneyBackImg,
    title: 'Money Back Return',
    description: 'All products are 100% organic, certified',
  },
  {
    id: 3,
    icon: supportImg,
    title: '24/7 Support',
    description: 'Dedicated customer support around the clock',
  },
  {
    id: 4,
    icon: secureImg,
    title: 'Easy and Secure',
    description: 'Online payment with credit and debit card',
  },
]

const WeOffering = () => {
  return (
    <section className='py-12 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>Why Choose Us</h2>
          <p className='mt-4 text-lg text-gray-600'>We offer the best service with amazing features</p>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {offerings.map((offering) => (
            <div 
              key={offering.id}
              className='flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300'
            >
              <div className='mb-4 p-3 bg-orange-50 rounded-full'>
                <Image 
                  src={offering.icon} 
                  alt={offering.title}
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                {offering.title}
              </h3>
              <p className='text-gray-600 text-center text-sm'>
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WeOffering