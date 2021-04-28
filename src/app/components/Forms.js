import React, {  useState } from 'react'
import styled from 'styled-components'

import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import ChildCareOutlinedIcon from '@material-ui/icons/ChildCareOutlined';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DvrRoundedIcon from '@material-ui/icons/DvrRounded';
import AppleIcon from '@material-ui/icons/Apple';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import LocalPrintshopOutlinedIcon from '@material-ui/icons/LocalPrintshopOutlined';

function Forms() {
    const [transingForm, setTransingForm] = useState(false);
    const [transingConfirm, setTransingConfirm] = useState(false);
    const [eyeHide, setEyeHide] = useState(true);
    const [input, setInput] = useState('');
    let emailSent = (e) => {
        e.preventDefault();
        setTransingForm(!transingForm)
        setTransingConfirm(!transingConfirm);
    }
    return (
        <FACont>
            <Licence >
                <h3>License key</h3>
                <div>
                    <span>xxxx - xxxx - xxxx - xxxx</span>
                    <span onClick={() => setEyeHide(!eyeHide)}>{eyeHide ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}</span>
                </div>
                <div>
                    <button>Renew Now<span>stripe</span></button>
                    <button>Deactive</button>
                </div>
                <p>Next Renewal on 22 Mar 2021</p>
            </Licence>
            <Discord>
                <div>
                    <h3><ChildCareOutlinedIcon /> Discord ID</h3>
                    <p>antony#2142</p>
                </div>
                <button>Unbind</button>
            </Discord>
            <Transfer>
                <h3><SyncAltIcon />Transfer</h3>
                <div>
                    <div>
                        <p>Current Email</p>
                        <p>anthony2142@emaill.com</p>
                    </div>
                    <button onClick={()=> setTransingForm(!transingForm)}>Transfer to<span><ChevronRightIcon /></span></button>
                </div>
                <TransForm className={!transingForm ? "d-none" : ""}>
                    <div className="innerForm">
                        <h2>Transfer</h2>
                        <form>
                            <div>
                                <label htmlFor="email">Transfer to</label>
                                <input 
                                  required={true} type="email" name="email" 
                                  placeholder="Enter the email address." 
                                  value={input}
                                  onChange= {e => setInput(e.target.value)}
                                />
                            </div>
                            <div>
                                <button onClick={()=> setTransingForm(!transingForm)} type="button">Cancel</button>
                                <button onClick={emailSent} type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </TransForm>
                <TransConfirm className={!transingConfirm ? "up-d-none" : ''}>
                    <div className="innerForm">
                        <span onClick={() => {setTransingConfirm(!transingConfirm); setInput("")}} className="x">X</span>
                        <LocalPrintshopOutlinedIcon/>
                        <h2>Confirmation Email Sent</h2>
                        <p>We sent a link to <a href="mailto:salah.elraies@gmail.com">{input ? input : "anthony2142@email.com"}</a> and <a href="mailto:salah.elraies@gmail.com">jamesconor@email.com</a> . Check the email to confirm the transfer.</p>
                        <p>Didn’t get a confirmation email?</p>
                        <p>Check your spam or <a href="mailto:salah.elraies@gmail.com">Send Again</a></p>
                    </div>
                </TransConfirm>
            </Transfer>
            <GetApp>
                <div><DvrRoundedIcon />Desktop App</div>
                <div>
                    <button><span><AppleIcon /></span>Download for MacOS</button>
                    <button><span><DesktopWindowsIcon /></span>Download for Windows</button>
                </div>
            </GetApp>
        </FACont>
    )
}

export default Forms

