import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function Pagination(props) {
    const {page,handlePageChange,totalPages} = useContext(AppContext);

    return (
        <div className=' fixed bottom-0 bg-white w-full flex justify-center items-center border-2'>
            <div  className='w-11/12 max-w-[600px] flex justify-between items-center py-2'>
                <div>
                    {
                        page > 1 &&
                        <button onClick={ () => handlePageChange(page-1)}
                        className=' rounded-md px-4 py-1 border border-black mr-2 bg-gray-200'>
                            Previous
                        </button>
                    }
                    {
                        page < totalPages &&
                        <button onClick={ () => handlePageChange(page+1)}
                        className=' rounded-md px-4 py-1 border border-black bg-gray-200'>
                            Next
                        </button>
                    }
                </div>

                <p className=' text-sm font-bold'>
                    Page {page} of {totalPages}
                </p>
            </div>
            
        </div>
    );
}

export default Pagination;