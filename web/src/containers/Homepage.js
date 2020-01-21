import React from 'react';
import './Homepage.scss';
import Header from '../components/page/Header';
import ArticleCard from '../components/page/ArticleCard';

export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <body>
        <Header />
        <section className='featured-articles-section'>
            <div className='wrapper'>
                <h3>Featured Articles</h3>
                <div className='cards-container'>
                  <ArticleCard />
                </div>
            </div>
        </section>
      </body>
    )
  }
}