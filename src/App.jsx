import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import AllCard from "./component/AllCard";
import Count from "./component/Navbar/Count";
import Footer from "./component/Footer";


const fetchCard = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const TicketPromise = fetchCard();


  const [selectedIssues, setSelectedIssues] = useState(new Set());
  const [resolveIssues, setResolveIssues] = useState(new Set());
  const btnClick = (issue) => {
    setResolveIssues((prev) => {
      const newSet = new Set(prev);
      newSet.add(issue);
      return newSet;
    });
    setSelectedIssues((prev) => {
      const newSet = new Set(prev);
      newSet.delete(issue);
      return newSet;
    });
  };

  const handleSelect = (issue) => {
    setSelectedIssues((prev) => {
      const newSet = new Set(prev);
      newSet.add(issue);
      return newSet;
    });
  };

  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen w-full">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Count
          selectedCount={selectedIssues.size}
          resolvedCount={resolveIssues.size}
        />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen w-full">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <AllCard
          TicketPromise={TicketPromise}
          selectedIssues={selectedIssues}
          resolveIssues={resolveIssues}
          btnClick={btnClick}
          handleSelect={handleSelect}
        />
      </Suspense>

      <Footer></Footer>
    </>
  );
}

export default App;
