import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

function DataShow({transes}) {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const [neededData, setNeededData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(`${url}`)
                const data = await res.json();

                if(data) {
                    const newData = data.map(ele => {
                        const {
                            postId,
                            id,
                            name,
                            email,
                            body
                        } = ele

                        return {
                            postId,
                            id,
                            name,
                            email,
                            body
                        }
                    })
                    setNeededData(newData)
                } else {setNeededData([])}
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [transes])

    return (
        <FACont>
            <div className="mainRow">
                <span>
                    DATE
                    <span className="lolItWorks">
                        <KeyboardArrowUpIcon />
                        <KeyboardArrowUpIcon />
                    </span>
                </span>
                <span>
                    PRODUCT
                </span>
                <span>
                    SIZE (US)
                </span>
                <span>
                    WEBSITE
                </span>
                <span>
                    PRICE
                </span>
                <span>
                    STATUS
                </span>
            </div>
            <DataCont>
                <div>
                {neededData.map(lol => {
                    if (lol.id < transes ){
                    return <div key={lol.id}>

                        <span>{`${lol.id}/ ${lol.postId}/2021`}</span>
                        <span title={lol.name}>{lol.name.length <= 8 ? lol.name : `
                            ${lol.name[0]}
                            ${lol.name[1]}
                            ${lol.name[2]}
                            ${lol.name[3]}
                            ${lol.name[4]}
                            ...
                            `}</span>
                            <span>{lol.postId}</span>
                            <span title={lol.email}>{lol.email.length <= 8 ? lol.email : `
                            ${lol.email[0]}
                            ${lol.email[1]}
                            ${lol.email[2]}
                            ${lol.email[3]}
                            ${lol.email[4]}
                            ${lol.email[5]}
                            ${lol.email[6]}
                            ${lol.email[7]}
                            ...
                            `}</span>
                            <span>{`${lol.postId}${lol.id}$`}</span>
                            <span className={lol.id % 2 === 0 ? "success" : "fail"}>{lol.id % 2 === 0 ? "SUCCESS" : "FAIL"}</span>
                    </div>
                } else {return ""}})}
                </div>
            </DataCont>
        </FACont>
    )
}

export default DataShow

const FACont = styled.div`
    margin-top: 50px;
    .mainRow {
        background-color: #2B2F55;
        display: flex;
        justify-content:space-between;
        font-size: 14px;
        border-radius: 4px;
        span {
            padding: 10px 15px;
            position: relative;
        }
        .lolItWorks {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: -40%;
            right: -50%;
            >.MuiSvgIcon-root:last-of-type {
                transform: rotateZ(180deg);
            }
        }
    }
`
const DataCont = styled.div`
   >div { 
        max-height: 75vh;
        overflow-y: scroll; 
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        font-size: 14px;
        >div {
            display: flex;
            justify-content:space-between;
            text-align: center;
            padding: 10px 15px;
            span {
                display: flex;
                justify-content: flex-start;
                padding: 5px 0;
                width: 100%;
            }
            span:nth-of-type(3) {
                justify-content: center;
            }
            span:nth-of-type(5) {
                justify-content: flex-end;
                padding-right: 15px;
            }
            span:nth-of-type(6) {
                justify-content: center;
            }
            span.success{
                color: #63F4F7;
                border: 2px solid #63F4F7;
                box-shadow: inset 0 0 5px 0 #63F4F7;
            }
            span.fail{
                color: #FE7448;
                border: 2px solid #FE7448;
                box-shadow: inset 0 0 5px 0 #FE7448;
            }
        }
    }
    >div::-webkit-scrollbar {
        background: #36395d;
        width: 5px;
    }
    >div::-webkit-scrollbar-thumb {background-color: #888;border-radius: 4px;}
  
`
