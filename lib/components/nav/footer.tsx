import React from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PolicyIcon from '@mui/icons-material/Policy';
import PublicIcon from '@mui/icons-material/Public';
import ContactsIcon from '@mui/icons-material/Contacts';
import Link from "next/link";
import Cookies from 'universal-cookie';

export default function FooterComponent() {
  const cookies = new Cookies();
  const termState = cookies.get('termState');

  return (
    <>
      <Footer>
        {
          termState && 
          <Stack style={{ marginTop: "0.5em" }} direction="row" spacing={5}>
        
          <Link href="/views/home/">
            <HomeIcon />
          </Link>

          <Link href="/views/about/">
            <InfoIcon />
          </Link> 

          <Link href="/views/terms/">
            <PolicyIcon />
          </Link>

          <Link href="">
            <PublicIcon />
          </Link>   
            
          <Link href="/views/contact/">
            <ContactsIcon />
          </Link>  
            
          </Stack>
        }        
      </Footer>
    </>
  );
}


const Footer = styled.div`
  background-color: #249dd9;
  width: 100%;
  padding: 2em;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  height: 10em;
`;
