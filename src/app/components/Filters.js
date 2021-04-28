import React, { useState } from 'react'
import styled from 'styled-components'

import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';

function Filters({ setTranses}) {
    const [oneD, setOneD] = useState(false);
    const [oneM, setOneM] = useState(true);
    const [oneY, setOneY] = useState(false);

    return (
    <FACont>
        <FilterBy>
            <h2>Filter by :</h2>
            <div>
                <span onClick={() => {setOneD(true); setOneM(false); setOneY(false); setTranses(72)}} className={oneD ? "active" : ''}>1D</span>
                <span onClick={() => {setOneD(false); setOneM(true); setOneY(false); setTranses(220)}} className={oneM ? "active" : ''}>1M</span>
                <span onClick={() => {setOneD(false); setOneM(false); setOneY(true); setTranses(460)}} className={oneY ? "active" : ''}>1Y</span>
            </div>
        </FilterBy>
        <TtlCheck>
            <div>
                <h2>Total Checkouts</h2>
                <p><span>72</span>&nbsp;/82</p>
            </div>
            <ShoppingCartTwoToneIcon />
        </TtlCheck>
        <TtlFail>
            <div>
                <h2>Total Failure</h2>
                <p><span>10</span>&nbsp;/82</p>
            </div>
            <ShoppingCartTwoToneIcon />
        </TtlFail>
    </FACont>
    )
}

export default Filters
const FACont = styled.div`
    margin-top: 12vh;
    display: flex;
    justify-content: flex-start;
    >div {
        margin-right: 25px;
        background-color: #2B2F55;
        padding: 20px 15px;
        border-radius: 4px;
    }
    h2 {
        font-size: 14px;
        margin-bottom: 20px;
    }
    p {
        font-size: 14px;
        color: #bbb;
        span {
            font-size: 28px;
            color: #63F4F7;
        }
    }
    .MuiSvgIcon-root {
        font-size: 28px;
        box-sizing: content-box;
        padding: 15px;
        border-radius: 50%;
        background: #63F4F720;
        color: #63F4F7;
    }
`
const FilterBy = styled.div`
    width: 22%;
        >div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                padding: 10px;
                margin-right: 10px;
                background: #36395d;
                border-radius: 4px;
                cursor: pointer;
            }
            span.active{
                background-color: #01A9F4;
            }
        }
`
const TtlCheck = styled.div`
    display: flex;
    width: 42%;
    justify-content: space-between;
    align-items: center;
`
const TtlFail = styled.div`
    display: flex;
    width: 42%;
    justify-content: space-between;
    align-items: center;
    margin-right: 0px !important;
    p > span {
        color: #FE7448;
    }
    .MuiSvgIcon-root {
        
        background: #FE744820;
        color: #FE7448;
    }
`
