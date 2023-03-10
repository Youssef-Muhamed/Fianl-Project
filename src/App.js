import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar";
import Gust from "./Pages/Gust";
import ListJobs from "./Pages/Jobs/AllJobs/ListJobs";
import React, { Suspense } from "react";
import NoPage from "./Pages/NoPage/NoPage";
import Comunity from "./Pages/comunity/Comunity";
import Profile from "./Pages/Profile/Profile";
import ShowJob from "./Pages/Jobs/ShowJob/ShowJob";
import Problems from "./Pages/Problems/AllProblems/Problems";
import SingleProblem from "./Pages/Problems/SingleProblem/SingleProblem";
import AddProblem from "./Pages/Problems/AddProblem/AddProblem";


function App() {
  const Home = React.lazy(() => import("./Pages/Home/Home"));
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div> .....................loading </div>}>
        <Routes>
          <Route path="/" element={<Gust />} />
          <Route path="home" element={<Home />} />
          <Route path="jobs" element={<ListJobs />}></Route>
          <Route path="jobs/:jobid" element={<ShowJob />} />
          <Route path="comunity" element={<Comunity />}></Route>
          <Route path="problems" element={<Problems />}></Route>
          <Route path="problems/add" element={<AddProblem />}></Route>
          <Route path="problems/:problemid" element={<SingleProblem />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Suspense>
     
    </BrowserRouter>
  );
}

export default App;
