import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { getRating } from '../../api/paymentApi';
import React, { useState, useEffect } from 'react';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


export default function TextRating(){
  const value = 1;
  const [listRating,setListRating] =useState([])
  useEffect(async () => {
    const Rate = await getRating();   
    console.log(Rate[0].rt)
    setListRating(Rate[0].rt);
    console.log(listRating);
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value = {listRating}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
