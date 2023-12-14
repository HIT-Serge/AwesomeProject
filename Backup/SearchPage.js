import ReactPaginate from 'react-paginate';
import ReactDOM from 'react-dom/client';
import ShowReel from './ShowReel';

export default function SearchPage (props) {

    let stateAsString = localStorage.getItem('state');
    let watchList = JSON.parse(stateAsString);
    let dataArray = props.data;

       
    if (watchList === null) {
        watchList = [];
    }
     
    if (dataArray === undefined) {
        dataArray = [];
    }


    let total_pages = Math.ceil(props.data.total_pages);
    const changePage = ({selected}) => props.changePage(selected);


    return (
     <>   
   
    {dataArray !== undefined && <ShowReel type='watchlist' className="showreel" array={dataArray.results} watchList={watchList}
                                        />}
    <ReactPaginate
            previousLabel={'Previous'}
            nextlabel={'Next'}
            pageCount={total_pages}
            onPageChange={changePage}
            containerClassName={"navigationButtons"}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"navigationDisabled"}
            activeClassName={"navigationActive"}
    />
    </>   
    );
    
}