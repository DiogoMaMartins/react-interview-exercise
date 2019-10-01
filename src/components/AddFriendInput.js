import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {
      state = {
        gender:'male'
      }
  render () {
    return (
      <div  className={classnames('form-control', styles.containerInput)}>
        <input
          type="text"
          autoFocus="true"
          className={classnames('form-control', styles.addFriendInput)}
          placeholder="Type the name of a friend to be added"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleSubmit.bind(this)} />
      
        <select 
          value={this.state.gender} 
          className={`btn btn-default ${styles.btnAction} ${styles.selectGender}`}>
              onChange={(e) => this.setState({gender:e.target.value})} >
            <option value="female" >Female</option>
            <option value="male" >Male</option>
          </select> 
    </div>
    );
  }

  constructor (props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
    };
  }

  handleChange (e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit (e) {
    const name = e.target.value.trim();
    console.log(this.state.gender)
    if (e.which === 13) {
      this.props.addFriend(name,this.state.gender);
      this.setState({ name: '',gender:'male' });
    }
  }

}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput
