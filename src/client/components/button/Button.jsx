import React from 'react';
import css from './Button.css'

const Button = (props) =>  <button className={css.button} {...props}/>

export { Button }