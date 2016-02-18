var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var MasterPage = require('./components/MasterPage.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var Routes = (
    <Router history={ReactRouter.hashHistory}>
        <Route path="/public/index.html" component={MasterPage}>
            <Route path="/news" component={News}/>
            <Route path="/photos" component={Photos}/>
        </Route>
        <Route path="/" component={MasterPage}/>
    </Router>
);

module.exports = Routes;