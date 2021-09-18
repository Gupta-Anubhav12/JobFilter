import React from "react";
import styled from "styled-components";
import Image from "next/image";



const Tag = styled.span`
        ${'' /* width:clamp(45px,120px); */}
        font-size: 15px;
        font-weight: 700;
        background-color: ${props=>props.theme.colors.backgroundLight};
        color: ${props=>props.theme.colors.backgroundDark};
        margin:4px;
        padding: 6px 8px;
        border-radius: 4px;
       :hover{
        background-color: ${props=>props.theme.colors.backgroundDark};
        color: ${props=>props.theme.colors.fontWhite}
       }

`
const TagWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    ${'' /* position:absolute;
    right:50px; */}
    margin-right:40px;        

`

const TagHolder = styled.div`
    color:  ${props=>props.theme.colors.fontBlend});
    display: flex;
`

const LogoDiv = styled.div`

    padding:28px 24px 28px 40px;
    margin:auto;
    @media(max-width:${props=>props.theme.breakpoint.tablet})
    {
        margin:0px;
        padding:55px 24px 28px 15px;
    }
`
const Title = styled.h2`
    font-weight: bold;
    color: #2B3939; 
`
const Detail = styled.span`
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    color:${props=>props.theme.colors.fontLight};
    margin:2px;
    padding: 4px 6px;
    :after{
        content:url("/images/dot.svg");
    }
    :last-child:after{
        content:" ";
    }
`

const Label = styled.span`
    font-weight: bold;
    font-size: 13px;
    line-height: 16px;
    border-radius: 12px;
    color:#FFFFFF;
    margin:4px;
    padding: 4px 6px;
    ${props=>{
        if (props.light){
            return`
            background: #5CA5A5;
            `
        }
        if(props.clear){
            return`
            background:clear;
            color:#5CA5A5
            `
        }
        else{
            return `
            background: #2B3939;
            `
        }
        
    }}

`
const LeftContainer = styled.div`
    display: flex;
`
const RightContainer = styled.div`

`
const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom:32px;
`


const StyledDiv = styled.div`

    background: #FFFFFF;
    box-shadow: 0px 15px 20px -5px rgba(13, 113, 130, 0.15);
    border-radius: 5px;
    display: flex;
    max-width:1110px;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    :hover { 
        ${Title}{
            color: #5CA5A5;
        }
        border-left:5px solid ${props=>props.theme.colors.backgroundDark};
    }
    @media(max-width:${props=>props.theme.breakpoint.tablet})
    {
        flex-direction: column;

    }

`



export const JobCard = (props)=>{
    return(
        <StyledDiv>
         <LeftContainer>
             <LogoDiv>
                 <Image src={props.jobData.logo} width="90px" height="90px"  alt="logo" />
             </LogoDiv>
             <TextContainer>
                 <TagHolder>
                     <Label clear>{props.jobData.company}</Label>
                     {props.jobData.new &&  <Label light>NEW!</Label> }
                     {props.jobData.featured &&    <Label>Featured</Label> }
                    
                   
                 </TagHolder>
                 <Title>{props.jobData.position}</Title>
                
                 <TagHolder>
                     <Detail>{props.jobData.postedAt}</Detail>
                     <Detail>{props.jobData.type}</Detail>
                     <Detail>{props.jobData.location}</Detail>
                 </TagHolder>
                
             </TextContainer>
         </LeftContainer>
         <RightContainer>
            <TagWrapper>
             <TagHolder>
             {props.jobData.tags.map((tag) =>{
                 return(
                    <Tag key={tag}>{tag}</Tag>
                 )
             })}
             </TagHolder>
             </TagWrapper>
         </RightContainer>
        </StyledDiv>
    )
}