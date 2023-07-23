import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { convertDate } from "../utils/time";
import Loader from "./Loader";
import { toggleModal } from "../redux/action/books";
import { useEffect, useState } from "react";
import { addToFavorites, removeFromFavorites } from "../redux/action/favorites";
import EmptyState from "./EmptyState";
import ImageComponent from "./Image";
import LikeComponent from "./Like";

const Modal = () => {
    const { bookDetail, modalOpen, loadingDetail } = useSelector((store: RootState) => store.books);
    const { favoritesDatas } = useSelector((store: RootState) => store.favorites);
    const [ liked, setLiked ] = useState<boolean>(false);

    if (modalOpen) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "scroll";
    };

    const dispatch = useDispatch<AppDispatch>();
    
    const closeModal = async () => {
        await dispatch(toggleModal(false));
    };
    
    const handleOutsideClick = (e: any) => {
        if (!e?.target || e?.target.classList.contains('modalDialog')) closeModal();
    };

    useEffect(() => {
        if(!loadingDetail && bookDetail && favoritesDatas.length > 0){
            const index = favoritesDatas.findIndex((object: BooksData) => {
                return object.id === bookDetail.id;
            });
            
            index >= 0 ? setLiked(true) : setLiked(false);
        } else {
            setLiked(false);
        }
    }, [favoritesDatas, loadingDetail, bookDetail, liked]);
    
    const handleLike = async () => {
        await liked ? dispatch(removeFromFavorites(bookDetail.id)) : dispatch(addToFavorites(bookDetail));
    };

    return (
        <div id="modalDetail" className={`modalDialog ${modalOpen ? '' : 'hide'}`} onClick={(e:any) => handleOutsideClick(e)}>
            <div>
                <button onClick={() => closeModal()} className="close">X</button>
                <div className="modal-content">
                    <div className="modal-body">
                        {
                            loadingDetail ? 
                                <Loader/>
                            :
                            <>
                            {
                                Object.keys(bookDetail).length === 0 ?
                                    <EmptyState />
                                : 
                                    <div className="left-side">
                                        <div className="detail-image">
                                            <ImageComponent data={bookDetail} />
                                        </div>
                                        <div className="detail-data">
                                            <h1><b>{bookDetail.title}</b></h1>
                                            <p>{bookDetail.author}</p>
                                            <p><small><i>{convertDate(bookDetail.publicationDate)}</i></small></p>
                                            <div className="desc-wrap">
                                                <p>{bookDetail.description}</p>
                                            </div>
                                        </div>
                                        <LikeComponent liked={liked} handleLike={() => handleLike()}/>
                                    </div>
                            }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Modal;