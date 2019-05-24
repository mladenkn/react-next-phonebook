import React from "react";
import { AnyAction } from "../actions";

export type Dispatch = (a: AnyAction) => void;

export const DispatchContext = React.createContext<Dispatch>(() => {});

export interface WithDispatch {
    dispatch: Dispatch
}

export const withDispatch = (Component: React.FC<WithDispatch>) => (props: {}) => 
    <DispatchContext.Consumer>
        {dispatch => <Component dispatch={dispatch} {...props} />}
    </DispatchContext.Consumer> 