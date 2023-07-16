import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';



export const Email = ({ url }) => {
    return (
        <Html lang="en">
            <Button href={url}>Click me</Button>
        </Html>
    );
};