import { Component } from 'react';
import { Contact } from './Contact';
import PropTypes from 'prop-types';
import { ContactsListUl } from './Contact.styled';

export class ContactsList extends Component {
    render() {
        return (
            <ContactsListUl>
                <Contact currentContacts={this.props.currentContacts} deleteContact={this.props.deleteContact} />
            </ContactsListUl>
        );
    };
};

ContactsList.propTypes = {
    deleteContact: PropTypes.func.isRequired,
    currentContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};