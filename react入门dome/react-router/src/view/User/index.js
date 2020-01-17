import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {
    render() { 
        const { nickname } = this.props;
        return (
            <div>{nickname}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nickname: state.getIn(['user', 'nickname'])
    }
}
 
export default connect(mapStateToProps)(User);