var React = require('react');

var NewsItem = require('./NewsItem.jsx');
var data = require('../data');


var News = React.createClass({
    render: function () {
        return (
            <div>
                {data.news.map(function (item) {
                    return <NewsItem key={item.id} newsItem={item}/>
                })}
            </div>
        );
    }
});

module.exports = News;