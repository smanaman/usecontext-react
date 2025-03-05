import React from 'react';
import { useApi } from '../../Api';
import './Home.css'
import Navbar from '../component/Navbar';
function Home() {
    const { data } = useApi();
    console.log(data);
    return (
      
        <div>
          <Navbar/>
            <div className="body">
            {Array.isArray(data) ? (
                
                data.map((val,i) => (

                    <div key={i} className="card">
                    <img
                    className='imgb'
                      src={val.image}
                      alt="Card Image"
                    />
                    <div className="card-content">
                      <div className="card-title">{val.title} </div>
                      <p className="card-description">
                        Explore the beauty of nature with breathtaking views and refreshing
                        scenery.
                      </p>
                      <button>Learn More</button>
                    </div>
                  </div>
                  
                ))
            ) : (
                <p>No data available</p>
            )}
        </div>
        </div>
    );
}

export default Home;
