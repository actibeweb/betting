import "./gamesFeed.scss";
import Slider from '../Slider'
import images from '../../images'
import GameContent from '../gameContent/GameContent'
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

export default () => {
    return (
        <div className="games-feed">
            <div className="wrapper">
                <Slider slides={images} />
                <GameContent></GameContent>
            </div>
        </div>
    );
};
