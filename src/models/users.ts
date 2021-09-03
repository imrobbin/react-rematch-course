import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { User } from "../common/types";
import { loadUsers } from "../common/api";

type State = ReadonlyArray<User>;

export const users = createModel<RootModel>()({
  state: [] as State,
  reducers: {
    loaded: (state: State, payload: ReadonlyArray<User>) => payload,
    followToggled: (state: State, payload: User) =>
      state.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            isFollowing: !user.isFollowing
          };
        }
        return user;
      })
  },
  effects: (dispatch: any) => ({
    async load() {
      await delay(10000);
      const users = await loadUsers();
      dispatch.users.loaded(users);
    },
    toggleFollow(user: User) {
      dispatch.users.followToggled(user);
      dispatch.toasts.add(
        `You ${user.isFollowing ? "unfollowed" : "followed"} ${
          user.name.first
        } ${user.name.last}`
      );
    }
  })
});

const delay = (time: number) =>
  new Promise<void>(resolve => setTimeout(() => resolve(), time));
