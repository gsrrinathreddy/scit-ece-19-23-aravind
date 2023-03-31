

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://imageio.forbes.com/specials-images/imageserve/750037840/960x0.jpg?format=jpg&width=960',
    title: 'Litening music',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'http://giwaconnect.com/giwa-talk/wp-content/uploads/2021/02/Solo-Travel-in-Nature-acbfea52bfaf.jpg',
    title: 'travelling',
    
  },
  {
    img: 'https://images.hindustantimes.com/img/2022/10/08/1600x900/IMG-20221008-WA0024_1665245049715_1665245054705_1665245054705.jpg',
    title: 'playing kabaddi',
    
  },
  {
    img: 'https://pbi.uii.ac.id/wp-content/uploads/2022/03/Five-Reasons-Why-Watching-Movies-Is-Beneficial-to-Our-Personal-Development.jpg',
    title: 'watching movies',
    
    
  },
];
