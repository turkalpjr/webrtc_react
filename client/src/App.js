import React from 'react'
import {useState} from 'react';
import { Typography, AppBar } from '@material-ui/core';

import VideoPlayer  from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';


export default function App() {
    const [count, setCount] = useState(0);
    return (
        <div>
          <h1>Hello world</h1>
          <AppBar>
          </AppBar>
        </div>
      );
}

// const App = () => {
//     debugger;
//     return (
//         <div>
//             <AppBar  >

//             </AppBar>
//             {/* <AppBar position='static' color='inherit'>
//                 <Typography variant="h2" align="center"> Video Chat
//                 </Typography>
//             </AppBar> */}
//             {/* <VideoPlayer/>
//             <Options>
//                 <Notifications/>
//             </Options> */}
//         </div>
//     )
// }

// export default App