import React, { useContext } from 'react';
import Nav from './../Navigation/Menu/menu';
// import Nav from './../Navigation/Menu/Nav';
import Footer from './../Navigation/Footer';
import { AuthContext } from './../../../Context/authContext';

const LayoutPage = (props) => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuth;
  console.log('isAuthenticated:' + isAuthenticated);
  return (
    <>
      <div className="app-header">
        {isAuthenticated && <Nav {...props}></Nav>}
      </div>
      <div className="app-content">{props.children}</div>
      <Footer />
    </>
  );
};
export default LayoutPage;
