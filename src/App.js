import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Payment from './Pages/Payment';
import Itenary from './components/PackageDetails';
import IndianDestination from './components/IndianDestinations';
import PackageDetails from './components/PackageDetails';
import Login from './Pages/Login';
import Blog from './Pages/Blog';
import Gallery from './Pages/Gallery';
import Kerala from './Pages/PackageDetails.js/Kerala';
import RegisterForm from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import Destination from './Pages/Destination';
import SpecialPackage from './components/SpceialPackage';
import Family from './Pages/Family';
import DashNav from './Pages/DashNav';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
import TourPackageList from './Pages/PackageDetails.js/TourPackageList';
import BookingsDashboard from './Pages/AdminDashboard/Bookings';

function App() {
  
  return (
    <Router>
    <div className="App">
        <Navbar />

        <Routes> 
        
        <Route path="/" element={<Home />} /> 
        <Route path="/Destinations" element={<Destination />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />
     
        <Route path="/Register" element={<RegisterForm />} />

        <Route path="/Package" element={<Itenary />} />
        <Route path="/Travel" element={<IndianDestination />} />
        
         <Route path="/Family" element={<Family />} />


        {/* <Route path="/package/:id" element={<PackageDetails />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Special" element={<SpecialPackage />} />

        {/* Dshboard Pages */}
        <Route path="/DashNav" element={<DashNav />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/Bookings" element={<BookingsDashboard />} />
        <Route path="/tour" element={<TourPackageList />} />
       
       
        </Routes>
    </div>
    </Router>
  );
}

export default App;


