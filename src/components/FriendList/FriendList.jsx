import {FriendListStyled, FriendListItemStyled, FriendListStatusStyled, FriendListNameStyled} from './FriendList.styled';
import PropTypes from "prop-types";

export const FriendList = ({friends}) => {
    return (
        <FriendListStyled>
            {friends.map( friend => (
  <FriendListItemStyled key={friend.id}>
  <FriendListStatusStyled status={friend.isOnline}></FriendListStatusStyled>
  <img src={friend.avatar} alt="User avatar" width="48" />
  <FriendListNameStyled>{friend.name}</FriendListNameStyled>
  </FriendListItemStyled>))}
        </FriendListStyled>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            avatar: PropTypes.string.isRequired
        })
    ).isRequired
}
