import { Models } from "@rematch/core";
import { users } from "./users";
import { toasts } from "./toasts";

export interface RootModel extends Models<RootModel> {
  users: typeof users;
  toasts: typeof toasts;
}

export const models: RootModel = { users, toasts };
