import React, { useState  } from 'react'
import { Button, Menu } from 'semantic-ui-react'
import Login from "../authentication/Login";

export default function AppMenu() {
    const[loginOpen, setLoginOpen] = useState(false);
    const [userName, setUserName] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function handleOpenLogin(){
        setLoginOpen(true);
    }

    function handleLoginClose(){
        setLoginOpen(false);
    }

    function handleLogin(userName){
        if(userName) {
            setUserName(userName);
            setIsLoggedIn(true);
        }
        setLoginOpen(false);
    } 
    return (
        <div>
            <Menu size='large'>
                <Menu.Item
                name='Heytour'
                />
                <Menu.Menu position='right'>
                <Menu.Item>
                    {isLoggedIn ?(<div>{userName}</div>):
                    (<Button primary
                        onClick={handleOpenLogin}
                    >
                        Login
                    </Button>)}
                </Menu.Item>
                </Menu.Menu>
            </Menu>
            {loginOpen &&
            <Login
                open={loginOpen}
                onClose={handleLoginClose}
                onLogin={handleLogin}
            />
            }
        </div>
        

        
    )
}

