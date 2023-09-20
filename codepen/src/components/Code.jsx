import React, { useContext } from 'react';
import Editor from './Editor';
import {DataContext} from '../context/dataprovide';


function Code() {
  const {html,setHtml,css,setCss,js,setJs} = useContext(DataContext);

  return (
    <box className="code-box">
      <Editor 
        heading = "HTML" 
        icon = "/"
        color = "#FF3C41"
        value = {html}
        onchange = {setHtml}
        /> 
        <Editor 
        heading = "CSS"
        icon = "*" 
        color = "#0EBEFF"
        value = {css}
        onchange = {setCss}
        /> 
        <Editor 
        heading = "JS"
        icon = "{}" 
        color = "#FCD000"
        value = {js}
        onchange = {setJs}
        /> 
    </box>
  )
}

export default Code



