import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostFormContainer from './posts/PostFormContainer'
import PostListContainer from './posts/PostListContainer'
import PostShowContainer from './posts/PostShowContainer'
import Header from './Header'
import Footer from './Footer'
import PostAllContainer from './posts/PostAllContainer'
import PostDelete from './posts/PostDelete'



const App = () => {
    return (
        <div className="main">
        <div className="ui component">  
            <BrowserRouter>
                <div>
                <Header />
                <Route path="/" exact component={PostAllContainer}/>
                <Route path="/posts" exact component={PostListContainer}/>
                <Route path="/posts/new" exact component={PostFormContainer}/>
                <Route path="/posts/delete" exact component={PostDelete}/>
                <Route path="/posts/:id" exact component={PostShowContainer}/>
                </div>
            </BrowserRouter>
        <div>
        <Footer />
        </div>
        </div>
        </div>
    )
}

export default App;