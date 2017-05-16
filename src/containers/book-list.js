import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import classnames from 'classnames';

class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }


    handleToggle = () => this.setState({open: !this.state.open});

    renderList() {
        
        return this.props.books.map((book) => {
            return (
                <ListItem 
                    leftAvatar={<Avatar src={`/public/images/${book.image}`} />}
                    onClick = { () => this.props.selectBook(book) }
                    key = { book.id } 
                    primaryText={ book.title } 
                /> 
            )
        })
    }

    render() {
        return (
            <AppBar
                className={classnames('app-bar', {'expanded': this.state.open})}
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)} 
                title="Test App">
                <Drawer open={this.state.open}>
                    <List>
                        <Subheader>Manga List</Subheader>
                        { this.renderList() }
                    </List>
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