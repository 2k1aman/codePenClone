import { useState } from "react";
import { Box} from "@mui/material";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';








function Editor({heading,icon,value,color,onchange}) {
  const [open,setOpen] = useState(true);


  const handleChange=(editor,data,value)=>{
    onchange(value);
  }
  return (
    <Box className ="all-editors" style ={open ? null : {flexGrow:0}}>
      <Box sx = {{
        
        display : 'flex',
        background : '#060606',
        color : '#fff',
        fontWeight : '700px',
        justifyContent : 'space-between',

      }}>
        <Box sx={{
            background : '#1d1e22',
            display : 'flex', 
            padding : '9px 12px' }}>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent : "center",
              marginRight : 5,
              paddingBottom : 2,
              borderRadius : 5,
            }}
          >{icon}
          </Box>
          {heading}
        </Box>
        <CloseFullscreenIcon
          fontSize="small"
          style={{alignSelf:'center'}}
          onClick ={()=> setOpen(prevState => !prevState)} 

        />
      </Box>
      <ControlledEditor 
          className='controlled-editor'
          value = {value}
          onBeforeChange={handleChange}
          options={{
            
            theme:'material',
            lineNumbers:'true'

          }}
      />
    </Box>
  );
}

export default Editor