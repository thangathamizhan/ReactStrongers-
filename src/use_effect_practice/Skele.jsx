
const SkeleCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8  flex-col">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 basis-[20%] bg-gray-200 shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
    <div className="w-full h-60"></div>
    <div className="p-4 flex flex-col  ">
      <div className="h-4 w-[220px] bg-gray-300 mb-2 rounded"></div>
      <div className="h-5 bg-gray-300 rounded"></div>
      <div className="h-5 w-1/2 bg-gray-300 mt-2 rounded"></div>
      <div className="h-8 bg-gray-300 py-2 px-4 mt-4 w-full rounded"></div>
    </div>
    </div>
    </div>
  );
};
