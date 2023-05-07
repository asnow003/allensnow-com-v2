import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

class About extends Component {
  render() {    
    return (
      <div>
        <p>
            <FormattedMessage
                id="app.about"
                defaultMessage="Err:Download"
            />
        </p>
      </div>
    );
  }
}

export default About;