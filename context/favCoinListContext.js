// HOC to wrap components in. All nested components can access the context. *be sure to export this
// export const FavCoinListProvider = FavCoinListContext.Provider;

import React, {useContext} from 'react';

const FavListContext = React.createContext();
export const FavListProvider = FavListContext.Provider;

export default FavListContext;