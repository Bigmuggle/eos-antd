import React from 'react'
import {Route,HashRouter,Switch,Redirect} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Button from './pages/Button'
import Home from './pages/Home'
import Admin from './admin'
export default class Router extends React.Component{
    render(){
        return(        
                <HashRouter>
                    <App> 
                        <Switch>                                                
                            <Route  path="/login" component={Login} />
                            
                            <Route path="/" render={()=>
                                <Admin> 
                                    <Switch> 
                                        <Route  path="/home" component={Home} />                                                    
                                        <Route path="/admin/UI/Button" component={Button}/>
                                        <Redirect to='/home'/>
                                    </Switch>
                                </Admin>
                            }>

                            </Route>
                         
                           
                        </Switch>
                    </App>                   
                </HashRouter>   
        )
    }
}