import React,{useState,useEffect} from 'react';
import Box from './BoxComponent';
import '../css/style.css';
import {data} from '../data';
export default function Body() {
const [content,setContent] = useState([]);
useEffect(() => {
    setContent(data);
},[])
       return(
               <div className="box-body">
                   {
                        content.map((item) => {
                            return <Box item={item} />
                    })
                    }
                </div>
                 
                )
            }
    


