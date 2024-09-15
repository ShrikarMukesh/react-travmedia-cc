import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import HomeCards from "./components/HomeCards.jsx";
import JobListings from "./components/JobListings.jsx";
import ViewAllJobs from "./components/ViewAllJobs.jsx";

const App = () =>{
   return(
          <div>
              <NavBar />
              <Hero />
              <HomeCards />
              <JobListings />
              <ViewAllJobs/>

          </div>

 )

};

export default App;