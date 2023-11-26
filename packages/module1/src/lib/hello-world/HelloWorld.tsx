import {css} from "@emotion/react";
import {useViewport} from "@stenafh/core";

const classes = {
    helloWorld: css({
        color: 'pink'
    })
}

export function HelloWorld() {
    const viewport = useViewport();

    if (viewport === 'web-desktop') {
        return (
            <h1 css={classes.helloWorld}>Hello World! - desktop</h1>
        )
    }

    return (
        <h1 css={classes.helloWorld}>Hello World! - mobile</h1>
    );
}

export default HelloWorld;
