import React from "react";
import { useState } from "react";
import "./App.css";
import { Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Foot from "./Foot";
import Card from "./Card";
import { Data } from "./Data";
import { Rost } from "./Rost";
import Sign from "./Sign";
import { useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Home({ onSearch }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [data, setData] = useState(Data);
  const [rost, setRost] = useState(Rost);
  const handleSearch = () => {
    onSearch(query);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const connnt = {
    height: {
      xs: "20vh",
      md: "60vh",
    },
    width: {
      xs: "100%",
      md: "60%",
    },
    mx: "auto",
  };
  const coont = {
    marginTop: "30px",
    width: {
      md: "60%",
      xs: "100%",
    },
    mx: "auto",
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <body>
        <Container
          sx={{
            width: "60%",
            mx: "auto",
            "@media (max-width: 600px)": {
              backgroundColor: "red",
              display: "contents",
            },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6} sx={{ textAlign: "justify" }}>
              <img src="./image/ama.png" className="bdcd"></img>
              <div>
                <button> Home</button>
                <button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Browse
                </button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <p className="poop">AUDIOBOOK CATEGORIES</p>
                  <div className="dfdd">
                    <div className="bfbf">
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Fiction
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Sci-Fi & Fantasy
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Mysteries & Thrillers
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Self-Development
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Biographies & Memoirs
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Hindi Audiobooks
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        New Releases
                      </Button>
                    </div>
                    <div className="bfbf">
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Best Sellers
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        All Categories
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Popular Features
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Plus Catalogue
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Podcasts
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Audible Originals
                      </Button>
                      <Button
                        sx={{ color: "black", fontSize: "11px" }}
                        onMouseOver={(e) => {
                          e.target.style.textDecoration = "underline";
                        }}
                        onMouseOut={(e) => {
                          e.target.style.textDecoration = "none";
                        }}
                      >
                        Children's Audiobooks
                      </Button>
                    </div>
                  </div>
                </Menu>
                <button> About Memberships</button>
              </div>
            </Grid>
            <Grid item xs={6} md={6} sx={{ textAlign: "end" }}>
              <div>
                <button onClick={() => navigate("/Help")}>help</button>
                <button onClick={() => navigate("/Sign")}>| Sign In</button>
              </div>

              <Box className="000h" sx={{width:{
                md:"100%",
                xs:'180px',
                
              },
              textAlign:'end'}}>
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{
                    width: "100%",
                    
                    
                  }}
                />
                <button onClick={handleSearch}>Search</button>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <div className="d1">
          <Container className="cvb">
            <Box>
              <p className="poi">Listen to audiobooks,</p>
              <p className="poj">podcasts, Audible Originals</p>
              <p className="poj">and more</p>
              <button className="btn00000">
                Start your Free Trial for 90days
              </button>
              <p className="p05">
                ₹199 per month after 30-day trial. Cancel anytime.{" "}
              </p>
            </Box>
          </Container>
        </div>
        <Container style={coont} className="coont">
          <Grid container spacing={1}>
            <Grid item xs={6} md={6} className="g00">
              <Box>
                <h2 className="h000">What you get?</h2>
                <p className="p001">Your free, 30-day trial comes with:</p>

                <p className="p000">
                  <DoneIcon
                    sx={{
                      fontSize: "15px",
                      "@media (max-width: 600px)": {
                        fontSize: "10px",
                      },
                    }}
                  />{" "}
                  1 credit (2 credits for Amazon Prime members new to Audible),
                  to use on any title of your choice—yours to keep, even if you
                  cancel.
                </p>
                <p className="p000">
                  <DoneIcon
                    sx={{
                      fontSize: "15px",
                      "@media (max-width: 600px)": {
                        fontSize: "10px",
                      },
                    }}
                  />{" "}
                  The Plus Catalogue—listen all you want to thousands of
                  audiobooks, podcasts, and Audible Originals.
                </p>
                <p className="p000">
                  <DoneIcon
                    sx={{
                      fontSize: "15px",
                      "@media (max-width: 600px)": {
                        fontSize: "10px",
                      },
                    }}
                  />{" "}
                  No commitment—cancel anytime.
                </p>
                <button className="btn000">
                  Start your Free Trial for 90days
                </button>
                <p className="p04">
                  ₹199 per month after 30-day trial. Cancel anytime.{" "}
                </p>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box className="g01"></Box>
            </Grid>
          </Grid>
        </Container>
        <p className="p01">Bring words to life with Audible</p>
        <p className="p02">Here are some of our top picks to get you started</p>

        <Box
          sx={{
            width: { md: "60%", xs: "101%" },
            mx: "auto",
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Best Seller" value="1" sx={{ fontSize: "12px",
                fontWeight:'600',
              '@media (max-width: 600px)': {padding:'10px'}
              }} />
                <Tab
                  label="Audible Originals"
                  value="2"
                  sx={{ fontSize: "12px",fontWeight:'600',
                  '@media (max-width: 600px)': {padding:'10px'}
                }}
                />
                <Tab label="Podcasts" value="3" sx={{ fontSize: "12px",fontWeight:'600',
              '@media (max-width: 600px)': {padding:'10px'}
              }} />
              </TabList>
            </Box>
            <TabPanel value="1"sx={{
              '@media (max-width: 600px)': {
                padding:'10px'
              }
            }}>
              <Grid container spacing={2} justifyContent={"center"}>
                {data.map((items, index) => (
                  <Grid item sm={6} md={2} key={index}>
                    <Card item={items} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Box>
                <Grid container spacing={2} justifyContent={"center"}>
                  {rost.map((items, index) => (
                    <Grid item sm={6} md={2} key={index}>
                      <Card item={items} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </TabPanel>
            <TabPanel value="3">
              
              <Grid container spacing={2} justifyContent={"center"}>
                {data.map((items, index) => (
                  <Grid item sm={6} md={2} key={index}>
                    <Card item={items} />
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
        <Box sx={{ marginTop: "50px" }} >
          <img src="../image/Banner.jpg" className="bb00"></img>
        </Box>
        <p className="p01">Try Audible free</p>
        <p className="p02">It's easy to get started</p>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <img src="./image/img0.png" className="img0"></img>
              <h3 className="hyhy">Start your free trial</h3>
              <p>
                Sign up for a free 30-day trial. Your first audiobook is free,
                yours to keep even if you cancel.
              </p>
            </Grid>
            <Grid item xs={4} md={4}>
              <img src="./image/img1.png" className="img1"></img>
              <h3 className="hyhy">Listen anytime, anywhere</h3>
              <p>
                Download the free Audible app to listen while cooking, doing
                chores, heading to work or before bed.
              </p>
            </Grid>
            <Grid item xs={4} md={4}>
              <img src="./image/img2.png" className="img2"></img>
              <h3 className="hyhy">Entertainment for hours</h3>
              <p>
                Listen all you want to The Plus Catalogue—thousands of Audible
                Originals, audiobooks and podcasts.
              </p>
            </Grid>
          </Grid>
          <button className="btn00">Start your Free Trial for 90days</button>
          <p className="p03">
            ₹199 per month after 30-day trial. Cancel anytime.{" "}
          </p>
        </Container>
        <Box>
          <img src="../image/banner2.jpg" className="bb00"></img>
        </Box>
        <div className="d00">
          <Container
            sx={{
              textAlign: "initial",
              width: "60%",
              mx: "auto",
            }}
          >
            <h1 className="h00">Frequently Asked Questions</h1>
            <p className="p0p">How does the free trial work?</p>
            <p className="p0p">
              What is included with my Audible Premium Plus membership?
            </p>
            <p className="p0p">
              Are there additional benefits for Amazon Prime members?
            </p>
            <p className="p0p">What happens if I want to cancel?</p>
          </Container>
        </div>
        <Container
          sx={{
            display: "flex",
            width: {
              md: "60%",
              xs: "100%",
            },
            mx: "auto",
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={4} md={4}>
              <div className="div00">
                <button className="b0">Contact Us</button>
                <button className="b0">Help</button>
                <button className="b0">How to Listen</button>
                <button className="b0">Listening Apps</button>
                <button className="b0">Mobile Site</button>
                <button className="b0">Audible Suno</button>
                <button className="b0">Facebook</button>
              </div>
            </Grid>
            <Grid item xs={4} md={4}>
              <div className="div01" >
                <button className="b1">Twitter</button>
                <button className="b1">Instagram</button>
                <button className="b1">Audible</button>
                <button className="b1">membership</button>
                <button className="b1">Best Sellers</button>
                <button className="b1">New Releases</button>
                <button className="b1">Indian Listens</button>
              </div>
            </Grid>
            <Grid item xs={4} md={4}>
              <div className="div01">
                <button className="b2">Hindi Audiobooks</button>
                <button className="b2">Free Shows & Audiobooks</button>
                <button className="b2">Mysteries & Thrillers</button>
                <button className="b2">Romance</button>
                <button className="b2">Fiction</button>
                <button className="b2">Sci-Fi & Fantasy</button>
                <button className="b2">Self Development</button>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Foot />
      </body>
    </>
  );
}

export default Home;
