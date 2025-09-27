import React, { use, useState } from 'react';

const AllCard = ({ TicketPromise }) => {
  const cardData = use(TicketPromise);
  const [data, setData] = useState(cardData);
  
const handeClick =() => {
    console.log("card clicked")
}
  return (
    <div className="flex mx-auto px-20 bg-gray-100">
      <div className="w-8/11 grid grid-cols-2 gap-5 mr-[10px]">
        <h2 className="text-[30px] font-semibold col-span-2">Customer Tickets</h2>

        {cardData.map((issue) => (
          <div key={issue.id}> 
            <div className=" shadow-md rounded-md cursor-pointer bg-slate-100 mb-4 p-4" onClick={handeClick}>
              <div className="flex justify-between items-center">
                <h3 className="text-[20px]">{issue.title}</h3>
                <a
                  className={`flex items-center gap-2 border-none rounded-3xl px-3 py-1 text-sm font-medium
                    ${issue.status === 'Open'
                      ? 'bg-green-200 text-green-600'
                      : 'bg-yellow-200 text-yellow-600'
                    }`}
                >
                  <span
                    className={`w-3 h-3 rounded-full
                      ${issue.status === 'Open' ? 'bg-green-600' : 'bg-yellow-600'}
                    `}
                  ></span>
                  {issue.status}
                </a>
              </div>

              <div>
                <p className="pt-3">{issue.description}</p>
              </div>

              <div className="flex justify-between pt-3">
                <div className="flex gap-3">
                  <p>{issue.id}</p>
                  <p
                    className={`${
                      issue.priority === 'HIGH PRIORITY'
                        ? 'text-red-500'
                        : issue.priority === 'MEDIUM PRIORITY'
                        ? 'text-yellow-500'
                        : 'text-green-500'
                    }`}
                  >
                    {issue.priority}
                  </p>
                </div>

                <div className="flex gap-3">
                  <p>{issue.customer}</p>
                  <p>{issue.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <aside>
          <div>
            <h2 className="text-[30px] font-semibold">Task Status</h2>
            
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AllCard;
