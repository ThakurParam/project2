import React,{useState} from "react";
import Home from "./Home";
import { Box, Button, Container, Grid } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
 



function  Help({ onSearch  }) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
      onSearch(query);}
const contt={
  padding:'5px',
  height:'12vh',
  width:{
    xs:'100%',
    md:'70%',
  },
  mx:'auto',

  textAlignLast: 'start',
  '@media (min-width:600px)': {
    padding:'0px',
    height:'15vh',
  }
}
const Bb={
  '&:hover':{
    textDecoration: 'Underline'
  }
 
}
const Bc={
  marginLeft:'6vh'
}
const Bd={
  width:{
    md:'40%',
    xs:'52%'
  }
}
const conttt={
  width:'70%',
  mx:'auto',
  marginTop:'50px'
}
    return(


        <>
        <body>
<Container style={contt}>
  <div sx={{
    display:'flex',
    flexDirection:'row',
  }}> 
  <img src="./image/ama.png"></img>
  <Button style={Bb}>Home</Button>
  <Button style={Bb}>How to Listen</Button>
  <Button style={Bb}>Membership</Button>
  <Button style={Bb}>Essentials</Button>
  <Button style={Bb}>My Audible</Button>
 
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={Bc}
      />
      <button onClick={handleSearch} >Search</button>
    </div>
  
</Container>
<Container style={conttt}>
  <h1> How can we Help you?</h1>
  <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={Bd}
      />
</Container>
<Box sx={{
  width:'60%',
  mx:'auto',
  backgroundColor:'palegoldenrod'
}}>
 
</Box>
<Container>
  
</Container>
</body>
        </>
    );
    
}
export default Help;