/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux/store';
import { getBookDatas } from './redux/action/books';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Pagination from './components/Pagination';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { ToastContainer } from 'react-toastify';
import EmptyState from './components/EmptyState';

function App() {
  const { bookDatas, loading } = useSelector((store: RootState) => store.books);

  const dispatch = useDispatch<AppDispatch>();

  const getDatas = async () => {
    dispatch(getBookDatas(1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getDatas()
    }, 10);
        
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  }, [bookDatas]);
  
  return (
    <>
      <NavBar/>
      <div className="book-wrapper">
        <h1 className='title'>Book Lists</h1>
        {
          loading ?
            <Loader/>
          :
          <>
          {
            bookDatas.length > 0 ? 
              <>
                <div className="book-list">
                  {
                      bookDatas.map((data: BooksData, index: number) => (
                        <Card data={data} key={index}/>
                      ))
                  }
                </div>
                <Pagination/>
              </>
            : <EmptyState/>
          }
          </>
        }
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="colored"
      />
      <Footer/>
      <Modal/>
    </>
  );
}

export default App;
