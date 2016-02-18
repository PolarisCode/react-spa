var React = require('react');

var data = require('../data');

var Photos = React.createClass({
    render: function () {
        var i = 0;
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {
                        data.images.map(function (photo) {
                            i++;
                            return <img key={i} style={{height:100}}
                                        src={photo} className="img-thumbnail"/>
                        })
                    }
                </div>
            </div>
        );
    }
});

module.exports = Photos;