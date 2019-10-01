import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
  state = {
    gender:'male'
  }

  componentWillMount = () => {
    this.setState({
      gender:this.props.gender
    })
  }

   handleChange = async (e) => {

    await this.setState({gender:e.target.value});
    await this.props.selectGender(this.props.id,this.state.gender)

  }

  render() {
    return (

      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{this.props.name}</span></div>
          <div>
            <small>xx friends in common</small>
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.starFriend(this.props.id)}>
            <i className={classnames('fa', {
              'fa-star': this.props.starred,
              'fa-star-o': !this.props.starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => this.props.deleteFriend(this.props.id)}>
            <i className="fa fa-trash" />
          </button>
           <select 
           className={`btn btn-default ${styles.btnAction} ${styles.selectGender}`}
               value={this.state.gender} 
              onChange={this.handleChange} >
            <option value="female">F</option>
            <option value="male">M</option>
          </select> 
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired
};

export default FriendListItem
