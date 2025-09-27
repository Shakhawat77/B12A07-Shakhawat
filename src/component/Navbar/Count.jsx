import React, { use, useState } from 'react';

const Count = ({TicketPromise}) => {
    const countData = use(TicketPromise);
      const [data, setData] = useState(countData);
      console.log(data);
    return (
       <div className='bg-gray-100'>
         <div className="grid grid-cols-1 md:grid-cols-2  gap-[20px] py-20 mx-20  ">

  <div className="relative rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
  <div className="absolute left-0 top-0 w-2/5 h-full bg-[url('/vector1.png')] bg-center bg-no-repeat"></div>
  <div className="absolute right-0 top-0 w-2/5 h-full bg-[url('/vector1.png')] bg-center bg-no-repeat scale-x-[-1]"></div>
  <div className="relative flex flex-col items-center justify-center h-full">
    <h4 className="text-[24px]">In-Progress</h4>
    <p className="font-semibold text-[60px]">0</p>
  </div>
</div>

 <div className="relative rounded-md p-7 text-white h-[250px] bg-gradient-to-r from-[#54CF68] to-[#00827A]">
  <div className="absolute left-0 top-0 w-2/5 h-full bg-[url('/vector1.png')] bg-center bg-no-repeat"></div>
  <div className="absolute right-0 top-0 w-2/5 h-full bg-[url('/vector1.png')] bg-center bg-no-repeat scale-x-[-1]"></div>
  <div className="relative flex flex-col items-center justify-center h-full">
    <h4 className="text-[24px]">Resolved</h4>
    <p className="font-semibold text-[60px]">0</p>
  </div>
</div>
</div>
       </div>
    );
};

export default Count;