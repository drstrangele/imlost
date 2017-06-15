import React, { Component } from 'react';

class GiphyItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comment: '',
      }
    }

    addComment() {
      if (this.state.comment === 'poopy') {
        this.setState({ comment: '' });
      } else {
        this.setState({ comment: 'poopy' });
      }
    }

    render() {
        return (
          <li>
            <img onClick={this.addComment.bind(this)} src={this.props.image} alt="" />
            {
              this.state.comment.length > 0 ? <h1>{this.state.comment}</h1> : <h2>text is like... nothing</h2>
            }
          </li>
        );
    }
}

export default GiphyItem;
