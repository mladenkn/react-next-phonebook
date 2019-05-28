import React from "react";
import { AnyAction } from "../actions";
import { Subtract } from "utility-types";

export type Dispatch = (a: AnyAction) => void;

export const DispatchContext = React.createContext<Dispatch>(() => {});

export interface WithDispatch {
    dispatch: Dispatch
}

export function withDispatch<TProps extends WithDispatch>(Component: React.ComponentType<TProps>){
    return function (props: Subtract<TProps, WithDispatch>) {
        return (
            <DispatchContext.Consumer>
                {dispatch => <Component dispatch={dispatch} {...props as TProps} />}
            </DispatchContext.Consumer>
        );
    }
}