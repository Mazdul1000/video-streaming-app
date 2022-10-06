import React from 'react';
import VideoGrid from '../components/Grid/VideoGrid';
import Navbar from '../components/Navbar/Navbar';
import Tags from '../components/Tags/Tags';
import Footer from '../components/ui/Footer';
import Pagination from '../components/ui/Pagination';

const Home = () => {
    return (
      <>

      <Tags />
      <VideoGrid />
      <Pagination />
  
      </>
    );
};

export default Home;