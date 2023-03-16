import "./App.css";
import Form from "./components/PostJob";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ADminLogin from "./components/ADminLogin";
import JobSeekerForm from "./components/JobSeekerLogin";
import CategorizedJobs from "./components/CategorizedJobs";
import HomePage from "./components/HomePage";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CategorizedJobs" element={<CategorizedJobs />} />
          <Route path="adminLogin" element={<ADminLogin />} />
          <Route path="JobSeeker" element={<JobSeekerForm />} />
          <Route path="postJob" element={<Form />} />
          <Route path="category" element={<CategorizedJobs />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
