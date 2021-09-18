import React,{useContext,useState} from 'react';
import styled from "styled-components";
import Image from "next/image"
import Select, { components } from 'react-select';
import {DataContext} from "../utils/DataContext"
const colourOptions = [
    { "value": "one", "label": 'Frontend' },
    { "value": "2", "label": 'CSS' },
    { "value": "3", "label": 'JavaScript' },
]

const StyledSelect = styled(Select)`

    min-width:1110px;
    line-height:75px;
    @media (max-width:1120px)
    {   
        min-width:735px;
    }
    @media (max-width:750px)
    {   
        min-width:480px;
    }
    @media (max-width:500px)
    {   
        min-width:340px;
        line-height:45px;
    }
`
const customStyles = {
    clearIndicator: (base, state) => ({
        ...base,
        cursor: 'pointer',
        color: '#5CA5A5',
        fontWeight: 700,
        fontSize: "16px",
        '&:hover': {
            textDecoration: 'underline',
        },
        padding: "5px 40px 5px 5px",

    }),
    option: (provided, state) => ({
        ...provided,
        color: "#5CA5A5",
        padding: 20,

        lineHeight: "12px",
    }),
    multiValueLabel: (provided, state) => ({
        ...provided,
        color: "#5CA5A5",
        background: "rgba(92, 165, 165, 0.1)",
        maxHeight: "40px",
        textAlign: "center",
        lineHeight: "40px",
        paddingLeft: "10px",
        paddingRight: "10px",
        fontWeight: "bold",
        mixBlendMode: "normal",
        borderRadius: "4px",
    }),
    multiValueRemove: (provided, state) => ({
        ...provided,
        fontWeight: "bold",
        fontSize: "20px",
        background: "#5CA5A5",
        color: "white",
        width: "35px",
        '&:hover': {
            background: " #2B3939",
            color: "white",
        },
        padding: "10px",
        borderRadius: "0px 4px 4px 0px",



    }),
    dropdownIndicator: (provided, state) => ({
        ...provided,
        display: "none",

    }),
    control: (provided, state) => ({
        ...provided,
        paddingLeft: "20px"
    })
}

const CustomClearText = () => 'clear';
const ClearIndicator = props => {
    const {
        children = <CustomClearText />,
        getStyles,
        innerProps: { ref, ...restInnerProps },
    } = props;
    return (
        <div
            {...restInnerProps}
            ref={ref}
            style={getStyles('clearIndicator', props)}
        >
            <div style={{ padding: '0px 5px' }}>{children}</div>
        </div>
    );
};

const MultiValueRemove = props => {
    return (

        <components.MultiValueRemove {...props}>
            <Cross src="/images/cross.svg" width="50" height="50" />
        </components.MultiValueRemove>
    );
};

const Cross = styled(Image)`
    padding:15px;
    height:10px;
    width:10px;
 `


export default function SearchBar() {
    const [options,selected,setSelected] = useContext(DataContext);
    return (
        <StyledSelect
            closeMenuOnSelect={false}
            components={{ ClearIndicator, MultiValueRemove }}
            styles={customStyles}
            // defaultValue={[colourOptions[4], colourOptions[5]]}
            isMulti
            onChange={setSelected}
            options={options}
        />
    );
}

