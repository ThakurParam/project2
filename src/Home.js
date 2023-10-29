import React from "react";
import { useState } from "react";
import './App.css'
import { Button, Container, Grid } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Foot from "./Foot";
import Card from "./Card";
import { Data } from "./Data";
import { Rost } from "./Rost";
import Sign from "./Sign";
import { useNavigate } from 'react-router-dom';

function Home({ onSearch }) {
  // const navigate = useNavigate( )
  const [query, setQuery] = useState('');
  const [data, setData] = useState(Data);
  const [rost, setRost] = useState(Rost);
  const handleSearch = () => {
    onSearch(query);
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const cont = {
    height: {
      xs:'20vh',
      md:'60vh',
    },
    width: {
      xs:'100%',
      md:'60%',
    },
    mx: 'auto',
    backgroundImage: 'url("../image/Banner.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
   

   

  }
  const coont = {
    marginTop:'5px',
    width: {
      md:'60%',
      xs:'100%',
    },
    mx: 'auto',
   
  }
  return (

    <>
      <body>
        <Container sx={{
          width: '60%',
          mx: 'auto',
        }}>

          <Grid container spacing={2}>
            <Grid item sx={6} md={6}>
              <img src="./image/ama.png"></img>
              <div>
                <button> Home</button>
                <button> Browse</button>
                <button> About Memberships</button></div>

            </Grid>
            <Grid item sx={6}>
              <div>
                <button>help</button>
                <button >Sign In</button></div>
                {/* onClick={()=>navigate(Sign)} */}
              <div className="search-bar-container">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
              </div>
            </Grid>
          </Grid>
        </Container>
        <div className="d1">

        </div>
        <Container style={coont} className="coont">
          <Grid container spacing={1}>
            <Grid item xs={6} md={6} className="g00">
              <Box>
              <h2>
                What you get?
              </h2>
              <p className="p000" >Your free, 30-day trial comes with:</p>

              <p className="p000">
                1 credit (2 credits for Amazon Prime members new to Audible), to use on any title of your choice—yours to keep, even if you cancel.
              </p>
              <p className="p000">
                The Plus Catalogue—listen all you want to thousands of audiobooks, podcasts, and Audible Originals.
              </p>
              <p className="p000">
                No commitment—cancel anytime.
              </p></Box></Grid>
            <Grid item xs={6} md={6}  >
              <Box className="g01">

              </Box>
            </Grid>




          </Grid>
        </Container>
        <p className="p01">Bring words to life with Audible</p>
        <p className="p02">Here are some of our top picks to get you started</p>

        <Container sx={{
          width: { md: '60%', xs: '95%' },
          mx: 'auto',
        }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} aria-label="lab API tabs example" className="tab00">
                <Tab label="Best Seller" value="1"  className="tab0"/>
                <Tab label="Audible Originals" value="2"  className="tab0"/>
                <Tab label="Podcasts" value="3"  className="tab0"/>
              </TabList>
            </Box>
            <TabPanel value="1"> 
              <Grid container spacing={2}>
                {data.map((item, index) => (
                  <Grid item xs={2} md={2} key={index}>
                    <Card item={item} />
                  </Grid>
                ))}


              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={2}>
                {rost.map((item, index) => (
                  <Grid item xs={3} sm={3} md={2} key={index}>
                    <Card />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="3"> <Grid container spacing={2}>
              {data.map((item, index) => (
                <Grid item xs={2} md={2} key={index}>
                  <Card />
                </Grid>
              ))}
            </Grid>
            </TabPanel>
          </TabContext>
        </Container>
        <Container style={cont} >

        </Container>
        <p className="p01">
          Try Audible free</p>
        <p className="p02">It's easy to get started
        </p>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <img src="./image/img0.png" className="img0"></img>
              <h3>Start your free trial</h3>
              <p>
                Sign up for a free 30-day trial. Your first audiobook is free, yours to keep even if you cancel.
              </p>

            </Grid>
            <Grid item xs={4} md={4}>
              <img src="./image/img1.png" className="img1"></img>
              <h3>Listen anytime, anywhere</h3>
              <p>
                Download the free Audible app to listen while cooking, doing chores, heading to work or before bed.
              </p>
            </Grid>
            <Grid item xs={4} md={4}>
              <img src="./image/img2.png" className="img2"></img>
              <h3>Entertainment for hours</h3>
              <p>
                Listen all you want to The Plus Catalogue—thousands of Audible Originals, audiobooks and podcasts.
              </p>
            </Grid>
          </Grid>
          <button className="btn00">Start your Free Trial for 90days</button>
          <p className="p03">₹199 per month after 30-day trial. Cancel anytime. </p>
        </Container>
        <div className="d00">
          <Container sx={{
            textAlign: 'initial',
            width: '60%',
            mx: 'auto',

          }}>
            <h1 sx={{
              padding: '10px   '
            }}>
              Frequently Asked Questions
            </h1>
            <p>
              How does the free trial work?
            </p>
            <p>
              What is included with my Audible Premium Plus membership?
            </p>
            <p>

              Are there additional benefits for Amazon Prime members?
            </p>
            <p>
              What happens if I want to cancel?
            </p>
          </Container>
        </div>
        <Container sx={{

          display: 'flex',
          width: '60%',
          mx: 'auto',

        }}>
          <Grid container spacing={1}>
            <Grid item xs={4} md={4}>
              <div className="div00">
                <button className="b0">Contact Us</button>
                <button className="b0">Help</button>
                <button className="b0">How to Listen</button>
                <button className="b0">Listening Apps</button>
                <button className="b0">Mobile Site</button>
                <button className="b0">Audible Suno</button>
                <button className="b0">Facebook</button></div></Grid>
            <Grid item xs={4} md={4}>
              <div className="div00">
                <button className="b1">Twitter</button>
                <button className="b1">Instagram</button>
                <button className="b1">Learn more about Audible</button>
                <button className="b1">Learn more about membership</button>
                <button className="b1">Best Sellers</button>
                <button className="b1">New Releases</button>
                <button className="b1">Indian Listens</button></div></Grid>
            <Grid item xs={4} md={4}>
              <div className="div00">
                <button className="b2">Hindi Audiobooks</button>
                <button className="b2">Free Shows & Audiobooks</button>
                <button className="b2">Mysteries & Thrillers</button>
                <button className="b2">Romance</button>
                <button className="b2">Fiction</button>
                <button className="b2">Sci-Fi & Fantasy</button>
                <button className="b2">Self Development</button>
              </div></Grid>
          </Grid>
        </Container>
        <Foot />
      </body>
    </>

  );
}

export default Home;
