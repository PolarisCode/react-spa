var React = require('react');

var Menu = require('./Menu.jsx');

var MasterStyle = {
    height: '200',
    background: '#0066CC'
};

var HeaderStyle = {
    color: 'white'
};

var MasterPage = React.createClass({
    render: function () {
        return (
            <div>
                <div className="row">
                    <div style={MasterStyle} className="col-md-12">
                        <div style={HeaderStyle} className="col-md-4 col-md-offset-2">
                            <h2>Country News</h2>
                            <h3>top stories in my country</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Menu/>
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2" style={{marginTop: -90}} >
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = MasterPage;