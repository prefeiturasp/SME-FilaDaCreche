import React from 'react';
import { withRouter } from 'react-router-dom';
import GLOBALS from '../configs/MainConfigs';

class GoogleAnalytics extends React.Component {
    componentWillUpdate ({ location, history }) {
        const gtag = window.gtag;

        if (location.pathname === this.props.location.pathname) {
            // don't log identical link clicks (nav links likely)
            return;
        }

        if (history.action === 'PUSH' &&
            typeof(gtag) === 'function') {
            gtag('config', GLOBALS.ga_tracking_id, {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_path': location.pathname
            });
        }
    }

    render () {
        return null;
    }
}

export default withRouter(GoogleAnalytics);
