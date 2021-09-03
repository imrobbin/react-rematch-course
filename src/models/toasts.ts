import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { Toast } from "../common/types";

type State = ReadonlyArray<Toast>;

export const toasts = createModel<RootModel>()({
  state: [] as State,
  reducers: {
    added: (state: State, toast: Toast) => [...state, toast],
    removed: (state: State, toast: Toast) =>
      state.filter(t => t.id !== toast.id)
  },
  effects: (dispatch: any) => ({
    async add(message: string) {
      const toast: Toast = { message, id: new Date().getTime() };
      dispatch.toasts.added(toast);
      await new Promise(r => setTimeout(r, 2000));
      dispatch.toasts.removed(toast);
    }
  })
});
