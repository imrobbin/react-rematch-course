import React, { FC } from "react";
import { Container } from "./styled";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import { User } from "../../common/types";

type UserListProps = {
  users: ReadonlyArray<User>;
  toggleFollow: (user: User) => void;
  loading: boolean;
};

const UserList: FC<UserListProps> = ({ users, toggleFollow, loading }) => {
  if (loading) {
    console.log("loading");
    return <Loader />;
  }
  return (
    <Container>
      {users.map(user => (
        <Card key={user.id} user={user} onFollowClick={toggleFollow} />
      ))}
    </Container>
  );
};

export default UserList;
