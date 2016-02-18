var React = require('react');

var ContentStyle = {
    foregroundColor: 'white',
    color: 'white',
    marginTop: '-125'
};

var LinkStyle = {
    color: "white",
    fontWeight: '900',
    fontSize: '16px',
    textDecoration: 'none'
};


var Menu = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2" style={ContentStyle}>
                    <div className="pull-right">
                        <a href="/#/news" style={LinkStyle}> News </a>
                        <a href="/#/photos" style={LinkStyle}> Photos </a>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Menu;