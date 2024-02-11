import React from 'react';

const DynamicPage = ({params, searchParams}) => {
    // console.log(searchParams);
    
    return (
        <div>
            Dynamic page {params.id}
           <h1>search by : {searchParams.category}</h1>
        </div>
    );
};

export default DynamicPage;