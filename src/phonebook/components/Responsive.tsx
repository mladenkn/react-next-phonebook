import React from 'react'
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import MediaQuery from "react-responsive";

interface Props {
    min?: Breakpoint
    max?: Breakpoint
    only?: Breakpoint
    children?: React.ReactNode
}

export default ({min, max, only, children}: Props) => {

    let minWidth: number | undefined
    let maxWidth: number | undefined

    switch(only) {
        case undefined:
            break;
        case 'xs':
            return <MediaQuery minWidth={0} maxWidth={599}>{children}</MediaQuery>
        case 'sm':
            return <MediaQuery minWidth={600} maxWidth={959}>{children}</MediaQuery>
        case 'md':
            return <MediaQuery minWidth={960} maxWidth={1279}>{children}</MediaQuery>
        case 'lg':
            return <MediaQuery minWidth={1280} maxWidth={1919}>{children}</MediaQuery>
        case 'xl':
            return <MediaQuery minWidth={1920} >{children}</MediaQuery>
    }

    switch(min){
        case 'xs':
            minWidth = 0
        case 'sm':
            minWidth = 600
        case 'md':
            minWidth = 960
        case 'lg':
            minWidth = 1280
        case 'xl':
            minWidth = 1920
    }

    switch(max){
        case 'xs':
            maxWidth = 599
        case 'sm':
            maxWidth = 959
        case 'md':
            maxWidth = 1279
        case 'lg':
            maxWidth = 1919
        case 'xl':
            maxWidth = undefined
    }

    return <MediaQuery minWidth={minWidth} maxWidth={maxWidth}>{children}</MediaQuery>
}