import React from 'react';
import css from './Button.css'

// export class Button extends React.Component {
//     render() {
//         return (
//             <button className={css.button} style={this.props.style}>{this.props.title}</button>
//         )
//     }
// }

const Button = ({ style, title }) =>  <buton className={css.button} style={style}>{title}</buton>

export { Button }