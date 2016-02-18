var React = require('react');


var NewsItem = React.createClass({
    getImage: function () {
        if (this.props.newsItem.picUrl) {
            return <img style={{height:100}} src={this.props.newsItem.picUrl} className="img-thumbnail"/>;
        }
    },
    render: function () {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h2><i>{this.props.newsItem.title}</i></h2>

                        <h3>{this.props.newsItem.description}</h3>

                        <div>
                            {this.props.newsItem.text}
                        </div>
                        {this.getImage()}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = NewsItem;