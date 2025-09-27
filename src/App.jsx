import { Suspense, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import AllCard from "./component/AllCard";
import Count from "./component/Navbar/Count";
import Footer from "./component/Footer";

 import { ToastContainer} from 'react-toastify';

const fetchCard = async () => {
  const res = await fetch("/ticket.json");
  return res.json();
};

function App() {
  const TicketPromise = fetchCard();

 const [cards, setCards] = useState([]);
  const [selectedIssues, setSelectedIssues] = useState(new Set());
  const [resolveIssues, setResolveIssues] = useState(new Set());

  useEffect(() => {
    fetchCard().then((data) => setCards(data));
  }, []);

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
     setCards((prev) => prev.filter((card) => card.id !== issue.id));
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
          selectedCount={selectedIssues.size} resolvedCount={resolveIssues.size}
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
        tickets={cards} TicketPromise={TicketPromise} selectedIssues={selectedIssues} resolveIssues={resolveIssues} btnClick={btnClick} handleSelect={handleSelect}
        />
      </Suspense>
<ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
