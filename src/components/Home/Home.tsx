import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class Home extends Component {
  render() {    
    return (
      <div>
        <p>
            <FormattedMessage
                id="app.home"
                defaultMessage="Err:Download"
            />
        </p>
      </div>
    );
  }
}

export default Home;