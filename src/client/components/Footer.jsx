import React from 'react';
import { Logo } from './logo/Logo';
console.log("logo", Logo)
export class Footer extends React.Component {
    render() {
        return (
            <div>
                <Logo/>
            </div>
        )
    }
}