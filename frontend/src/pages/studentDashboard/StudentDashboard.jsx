import React from 'react'
import Footer from '../../components/Home/footer/Footer';
import DefaultNavbar from '../../components/navbar/defaultNavbar/DefaultNavbar';
import Navbar from '../../components/navbar/Navbar';
import TuteeNavbar from '../../components/navbar/tuteeNavbar/TuteeNavbar';
import Categories from '../../components/studentDashboard/categories/Categories';
import CardSwiper from '../../components/swiper/CardSwiper';

import './SutdentDashboard.css'

const StudentDashboard = () => {
  return (
    <div>
      {/* <DefaultNavbar /> */}
      <Categories />
      <CardSwiper />
      {/* <Footer /> */}
    </div>
  )
}

export default StudentDashboard;