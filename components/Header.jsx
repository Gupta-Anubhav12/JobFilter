import React from "react";
import styled from "styled-components";
import Image from "next/image";
import SearchBar from "./SearchBar"
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

   
`

const StyledSection = styled.div`
    width:100%;
    background-color:${props => props.theme.colors.backgroundDark};
    height: clamp(156px,10rem,170px);
    @media (min-width: ${props=>props.theme.breakpoint.tablet})
    {   
        background-image: url('/images/bg-header-desktop.svg');
    }
    @media (max-width: ${props=>props.theme.breakpoint.tablet})
    {
        background-image: url('/images/bg-header-mobile.svg');
    }
`

const SearchBarHolder = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    border-radius: 5px;
    max-width:1110px;
    height:86px;
    position: relative;
    margin-top: -35px;
    display: block;
   
`   



export const Header = (props)=>{

   
    return (
            <Wrapper>
            <StyledSection>
            </StyledSection>
            <SearchBarHolder>
            <SearchBar></SearchBar>
            </SearchBarHolder>
            </Wrapper>
       
    )
}