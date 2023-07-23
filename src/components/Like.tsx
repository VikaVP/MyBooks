import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "react-tooltip";

interface LikeProps {
    liked: boolean;
    handleLike: Function;
}

const LikeComponent = (props: LikeProps) => {
    return (
        <div className="like-button-wrapper" >
            <div className="like-button" >
                <div className={`love ${props.liked && 'loved'}`} id="tooltip-like" onClick={() => props.handleLike()}>
                    <FontAwesomeIcon icon={faHeart} />
                </div>
                <Tooltip
                    anchorId="tooltip-like"
                    place="top"
                    content={`${props.liked ? 'Unlike this book' : 'Like this book'}`}
                />
            </div>
        </div>
    );
};

export default LikeComponent;