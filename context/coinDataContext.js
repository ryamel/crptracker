import React, {useContext} from 'react';

// create context with default value
const CoinDataContext = React.createContext();

// HOC to wrap components in. All nested components can access the context. *be sure to export this
export const CoinDataProvider = CoinDataContext.Provider;

export default CoinDataContext;