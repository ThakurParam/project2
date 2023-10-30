import { Box } from '@mui/material';
import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

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
export default function Card({item}) {
    const value = 4.5;
    return (
        <>
            <Box>
                <Box>
                    <img src={item.cover} className='iiii0' ></img>
                    
                </Box>
                <Box>
                  <PlayCircleOutlineIcon className='icon' style={{
                    fontSize:'small',
                  }}/>  Sample
                </Box>
                <Box >
                    <p className='pp1'>Narrated by :</p>
                    <p className='pp0' >{item.Narratedby}</p>
                    
                    <Rating
                        name="text-feedback"
                        value={value}
                        readOnly
                        precision={0.5}
                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                </Box>

            </Box>
        </>
    );
}
