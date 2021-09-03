import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import loadingPlugin, { ExtraModelsFromLoading } from "@rematch/loading";
import { models, RootModel } from "../models";

type FullModel = ExtraModelsFromLoading<RootModel>;

const store = init<RootModel, FullModel>({
  models,
  plugins: [loadingPlugin()]
});

export default store;
export type RootState = RematchRootState<RootModel, FullModel>;
export type RootDispatch = RematchDispatch<RootModel>;
