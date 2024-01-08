// import React from 'react'
// import { Container, Typography, Button, AppBar, Toolbar, containerClasses } from '@mui/material';
// function Footer() {
//   return (
//     <div>
//         <footer className="fthome" style={{backgroundcolor: 'black',
//   padding: '20px 0',
//   position: "relative",
//   bottom: '0',
//   width: '100%',
//   marginTop: 'auto',
//   textAlign: 'center'}}>
//         <Container>
//           <Typography variant="body2" color="textSecondary" align="center">
//             © 2023 FoodieHub. All rights reserved.
//           </Typography>
//         </Container>
//       </footer>
//     </div>
//   )
// }
// export default Footer
import React from 'react';
import { Container, Typography, Link, Grid } from '@mui/material';
import logofh from './logofh.jpeg';

function Footer() {
  return (
    <div>
      <footer
        className="footer"
        style={{
          background: '#C19AB5',
          padding: '20px 0',
          position: 'relative',
          bottom: '0',
          width: '100%',
          marginTop: 'auto',
          textAlign: 'center',
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Cities
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Explore FoodieHub in these cities:
              </Typography>
              <ul>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Coimbatore
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Karur
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Trichy
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                Social Media
              </Typography>
              <Link href="#" color="inherit" variant="body2">
              <img src='https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1699315200&semt=ais'style={{width:'25px', height:'15px'}}></img>
              </Link>
              <br />
              <Link href="#" color="inherit" variant="body2">
              <img src='https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png'style={{width:'25px'}}></img>
              </Link>
              <br />
              <Link href="#" color="inherit" variant="body2">
              <img src='https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png' style={{width:'25px'}}>
            </img>
              </Link><br />
              <Link href="#" color="inherit" variant="body2">
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' style={{width:'20px'}}>
            </img>
              </Link>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                For Foodies
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Join our community of food enthusiasts.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                For You
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover personalized recommendations just for you.
              </Typography>
              <ul>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" color="inherit" variant="body2">
                    Conditions
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '20px' }}>
            © 2023 Hungrezy. All rights reserved.
          </Typography>
          <img
            src={logofh}
            alt="logo Logo"
            style={{ maxWidth: '15%', marginTop: '20px' }}
          />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
