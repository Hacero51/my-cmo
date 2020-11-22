import React from 'react';

 
class Footer extends React.Component {
 
  render() {
 
    return (
        <footer className="footer">
            <p>&copy; {(new Date().getFullYear())} Cmo, Inc. &middot; <a href="https://clinicamatropolitanacmo.com/">Clinica Metropolitana</a> </p>
        </footer>
 
    )
    
  }
 
}

export default Footer;