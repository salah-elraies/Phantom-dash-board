import React, { useState } from 'react'
import styled from 'styled-components'

import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Person() {
    const [chevs, setChevs] = useState(false);
    const [newNotify, setNewNotify] = useState(false);
    return (
        <PersonCont>
            <div className="notify">
                <span className={newNotify ? "d-n-none" : ''}></span>
                <NotificationsIcon onClick={() => setNewNotify(!newNotify)} className={newNotify ? "work" : ''} />
                <Messages className={!newNotify ? "d-n-none" : ''}>
                    <h3>Notifications</h3>
                    <div className="message">
                        <CheckCircleIcon />
                        <div><h4>Transfer link confirmed</h4> by anthony2142@email.com</div>
                        <span className="time">2 min ago</span>
                    </div>
                </Messages>
            </div>
            <div className="per">   
                <img src="data:image/jpeg;base64,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" alt="person... or soo" />
                <div className="info">
                    <h2>name</h2>
                    <p>mail</p>
                </div>
            </div>
            <KeyboardArrowUpIcon onClick={() => setChevs(!chevs)} className={chevs ? "active" : ""} /> 
        </PersonCont>
    )
}

export default Person

const PersonCont = styled.div`
    position: fixed;
    top: 0;
    right: 50px;
    width: 100%;
    /* height: 15vh; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .d-n-none {
        transform: scale(0);
    }
    .work {
        background: #01A9F4 !important;
    }

    .MuiSvgIcon-root{cursor: pointer;}
    >.notify{
        position: relative;

        .MuiSvgIcon-root{
            margin-right: 30px;
            padding: 5px;
            background: transparent;
            box-sizing: content-box;    
            border-radius: 8px;
            transition: all .4s ease-in-out;
        }
        span {
            position: absolute;
            width: 7px;
            height: 7px;
            top: 0;
            right: 50%;
            background: #FE7448;
            border-radius: 50%;
        }
        /* messages here */
    }
    >.MuiSvgIcon-root{
        margin-left: 10px;
        transform: rotateZ(180deg);
        transition: all .5s linear;
    }
    >.MuiSvgIcon-root.active{
        transform: rotateZ(0deg) !important;
    }

    .per {
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        padding-top: 10px;
        img {
            width: 65px;
            height: 65px;
            object-fit: cover;
            border-radius: 50%;
        }
        .info {
            padding-left: 10px;

            > h2 {
                margin-bottom: 10px;
                font-size: 14px;
            }
            p {
                margin-bottom: 10px;
                font-size: 12px
            }
        }
    }
`
const Messages = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 11vh;
    right: 5vw;
    width: 30vw;
    padding: 20px;
    background: #2c3159;
    border-radius: 8px;
    h3 {
        margin-bottom: 20px;
    }
    .message {
        width: 100%;
        border: 2px solid #FE7448;
        border-radius: 4px;
        padding: 10px;
        color: #bbb;
        h4 {color: #fff;}
        span {
            all: unset;
        }
    }
    .MuiSvgIcon-root {
        color: #1EC1C3;
        padding: 10px;
        box-sizing: content-box;
        font-size: 28px;
        background: #1EC1C320;
        border-radius: 50%;
    }
`