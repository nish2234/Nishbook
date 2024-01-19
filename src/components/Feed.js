import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed(props) {

  
  return (
    
    <Box flex={4} p={3}>
      {props.postDetails.map((element)=>{
       return  <Box key={element.name}>

         <Post start = {element.name[0]} name={element.name} date = {element.date} imgSrc = {element.imgSrc} para = {element.para}/>
        </Box>
       })} 
    </Box>
 
     
   
  )
}

export default Feed
