import React from 'react';
import { FormattedMessage } from 'react-intl';

import {grey,red,yellow,blue,green} from '../../colors.js';
import LocaleToggle from 'containers/LocaleToggle';
import Wrapper from './Wrapper';
import messages from './messages';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';


function Footer() {
  const styles = {
    linkedInButton: {
      color:'red'
    },
  };

  return (
    <Wrapper>

      {/*<section>
        <LocaleToggle />
      </section>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <A href="https://twitter.com/mxstbr">Max Stoiber</A>,
          }}
        />
      </section>*/}
      <AppBar
        title = {<FormattedMessage {...messages.footerTitle} />}
        showMenuIconButton={false}
        style={{
          textAlign: 'center',
          backgroundColor: blue
        }}
      />
    </Wrapper>
  );
}

export default Footer;