const FACont = styled.div`
    width: calc(35% - 25px);
    margin-left: 25px;
    margin-top: 12vh;
    h3 {
        font-size: 15px;
        color: #bbb;
    }
    >div {
        background-color: #2B2F55;
        padding: 20px;
        border-radius: 4px;
    }
`
const Licence = styled.div`
    padding-top: 50px !important;

    >div:first-of-type {
        display: flex;
        justify-content: space-between;
        >span:first-of-type {
            letter-spacing: 4px;
        }
        .MuiSvgIcon-root {
            color: #63F4F7;
            cursor: pointer;
        }
        
    }
    button:first-of-type {
        background: #01A9F4;
        color: #fff;
        padding: 20px 15px;
        width: 59%;
        margin-right: 2%;
        border: none;
        cursor: pointer;
        span {
            margin-left: 100px;
            font-size: 20px;
        }
    }button:first-of-type:hover {background: #0069FF;}
    button:last-of-type {
        background: #36395d;
        color: #EC4165;
        padding: 20px 15px;
        width: 39%;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
    button:last-of-type:hover {text-shadow: 0 0 20px #EC4165; box-shadow:inset 0 0 10px 2px #EC4165}
`
const Discord = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
        display: flex;
        color: #fff;
        .MuiSvgIcon-root {
            color: #01A9F4;
            margin-right: 10px;
        }
    }
    >button {
        width: 39%;
        background: #36395d;
        color: #EC4165;
        padding: 20px 15px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
    }
    >button:hover {text-shadow: 0 0 20px #EC4165; box-shadow:inset 0 0 10px 2px #EC4165}
`
const Transfer = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    h3 {
        display: flex;
        color: #fff;
        .MuiSvgIcon-root {
            color: #01A9F4;
            margin-right: 10px;
        }
    }
    >div {
        display: flex;
        align-items: space-between;
        width: 100%;
        justify-content: space-between;
        p{
            font-size: 12px;
        }
        p:first-of-type{color: #bbb;margin-top: 10px;}
    }
    button {
        width: 39%;
        background: #36395d;
        color: #1EC1C3;
        padding: 20px 15px;
        border: none;
        cursor: pointer;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover {text-shadow: 0 0 20px #1EC1C3; box-shadow:inset 0 0 10px 2px #1EC1C3}
    }
`
const TransForm = styled.div`
    position: fixed;
    top: 0;right: 0;
    width: 100vh;
    height: 100vh;
    transition: .4s;
    background-color: #00000040;
    >.innerForm {
        display: block !important;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 37vw !important;
        /* height: 20vw !important; */
        padding: 20px 00px 0 00px;
        transform: translate(-50%, -50%);
        background: #2d325a;
        border-radius: 8px;
        h2{margin-bottom: 20px;font-weight: 400;padding: 0 20px;}
        form {
            div:first-of-type {
                padding: 0 20px 20px;
                input[type="email"] {
                    background: #252A4B;
                    border: none;
                    width: 100%;
                    padding: 15px 10px;
                    border-radius: 4px;
                    color: #fff;
                }
                input[type="email"]:focus {
                    border: none;
                    outline: none;
                }
                input[type="email"]:focus::placeholder{
                    color: #fff
                }

            }
            input::placeholder{color: #606481;transition: .4s;}
            div:last-of-type {
                display: flex;
                justify-content: flex-end;
                padding: 20px 0;
                background: #292d52;
                button {margin-right: 20px;color: #fff;}
                button:first-of-type {background: #2e325c;}
                button:first-of-type:hover {
                    background: #1e224c;
                }
                button:last-of-type {background: #1ec1c3;}
                button:last-of-type:hover {
                    background: #0eb1f3;
                }
            }
        }
    }
`
const TransConfirm = styled.div`
position: fixed;
    top: 0;right: 0;
    opacity: 1;
    width: 100vh;
    height: 100vh;
    transition: .4s;
    background-color: #00000040;
    >.innerForm {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        top: 50%;
        left: 50%;
        width: 37vw !important;
        height: 50vh;
        position: relative;
        padding: 10px;
        text-align: center;
        .x{
            position: absolute;
            top: 10px;
            right: 20px;
            color: #bbb;
            cursor: pointer;
        }
        .x:hover{color: #fff;}
        padding: 20px 00px 0 00px;
        transform: translate(-50%, -50%);
        background: #2d325a;
        border-radius: 8px;
        .MuiSvgIcon-root {
            font-size: 38px;
            color: #63F4F7;
            box-sizing: content-box;
            padding: 20px;
            background: #63F4F720;
            border-radius: 50%;
            margin-top: 30px;
        }
        h2{margin-bottom: 20px;font-weight: 400;padding: 0 20px;}
        p {
            max-width: 65%;
            a {
                color: #4Ef1f3;
            }
            a:hover {
                color: #1Ec1c3;
            }
        }
        p:first-of-type{color: #fff;}
        p:nth-of-type(2){color: #bbb;}
        p:last-of-type{margin-bottom: 60px;}
    }
`


const GetApp = styled.div`
    margin-top: 25px;
    margin-bottom: 15vh;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    place-items: center;
    >div:first-of-type {
        grid-column: 1 / span 4;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        user-select: none;
    }
    >div:last-of-type {
        grid-column: 7 / span 6;
    }
    button {
        background: #1EC1C3;
        border: none;
        color: #fff;
        padding: 15px 00px 15px 00px;
        width: 100%;
        margin-bottom: 12px;
        cursor: pointer;
        border-radius: 4px;
        user-select: none;
        span {
            color: #19A2A4;
            margin-right: 10px;
            font-size: 10px;
        }
    }
    button:hover {
        background: #0Eb1b3;
    }
    
`