/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const AppWrapper = styled.div`

  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

export function App(props) {
  return (
    <MuiThemeProvider>
      <AppWrapper>
        <Helmet
          titleTemplate="%s"
          defaultTitle="Hi :)"
          meta={[
            { name: 'description', content: 'Someshwar Dash - Personal Website' },
          ]}
        />
        <Header />
        {React.Children.toArray(props.children)}
        <Footer />
      </AppWrapper>
    </MuiThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
