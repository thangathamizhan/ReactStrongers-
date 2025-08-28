import React, { useEffect, useState } from "react";
const SkeleCard = () => {
  return (
    
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 basis-[20%] bg-gray-200  rounded-lg overflow-hidden   flex flex-col">
    <div className="w-full h-60"></div>
    <div className="p-4 flex flex-col  ">
      <div className="h-4 w-[220px] bg-gray-300 mb-2 rounded"></div>
      <div className="h-5 bg-gray-300 rounded"></div>
      <div className="h-5 w-1/2 bg-gray-300 mt-2 rounded"></div>
      <div className="h-8 bg-gray-300 py-2 px-4 mt-4 w-full rounded"></div>
    </div>
    </div>
    
  );
};

const Fetch = () => {
  const [product, setProduct] = useState([]);
  const [loader ,setloader]=useState(true);
  const [searchItem,setSearchItem]=useState('')
  const [allProducts,setAllProducts]=useState()

  

  useEffect(() => {
   const fetchData =async()=>{
      setloader(true);
      try{
    const res =await fetch("https://dummyjson.com/products")
    const data = await res.json()
    setProduct(data.products)
    setAllProducts(data.products)
      }catch(err){
    console.log("something wrong",err);
    
      }finally{
        setloader(false)
      }
      

   }
   fetchData()
  }, []);
  const handleSearch =(e)=>{
    setSearchItem(e.target.value)
     if(e.target.value.trim()===""){
      setProduct(allProducts)
     }
    console.log(searchItem)
  }
  const ShowProduct=()=>{
   const filteredProduct =product.filter((data)=>data.title.toLowerCase().includes(searchItem.trim().toLowerCase()))
     
      setProduct(filteredProduct)
     
    
 }

  return (
    <section className="bg-gray-100 min-h-screen p-2 ">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Product Details
      </h1>
         <div className="flex gap-2 justify-center my-4"><input type="text" onChange={handleSearch} className="border-2 px-2 py-1 " placeholder="search product here"/>
           <button className="w-20 font-bold rounded-lg text-lg  bg-blue-600" onClick={ShowProduct} >search</button>
         </div>
      
       
        <div className="flex flex-wrap  gap-20 pl-4 items-center ">
         {loader?Array.from({length:8}).map((_,ix)=>(
         <SkeleCard key={ix}/>  
         )):  product.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 basis-[20%] bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 flex-grow">
                  {item.description.slice(0, 50)}...
                </p>
                <h3 className="text-xs text-gray-500 mt-2 uppercase">
                  {item.category}
                </h3>
                <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
       }

        
        </div>
      
    </section>
  );
};

export default Fetch;
