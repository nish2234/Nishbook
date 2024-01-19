import { Box, CircularProgress, Stack, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Add  from './components/Add';
import { useEffect, useState } from 'react';
function App() {
  const [mode, setMode] = useState("light");
  const [loading , setloading] = useState(true);
  const postDetails = [
    {
      name: "John Doe",
      date: "October 25, 2022",
      imgSrc: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1822&q=80",
      para: "I recently visited a breathtaking mountain range, and the view from the summit left me speechless. The rugged peaks, covered in a blanket of snow, seemed like they touched the heavens. It was a surreal experience that reminded me of the grandeur of nature."
    },
    {
      name: "Alice Smith",
      date: "July 7, 2023",
      imgSrc: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      para: "My journey into the world of astronomy has been nothing short of awe-inspiring. Exploring distant galaxies and learning about the mysteries of the universe has been a humbling and mind-boggling experience. The cosmos is a vast and wondrous place."
    },
    {
      name: "Michael Johnson",
      date: "August 12, 2023",
      imgSrc: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      para: "Learning a new musical instrument has been a challenging yet rewarding endeavor. The guitar has become my constant companion, and the melodies I create provide solace in both joyful and melancholic moments. Music truly speaks to the soul."
    },
    {
      name: "Emily Davis",
      date: "June 5, 2023",
      imgSrc: "https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      para: "Exploring the world of gourmet cooking has been a delightful adventure. Experimenting with diverse ingredients and flavors has unlocked a whole new world of culinary possibilities. The art of cooking is an expression of creativity and love."
    }
    ,
    {
      name: "Michael Johny",
      date: "August 12, 2023",
      imgSrc: "https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      para: "Discovering the wonders of astrophysics has been a mind-boggling journey. Peering into the depths of the cosmos, we unravel the mysteries of black holes, neutron stars, and the birth of galaxies. The universe's vastness is both humbling and awe-inspiring."
      }
      ,
      {
        name: "Sarah Mitchell",
        date: "October 17, 2023",
        imgSrc: "https://plus.unsplash.com/premium_photo-1684341008678-22ada982c6ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
        para: "Embarking on the world of sustainable fashion has been a gratifying mission. Exploring eco-friendly materials and ethical production methods, we are reshaping the fashion industry for a greener future. Fashion isn't just about style; it's about making a positive impact."
        }
        ,
        {
          name: "David Roberts",
          date: "April 8, 2023",
          imgSrc: "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e",
          para: "Diving into the world of marine biology has been a mesmerizing experience. Studying the intricate ecosystems beneath the ocean's surface, we uncover the beauty and fragility of aquatic life. Protecting our oceans is a duty we must all embrace."
          }
          ,
          {
            name: "Lena Patel",
            date: "May 29, 2023",
            imgSrc: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
            para: "Venturing into the world of vintage car restoration has been a labor of love. Bringing classic automobiles back to their former glory is like a journey through time. Preserving automotive history is a tribute to craftsmanship and innovation."
            }
  ];

  useEffect(()=>{
     setTimeout(() => {
      setloading(false);
     }, 1500);
   
} , []);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    
   
    <ThemeProvider theme={darkTheme}>
      {loading && <Box height = "100vh" width= "100vw" sx={{display:"flex" , justifyContent:"center" , alignItems:"center" }}><CircularProgress /></Box>}
    {!loading && <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar/>
        <Stack  direction="row" sx={{gap : {xs : 0 , sm : 2}}} >
           <Sidebar setMode={setMode} mode={mode}/>
           <Feed postDetails={postDetails}/>
           <Rightbar/>
        </Stack>
        <Add postDetails={postDetails}/>
    </Box>}
    </ThemeProvider>
  );
}

export default App;
