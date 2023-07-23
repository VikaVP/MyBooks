/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { getBookDatas } from "../redux/action/books";

const Pagination = () => {
    const { total, currentPage  } = useSelector((store: RootState) => store.books);
    const [ totalPage, setTotalPage ] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        const countTotalPage = Math.ceil(+total / 5);
        setTotalPage(countTotalPage);
    }, [total]);

    const handleClick = async (page: number) => {
        dispatch(getBookDatas(page));
    };

    const displayPaginate = (num: number) => {
        let components = [];
        if(num){
            components.push(<a onClick={() => handleClick(currentPage - 1)} className={currentPage === 1 ? 'disabled' : ''} key="prev">&laquo;</a>)
        };
        for (let i = 1; i <= num; i++) {
            console.log(i);
            components.push(<a onClick={() => handleClick(i)} key={i} className={currentPage === i ? 'active' : ''}>{i}</a>)
        }
        if(num){
            components.push(<a onClick={() => handleClick(currentPage + 1)} className={currentPage === num ? 'disabled' : ''} key="next">&raquo;</a>)
        };
        return components;
    };
    
    return (
        <div className="pagiantion-wrapper">
            <div className="pagination">
                {
                    displayPaginate(totalPage)
                }
            </div>
        </div>
    )
}

export default Pagination;