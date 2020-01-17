import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setNickname } from './store/action';

class TopHeader extends Component {
    render() { 
        const { nickname } = this.props;
        return (  
            <div>
                <span>header</span>
                <button onClick={this.setNickname}>{nickname}</button>
            </div>
        );
    }
    setNickname = () => {
        this.props.dispatch(setNickname('madongmei'))
    }
}

const mapStateToProps = (state) => ({
    nickname: state.getIn(['user', 'nickname'])
})
 
export default connect(mapStateToProps)(TopHeader);