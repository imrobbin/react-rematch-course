/* eslint-disable no-use-before-define */
import React, { useEffect, FC } from "react";
import { connect } from "react-redux";
import UserList from "../../components/UserList";
import { RootState, RootDispatch } from "../../store";

type UsersProps = ReturnType<typeof mapProps> & ReturnType<typeof mapDispatch>;

const Users: FC<UsersProps> = ({ loading, users, load, toggleFollow }) => {
  useEffect(() => {
    load();
  }, []);

  return (
    <UserList loading={loading} users={users} toggleFollow={toggleFollow} />
  );
};

const mapProps = (state: RootState) => ({
  users: state.users,
  // loading: state.loading.models.users
  loading: state.loading.effects.users.load
});

const mapDispatch = (dispatch: RootDispatch) => ({
  load: dispatch.users.load,
  toggleFollow: dispatch.users.toggleFollow
});

export default connect(mapProps, mapDispatch)(Users);

// https://codesandbox.io/examples/package/@rematch/loading
