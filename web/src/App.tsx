import { createFragmentRegistry } from '@apollo/client/cache';

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';
import './scaffold.css';

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <RedwoodApolloProvider
        graphQLClientConfig={{
          cacheConfig: {
            fragments: createFragmentRegistry(gql`
              fragment EventCardFragment on Event {
                id
                name
                description
                startAt
              }
            `),
          },
        }}
      >
        <Routes />
      </RedwoodApolloProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

export default App;
