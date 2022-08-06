import "./header.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { useState } from "react";

export default () => {
    const [isCricketLive, setIsCricketLive] = useState(false)

    const [isTennisLive, setIsTennisLive] = useState(false)

    const [isFootballLive, setIsFootballLive] = useState(true)

    const [isRugbyLive, setIsRugbyLive] = useState(true)

    const [isTableTennisLive, setIsTableTennisLive] = useState(false)

    const [isHockeyLive, setIsHockeyLive] = useState(false)

    const [isBaseballLive, setIsBaseballLive] = useState(true)
    return (
        <div className="games-header-section">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        cricket
                        {isCricketLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        tennis
                        {isTennisLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        football
                        {isFootballLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        rugby
                        {isRugbyLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        table tennis
                        {isTableTennisLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        hockey
                        {isHockeyLive && <div className="counter">LIVE</div>}
                    </div>
                    <div className="item">
                        baseball
                        {isBaseballLive && <div className="counter">LIVE</div>}
                    </div>
                </div>
            </div>
            <div className="wrapper2">
                <div className="items">
                    <div className="item">
                        Best Slip
                    </div>
                    <div className="item">
                        Cash Out
                    </div>
                    <div className="item">
                        My bets
                    </div>
                </div>
            </div>
        </div>
    );
};

