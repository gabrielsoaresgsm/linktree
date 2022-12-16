import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import CardComponent from "./card";
import { Paper, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import website from '../assets/website.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.jpg';
import youtube from '../assets/youtube.jpeg';
import dribbble from '../assets/dribbble.png';
import github from '../assets/github.png';
import telegram from '../assets/telegram.png';
import twitter from '../assets/twitter.png';

const items = [
  {
    title: 'Portfólio',
    subtitle: 'Desenvolvimentos realizados',
    image: website,
    link: 'https://gabriel.code', //your personal website or portfolio  link
  },
  {
    title: 'GitHub',
    subtitle: '@gabrielsoaresgsm',
    image: github,
    link: 'https://github.com/gabrielsoaresgsm', //Github Profile link
  },
  {
    title: 'Instagram',
    subtitle: '@gabrielsoaresgsm | Shots of my life 🙂',
    image: instagram,
    link: 'https://instagram.com/gabrielsoaresgsm', //instagram profile link
  },
  {
    title: 'Twitter',
    subtitle: 'Teste',
    image: twitter,
    link: 'https://twitter.com/teste', // twitter profile link
  },
  {
    title: 'LinkedIn',
    subtitle: 'Know more about my profession 👨‍💼',
    image: linkedin,
    link: 'https://www.linkedin.com/in/gabrielmielo/', // linkedin
  },
  {
    title: 'YouTube',
    subtitle: 'MANUAL DOS DEVS | Official channel',
    image: youtube,
    link: 'https://www.youtube.com/channel/', //youtube channel link
  },

  {
    title: 'Teste',
    subtitle: 'Teste',
    image: dribbble,
    link: 'https://dribbble.com/', // Dribbble profile link
  },
  {
    title: 'Teste',
    subtitle: 'Teste',
    image: telegram,
    link: 'https://telegram.me/', //Telegram Pofile
  },
];

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '960px' }}>
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 12, md: 12 }}
      >
        {items.map((item, index) => (
          <Grid xs={4} sm={4} md={4} key={index}>
            <CardComponent 
            index={index} 
            title={item.title} 
            subtitle={item.subtitle} 
            link={item.link} 
            cover={item.image}
             />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
