import { Component } from 'react';
import PropTypes from 'prop-types';
import { Label } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
                    For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.props.filter}
          onChange={this.props.filterOperator}
        />
      </Label>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterOperator: PropTypes.func.isRequired,
};
