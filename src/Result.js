import React, { useState } from "react";
import "./styles/Result.css";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Navbar from "./Navbar";

function Result() {
    const [copied] = useState(false);

    const backHome = () => {
        window.location.href = "/";
        console.log("you click the back home page");
    };
    return (
        <div>
            <Navbar />
            <div className="firstdiv">
                <button onClick={backHome} className="back"><ArrowBackOutlinedIcon fontSize="large"/> </button>
                <h1 className="h1">IQ Test for kids from 7 to 16 year old</h1>
                <div className="buttondiv">
                <button className="againtest">
                    <RefreshOutlinedIcon />
                    Take the test again
                </button>
                </div>
            </div>
            <div className="anotherdiv">
                <h2 className="result__h2">Your result:</h2>
                <p className="result__description-wrap">Test time: 00:02:09, average users 00:03:23.</p>
                <div className="result__description-wrap">
                    <p>Test time: 00:02:09, average users 00:03:23.</p>
                    <p>
                        Your IQ is 115. This corresponds to an above average level IQ. In
                        this test you have 04 correct answers from 05. This is a good result
                        for your age 16. Andy Warhol has the same IQ!
                    </p>
                    <p>
                        Please note that the first four questions of the test were only the
                        practice questions and they do not count towards the final result.
                    </p>
                    <h2 className="result__h2">Permanent result link:</h2>
                    <div>
                        <p><a className="link" href="https://en.testometrika.com/a/vmSu6wcT%252B6ZetuuKOBGAqw/">
                            https://en.testometrika.com/a/vmSu6wcT%252B6ZetuuKOBGAqw/
                        </a>
                        <button className="copybtn">{!copied ? "Copy" : "Copied!"}</button>
                        </p>
                    </div>
                    <h2 className="result__h2">Share result:</h2>
                    <p>
                        <WhatsAppIcon fontSize="large"  className="WhatsAppIcon" />
                        <TelegramIcon fontSize="large"  className="blue" />
                        <TwitterIcon fontSize="large"  className="blue" />
                        <PinterestIcon fontSize="large"  className="red" />
                        <MoreHorizIcon fontSize="large"  className="blue" />
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Result;
