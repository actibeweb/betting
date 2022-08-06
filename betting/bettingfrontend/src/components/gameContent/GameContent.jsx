import "./gameContent.scss";
import GameContentHeader from "../gameContent/GameContentHeader"
import Content from "../gameContent/Content"

export default () => {
    return (
        <div className="games-content">
                <GameContentHeader></GameContentHeader>
                <Content></Content>
        </div>
    );
};
