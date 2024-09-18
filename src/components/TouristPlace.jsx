function TouristPlace({name, desc, img, whenToVisit, ratings, price}){
    return(
        <>
            <div className="border w-[260px] p-2 rounded-xl " onClick={()=>{
                alert(`${name} is selected!`)
            }}>
                <div className="relative">
                    <img src={img} className="rounded-xl" alt="" />
                    {
                        price > 12000 ? <div className="absolute bottom-0 m-2 px-3 py-[2px] rounded-full bg-yellow-50 text-yellow-800 text-sm">Expensive</div> : <div className="absolute bottom-0 m-2 px-3 py-[2px] rounded-full bg-green-50 text-green-800 text-sm">Cheap</div>
                    }
                    {
                        whenToVisit === 'Summer' ? <div className="absolute top-0 right-0 m-2 px-3 py-[2px] rounded-full bg-orange-50 text-orange-600 text-sm">Best to visit during {whenToVisit}!</div> : <div className="absolute top-0 right-0 m-2 px-3 py-[2px] rounded-full bg-sky-50 text-sky-600 text-sm">Best to visit during {whenToVisit}!</div>
                    }
                    
                </div>
                <div className="flex justify-between items-center">
                    <p className="mt-2 font-semibold">{name}</p>
                    <span className={ratings >= 4.7? 'flex items-center gap-1 text-emerald-500 text-md' : 'flex items-center gap-1 text-gray-500 text-md'}>{ratings}<svg class="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.97 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.363 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.785.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.362-1.118L2.045 9.395c-.783-.57-.382-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/>
  </svg></span>
                </div>
                <p className=" text-sm text-neutral-600">{desc}</p>
            </div>
        </>
    )
}
export default TouristPlace;