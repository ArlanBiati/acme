import { useContext } from 'react';

import { UserNameContext } from '@contexts/UserNameProvider';

function userName() {
  return useContext(UserNameContext);
}

export { userName };
