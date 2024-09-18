import TouristPlace from './components/TouristPlace'

const touristPlaces = [
  {
    placeName: "Goa",
    desc: "Famous for its beaches, nightlife, and Portuguese heritage.",
    img: "https://plus.unsplash.com/premium_photo-1697729594707-0fc9e51c8eed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z29hfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.5,
    price: 15000
  },
  {
    placeName: "Manali",
    desc: "A high-altitude Himalayan resort town known for its cool climate and snow-capped mountains.",
    img: "https://images.unsplash.com/photo-1677820915366-27d887c9b872?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbmFsaXxlbnwwfDB8MHx8fDA%3D",
    whenToVisit: "Summer",
    ratings: 4.7,
    price: 10000
  },
  {
    placeName: "Kerala",
    desc: "Known for its palm-lined beaches, backwaters, and rich traditions.",
    img: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2VyYWxhfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.8,
    price: 20000
  },
  {
    placeName: "Jaipur",
    desc: "The capital of Rajasthan, known for its historic palaces and vibrant culture.",
    img: "https://images.unsplash.com/photo-1534758755011-03cdf52658d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFpcHVyfGVufDB8MHwwfHx8MA%3D%3D",
    whenToVisit: "Winter",
    ratings: 4.6,
    price: 12000
  }
];


function App() {
  return(
    <div className="flex gap-2 mt-12 justify-center">
      {
        touristPlaces.map(place=>{
          return <TouristPlace name={place.placeName} desc={place.desc} img={place.img} whenToVisit={place.whenToVisit} ratings={place.ratings} price={place.price} />
        })
      }
    </div>
  )
}

export default App;