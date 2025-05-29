
// 'use client'
// import React, { useRef, useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import Image from 'next/image';
// import city1 from '../../assets/city1.png'
// import city2 from '../../assets/city2.png'
// import city3 from '../../assets/city3.png'
// import city4 from '../../assets/city4.png'
// import city5 from '../../assets/city5.png'

// const DestinationsCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(2); // Start with middle item active
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const destinations = [
//     {
//       name: 'Paro',
//       image: city1
//     },
//     {
//       name: 'Bangkok',
//       image: city2
//     },
//     {
//       name: 'Kolkata',
//       image: city3
//     },
//     {
//       name: 'Hongkong',
//       image: city4
//     },
//     {
//       name: 'Kuala Lumpur',
//       image: city5
//     }
//   ];

//   const goToPrev = () => {
//     setActiveIndex(prev => prev === 0 ? destinations.length - 1 : prev - 1);
//   };

//   const goToNext = () => {
//     setActiveIndex(prev => prev === destinations.length - 1 ? 0 : prev + 1);
//   };

//   // Auto-play functionality
//   const startAutoPlay = () => {
//     intervalRef.current = setInterval(() => {
//       goToNext();
//     }, 3000); // Change slide every 3 seconds
//   };

//   const stopAutoPlay = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, []);

//   // Get visible cards based on active index
//   const getVisibleCards = () => {
//     const cards = [];
//     for (let i = -2; i <= 2; i++) {
//       const index = (activeIndex + i + destinations.length) % destinations.length;
//       cards.push({
//         ...destinations[index],
//         position: i,
//         index: index
//       });
//     }
//     return cards;
//   };

//   const visibleCards = getVisibleCards();

//   return (
//     <div 
//       className="relative w-full h-screen bg-gradient-to-br from-orange-200 via-orange-100 to-pink-100 overflow-hidden"
//       onMouseEnter={stopAutoPlay}
//       onMouseLeave={startAutoPlay}
//     >
//       {/* Decorative Background Clouds */}
//       <div className="absolute inset-0">
//         <div className="absolute top-16 left-16 w-40 h-20 bg-white/30 rounded-full blur-md"></div>
//         <div className="absolute top-32 left-48 w-32 h-16 bg-white/25 rounded-full blur-md"></div>
//         <div className="absolute top-20 right-20 w-36 h-18 bg-white/35 rounded-full blur-md"></div>
//         <div className="absolute top-48 right-32 w-28 h-14 bg-white/20 rounded-full blur-md"></div>
//         <div className="absolute bottom-32 left-24 w-24 h-12 bg-white/25 rounded-full blur-md"></div>
//         <div className="absolute bottom-24 right-40 w-20 h-10 bg-white/30 rounded-full blur-md"></div>
//       </div>

//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-8">
//         {/* Header Section */}
//         <div className="text-center mb-20">
//           <p className="text-orange-400 text-lg font-medium mb-3 tracking-wider italic">Destinations</p>
//           <h1 className="text-7xl font-bold text-amber-900 mb-6 tracking-tight">Connect With Us</h1>
//           <p className="text-gray-700 text-xl mb-10 font-light">Discover our expanding network across Asia</p>
//           <button className="bg-yellow-400 hover:bg-yellow-500 text-amber-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
//             Discover All Destinations
//           </button>
//         </div>

//         {/* Carousel Section */}
//         <div className="relative w-full max-w-7xl">
//           {/* Navigation Buttons */}
//           <button
//             onClick={goToPrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
//           >
//             <ChevronLeft className="w-7 h-7 text-gray-800" />
//           </button>
          
//           <button
//             onClick={goToNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
//           >
//             <ChevronRight className="w-7 h-7 text-gray-800" />
//           </button>

//           {/* Carousel Container - Show 5 cards */}
//           <div className="flex items-center justify-center gap-6 px-20">
//             {visibleCards.map((card, ) => {
//               const position = card.position;
//               const isCenter = position === 0;
//               const isFirstOrLast = position === -2 || position === 2;
              
//               return (
//                 <div
//                   key={`${card.index}-${position}`}
//                   className={`relative transition-all duration-800 ease-out cursor-pointer ${
//                     isFirstOrLast ? 'opacity-70 scale-75' : 'opacity-100'
//                   } ${isCenter ? 'z-20 scale-100' : 'z-10 scale-90'}`}
//                   onClick={() => setActiveIndex(card.index)}
//                 >
//                   <div className="relative overflow-hidden">
//                     {isCenter ? (
//                       // Center Card - Large and Circular
//                      <div className="relative w-72 h-96 rounded-full overflow-hidden  ring-8 ring-white p-2 my-2 mx-2">
//                         <Image
//                             src={card.image}
//                             alt={card.name}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <h3 className="text-white font-bold text-4xl drop-shadow-lg text-center px-4">
//                             {card.name}
//                             </h3>
//                         </div>
//                     </div>
//                     ) : (
//                       // Side Cards - Smaller and Rectangular
//                      <div className={`relative ${isFirstOrLast ? 'w-48 h-72' : 'w-48 h-72'} rounded-full p-2 m-2 overflow-hidden  ring-8 ring-white `}>
//                         <Image
//                             src={card.image}
//                             alt={card.name}
//                             fill
//                             className="object-cover"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>
//                         <div className="absolute inset-0 flex items-center justify-center">
//                             <h3 className={`text-white font-bold drop-shadow-lg text-center px-4 ${isFirstOrLast ? 'text-lg' : 'text-xl'}`}>
//                             {card.name}
//                             </h3>
//                         </div>
//                         </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Dots Indicator */}
//           <div className="flex justify-center mt-8 gap-3">
//             {destinations.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                   index === activeIndex 
//                     ? 'bg-yellow-400 scale-125' 
//                     : 'bg-black hover:bg-white/70'
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DestinationsCarousel;



// // import city1 from '../../assets/city1.png'
// // import city2 from '../../assets/city2.png'
// // import city3 from '../../assets/city3.png'
// // import city4 from '../../assets/city4.png'
// // import city5 from '../../assets/city5.png'