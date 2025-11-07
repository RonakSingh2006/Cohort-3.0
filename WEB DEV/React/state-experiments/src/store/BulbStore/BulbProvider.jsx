import { useState} from "react";

import BulbContext from "./BulbContext";

function BulbProvider({ children }) {
  const [on, toggle] = useState(false);

  return (
    <BulbContext.Provider value={{ on, toggle }}>
      {children}
    </BulbContext.Provider>
  );
}

export default BulbProvider;
