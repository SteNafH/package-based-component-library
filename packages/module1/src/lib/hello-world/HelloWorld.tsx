import {css} from "@emotion/react";
import {useAppTranslation} from "../../app/hooks";
import {useViewport} from "@stenafh/core";

const classes = {
    helloWorld: css({
        color: 'pink'
    })
}

export function HelloWorld() {
    const {t} = useAppTranslation();
    const viewport = useViewport();

    if (viewport === 'web-desktop') {
        return (
            <h1 css={classes.helloWorld}>{t('hello.world')} desktop</h1>
        )
    }

    return (
        <h1 css={classes.helloWorld}>{t('hello.world')} mobile</h1>
    );
}

export default HelloWorld;
