import React from 'react';
class HomePageComponent extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>
            MyReads<span>.</span>
          </h1>
        </div>
        <div className='list-books-content'>
          <div>
            {categories
              .filter((category) => category.showHomePage === true)
              .map((category) => {
                return <div>Shelf</div>;
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePageComponent;
