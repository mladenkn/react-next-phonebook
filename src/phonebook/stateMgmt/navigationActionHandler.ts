import { getType } from "typesafe-actions";
import { AnyAction, goBack } from "../actions";

export default (goBackFunc: () => void) => (a: AnyAction) => {

    switch(a.type){
        case getType(goBack):
            goBackFunc();
    }
}