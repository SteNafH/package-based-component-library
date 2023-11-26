import {Decorator} from '@storybook/react';
import {ViewportProvider} from '@stenafh/core';

export const Module1Decorator: Decorator = (Story, context) => {
    const {language} = context.args as { language: string };

    return (
        <ViewportProvider>
            <main>
                <Story/>
            </main>
        </ViewportProvider>
    );
};
