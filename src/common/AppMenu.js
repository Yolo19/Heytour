import React, { useState} from 'react'
import { Button, Menu } from 'semantic-ui-react'
import Login from "../authentication/Login";
// import {Login} from "../authentication/Login"

const initState = {
    username: '',
    pwd: '',
    isLoggedIn: false,
    loginOpen: false
}

function loginReducer(state, action) {
    switch (action.type) {
        case 'loggedIn' :
            return {
                ...state,
                name: action.payload,
                isLoggedIn: true,
                loginOpen: false,
            }
        case 'notLoggedIn':
            return {
                ...state,
                isLoggedIn: false,
                loginOpen: true
            }
        default: 
            return state;
    }
}

export default function AppMenu (){
    const [reducer, dispatch] = React.useReducer(loginReducer, initState);
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Menu size='large'>
                <Menu.Item
                name='Heytour'
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                    {reducer.isLoggedIn?(<div>{reducer.name}</div>):
                    (<Button primary
                        onClick={()=> dispatch({type: 'notLoggedIn'})}
                    >
                        Login
                    </Button>)}
                </Menu.Item>
                </Menu.Menu>
            </Menu>
            {reducer.loginOpen &&
            <Login
                open={()=> setOpen(true)}
                onLogin={()=> dispatch({type: 'loggedIn'})}
                onClose={()=> setOpen(false)}
            />
            }
        </div>  
    )

}
// export default function AppMenu() {
//     const[loginOpen, setLoginOpen] = useState(false);
//     const [userName, setUserName] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
    
//     function handleOpenLogin(){
//         setLoginOpen(true);
//     }

//     function handleLoginClose(){
//         setLoginOpen(false);
//     }

//     function handleLogin(username){
//         if(username) {
//             setUserName(username);
//             setIsLoggedIn(true);
//         }
//         setLoginOpen(false);
//     } 
//     return (
//         <div>
//             <Menu size='large'>
//                 <Menu.Item
//                 name='Heytour'
//                 />
//                 <Menu.Menu position='right'>
//                 <Menu.Item>
//                     {isLoggedIn ?(<div>{username}</div>):
//                     (<Button primary
//                         onClick={handleOpenLogin}
//                     >
//                         Login
//                     </Button>)}
//                 </Menu.Item>
//                 </Menu.Menu>
//             </Menu>
//             {loginOpen &&
//             <Login
//                 open={loginOpen}
//                 onClose={handleLoginClose}
//                 onLogin={handleLogin}
//             />
//             }
//         </div>  
//     )
// }

