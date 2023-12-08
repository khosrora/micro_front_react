import React from 'react'
import ReactDom from 'react-dom'
import App from './App'


export function mount(el) {
    ReactDom.render(
        <App />,
        el
    )
}

if (process.env.NODE_ENV == 'development') {
    const dev_root = document.getElementById('_marketing_dev_root')
    if (dev_root) {
        mount(dev_root)
    }
}