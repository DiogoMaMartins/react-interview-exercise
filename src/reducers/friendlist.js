import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      gender:'male'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      gender:'male'
    },
    {
      name: 'George Washington',
      starred: false,
      gender:'male'
    }
  ]
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name,
            gender:action.gender
          }
        ],
      };
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };
    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };
    case types.Gender_Friend:
      let prevFriends = [...state.friendsById];
      let changeFriend = prevFriends.find((item, index) => index === action.id);
      changeFriend.gender = action.gender;
      return {
           ...state,
        friendsById: prevFriends
      };
    default:
      return state;
  }
}
