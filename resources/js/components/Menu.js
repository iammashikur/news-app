
import axios from 'axios';
import React, { useState } from 'react';


function Menu(){

    const [books, setBooks] = useState(null);

    const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

    const fetchData = async () => {
        const response = await axios.get(apiURL)

        document.getElementsByClassName('data').innerHtml(response);
    }

        return(


            <div>
                <div className="data"></div>
            </div>



        )

}

export default Menu;
