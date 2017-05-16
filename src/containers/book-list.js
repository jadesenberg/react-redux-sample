import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    handleToggle = () => this.setState({open: !this.state.open});

    renderList() {
        
        return this.props.books.map((book) => {
            return (
                <MenuItem 
                    onClick = { () => this.props.selectBook(book) }
                    key = { book.id } 
                    className = "list-group-item"> 
                    { book.title } 
                </MenuItem>
            )
        })
    }

    render() {
        return (
            <AppBar
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
                title="My App">
                <Drawer 
                    
                    open={this.state.open}>
                    { this.renderList() }
                </Drawer>
            </AppBar>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);