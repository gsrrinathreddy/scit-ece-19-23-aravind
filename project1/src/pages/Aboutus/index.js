import { Typography } from '@mui/material';
import axios from 'axios';
import {useState,useEffect} from 'react';
import {CircularProgress,Box} from '@mui/material';


export default function Aboutus(){
    let [loader,setLoader]= useState(true);
    let [Aboutme, setAboutme]=useState(null);

    const getAboutMeData = async () => axios.get('http://localhost:8000/Aboutme')
                                                    .then(res=>{
                                                        setAboutme(res.data)
                                                        setLoader(false)
                                                    }).Catch(err => console.log(err))

            useEffect(()=>{
                getAboutMeData();

            },[])
        console.log("Aboutme",Aboutme)

    return(
        <>
       
<Typography>Name: BONGONI ARAVIND</Typography>
<Typography>Father Name: SAMMAIAH</Typography>
<Typography>Mother Name: RAMA</Typography>
<Typography>Email: aravindbongoni835@gmail.com</Typography>
<Typography>Phone No.: 9963390845</Typography>
        </>
        
    )
    }
