import React from 'react';
import './ArticleCard.scss';
import

export default class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className='article-card'>
        <div className='article-card-content'>
          <span className='category'>Category</span>
          <h4>Article Title</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus feugiat mi, a tincidunt lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus feugiat mi, a tincidunt lectus. </p>
        </div>
      </div>
    )
  }
}