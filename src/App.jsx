import { Suspense } from "react"; 
import "./App.css";

import AllCard from "./component/AllCard"; 
import Navbar from "./component/Navbar/Navbar"; 
import Footer from "./component/Footer";
import Count from "./component/Navbar/Count";

const fetchCard = async ()=> {
     const res = await fetch("/ticket.json")
      return res.json() 
    }

function App(){

   const TicketPromise = fetchCard()
    return ( 
    <>  
<Navbar></Navbar>


 <Suspense 
  fallback={
    <div className="flex justify-center items-center h-screen w-full"> 
      <span className="loading loading-dots loading-xl"></span>
    </div>
  }
> 
  <Count TicketPromise={TicketPromise}></Count>
</Suspense> 
 <Suspense 
  fallback={
    <div className="flex justify-center items-center h-screen w-full"> 
      <span className="loading loading-dots loading-xl"></span>
    </div>
  }
> 
  <AllCard TicketPromise={TicketPromise}></AllCard>
</Suspense> 
   {/* <Footer></Footer> */}
    </>
 
  );
 } export default App;

