import React, { Component } from 'react';

/**
 * Sets css variables on the body to use in css for viewport height and width.
 * Sets --app-height and --app-width
 */
class ReactCssSizes extends Component {
    componentDidMount() {
        if (!window | !document) {
            return false;
        }

        this.init();
    }

    componentWillUnmount() {
        this.destroy();
    }

    init() {
        window.addEventListener('resize', this.setSizes);
        this.setSizes();
    }

    destroy() {
        window.removeEventListener('resize', this.setSizes);
    }

    setSizes() {
        this.timeout = null;
        this.timeout = setTimeout(function() {
            document.body.style.setProperty('--app-height', window.innerHeight + 'px');
            document.body.style.setProperty('--app-width', window.innerWidth + 'px');
        }, 200);
    }

    render() {
        return null;
    }
}

export default ReactCssSizes;
