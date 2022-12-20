import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import CardComponent from "./card";
import { Paper, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import website from '../assets/website.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';
import dribbble from '../assets/dribbble.png';
import github from '../assets/github.png';
import figma from '../assets/figma.svg';
import twitter from '../assets/twitter.png';

const items = [
  {
    title: 'Modelo de Curriculos',
    subtitle: 'Grátis!',
    image: figma,
    link: 'https://gabriel.code', //your personal website or portfolio  link
  },
  {
    title: 'YouTube',
    subtitle: 'Manual dos Devs | Official channel',
    image: youtube,
    link: 'https://www.youtube.com/channel/UC7-8D0wLvbSXU6u0DDDYhSg', //youtube channel link
  },
  {
    title: 'Instagram',
    subtitle: '@manualdosdevs',
    image: instagram,
    link: 'https://instagram.com/gabrielsoaresgsm', //instagram profile link
  },
  {
    title: 'LinkedIn',
    subtitle: '@manualdosdevs',
    image: linkedin,
    link: 'https://www.linkedin.com/in/manualdosdevs/', // linkedin
  },
  {
    title: 'GitHub',
    subtitle: '@manualdosdevs',
    image: github,
    link: 'https://github.com/manualdosdevs', //Github Profile link
  },
  {
    title: 'Vagas',
    subtitle: 'Em breve...',
    image: website,
    // link: 'https://gabriel.code', //your personal website or portfolio  link
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
