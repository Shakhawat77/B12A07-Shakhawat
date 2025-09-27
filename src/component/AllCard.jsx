import React from "react";

const AllCard = ({ TicketPromise, selectedIssues, resolveIssues, btnClick, handleSelect }) => {
  const cardData = React.use(TicketPromise);

  return (
   
    <div className="bg-gray-100 ">
     <div className="flex flex-col lg:flex-row mx-4 lg:mx-20 bg-gray-100 gap-6 pb-20">
     
      <div className="w-full lg:w-8/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <h2 className="text-[24px] sm:text-[30px] font-semibold col-span-full">
          Customer Tickets
        </h2>

        {cardData.map((issue) => (
          <div key={issue.id}>
            <div
              className="shadow-md rounded-md cursor-pointer bg-slate-100 mb-4 p-4 hover:shadow-lg transition"
              onClick={() => handleSelect(issue)}
            >
              <div className="flex justify-between items-center flex-wrap">
                <h3 className="text-[18px] sm:text-[20px]">{issue.title}</h3>
                <span className={`flex items-center gap-2 border-none rounded-3xl px-3 py-1 text-xs sm:text-sm font-medium ${  issue.status === "Open"? "bg-green-200 text-green-600": "bg-yellow-200 text-yellow-600"}`}> 
                    <span className={`w-3 h-3 rounded-full ${
                      issue.status === "Open" ? "bg-green-600" : "bg-yellow-600"
                    }`}></span>
                     {issue.status}
                </span>
              </div>
              <p className="pt-2 sm:pt-3 text-sm sm:text-base">{issue.description}</p>
              <div className="flex justify-between pt-2 sm:pt-3 flex-wrap gap-2">
                <div className="flex gap-3">
                  <p className="text-xs sm:text-sm">{issue.id}</p>
                  <p className={`text-xs sm:text-sm ${ issue.priority === "HIGH PRIORITY" ? "text-red-500" : issue.priority === "MEDIUM PRIORITY" ? "text-yellow-500" : "text-green-500" }`} > {issue.priority}
                  </p>
                </div>
                <div className="flex gap-3 text-xs sm:text-sm">
                  <p>{issue.customer}</p>
                  <p>{issue.createdAt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="w-full lg:w-4/12">
        <aside className="flex flex-col gap-6">
          <div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold">Task Status</h2>
            {selectedIssues.size === 0 ? (
              <p className="text-gray-500 mt-4">Select a ticket to add to Task Status</p>
            ) : (
              [...selectedIssues].map((issue) => (
                <div key={issue.id}className="shadow-md rounded-md mt-4 bg-slate-100 mb-4 p-4">
                  <p>{issue.title}</p>
                  <button className="btn btn-secondary mt-3 w-full bg-green-600 border-none shadow-none"onClick={() => btnClick(issue)}
                  > Complete</button>
                </div>
              ))
            )}
          </div>

          <div>
            <h2 className="text-[24px] sm:text-[30px] font-semibold">Resolved Task</h2>
            {resolveIssues.size === 0 ? (
              <p className="text-gray-500 mt-4">No resolved tasks yet.</p>
            ) : (
              [...resolveIssues].map((issue) => (
                <div key={issue.id} className="shadow-md rounded-md mt-4 bg-slate-100 mb-4 p-4">
                  <p>{issue.title}</p>
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
   </div>

  );
};

export default AllCard;
