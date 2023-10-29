import { Container } from "@mui/material";
import React from "react";
function Foot() {
    return(
<>

<Container sx={{
    mx:'auto',
    width:{
        md:'60%',
        xs:'100%',
    },
 borderTop:'5px solid black',
}}>
    <p className="p00">© Copyright 1997 - 2023 Audible, Inc  Conditions of Use  Privacy Notice  Interest-Based Ads  Recurring Payment Terms  India (English)</p>
</Container>

</>
    );
    
}
export default Foot;