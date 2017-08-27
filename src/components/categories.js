import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllCategory} from '../actions';

class Categories extends Component {
  componentWillMount() {
    this.props.fetchAllCategory()
  }

  renderCategory() {
    return this.props.categories.map((category) => {
      return (
        <div className="read-detail" key={category.name}>
          <h3>
            <Link to={`/${category.name}/posts`}>{category.name}</Link>
          </h3>
        </div>

      );
    });
  }

  render() {
    return (
      <div>
        {this.renderCategory()}
      </div>
    )
  }
}

function mapStateToProps({categories}) {

  return {categories}
};

export default connect(mapStateToProps, {fetchAllCategory})(Categories);
