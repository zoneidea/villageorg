import React from 'react';
// import { Link } from 'react-router-dom';
// import PageNotFound from '../assets/images/image-not-found.jpg';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            {/* <img src={PageNotFound}  /> */}
            <p style={{textAlign:"center"}}>
                Notfound
              {/* <Link to="/">Go to Home </Link> */}
            </p>
          </div>;
    }
}
export default NotFoundPage;