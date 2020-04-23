import React from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  };

  handleChange = (event) =>
    this.props.onChangeShelf(this.props.book, event.target.value);

  render() {
    const { book, categories } = this.props;
    return (
      <div className='book-shelf-changer'>
        <select defaultValue={book.shelf} onChange={this.handleChange}>
          <option value='move' disabled>
            Move to...
          </option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
