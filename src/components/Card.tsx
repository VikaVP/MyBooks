import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { convertDate } from "../utils/time";
import { getBookDetail, toggleModal } from "../redux/action/books";
import ImageComponent from "./Image";

const CardComponent = (props: Props) => {
    const dispatch = useDispatch<AppDispatch>();
    
    const openModal = async (id: number) => {
        await dispatch(toggleModal(true));
        await dispatch(getBookDetail(id));
    };

    return   (
        <div className="card-wrapper">
            <div className="card">
                <ImageComponent data={props.data} />
                <div className="container">
                    <h1><b className="resto-title">{props.data.title}</b></h1>
                    <p>{props.data.author}</p>
                    <p><small><i>{convertDate(props.data.publicationDate)}</i></small></p>
                    <p className="ellipsis-text">{props.data.description}</p>
                    <button id={`${props.data.id}`} className="see-detail" onClick={() => openModal(props.data.id)}>View More</button>
                </div>
            </div>
        </div>
    )
};

export default CardComponent;