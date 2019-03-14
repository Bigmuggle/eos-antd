import React from 'react'
import {Route,HashRouter,Switch} from 'react-router-dom'
import App from './App'
import Login from './components/Login'
import Button from './pages/Button'
import Admin from './admin'
export default class Router extends React.Component{
    render(){
        return(        
                <HashRouter>
                    <App> 
                        <Switch>                         
                            <Route  path="/login" component={Login} />
                            <Route  path="/admin" render={()=>
                                <Admin>
                                    <Route path="/admin/UI/option1" component={Button}/>
                                </Admin>
                            } />
                        </Switch>
                    </App>                   
                </HashRouter>   
        )
    }
}