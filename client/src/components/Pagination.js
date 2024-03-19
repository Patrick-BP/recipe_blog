import { useState } from "react";

function Pagination({postPerPage, totalPosts, paginate}) {
const pageNumbers=[];

for(let i=1; i<= Math.ceil(totalPosts / postPerPage); i++){
    pageNumbers.push(i)
}

const [activepage, setActivePage] = useState(1)
const handlePageClick = (number)=>{
    setActivePage(number);
    paginate(number)
}

    return ( 
    <div className="d-flex justify-content-center">
       
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>(
                    <li key={number} className={`page-item ${activepage === number ? "active" : ""}`}>
                        <a href="#top" onClick={()=>{
                            handlePageClick(number);
                            paginate(number)
                        }}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
    
        );
}

export default Pagination;