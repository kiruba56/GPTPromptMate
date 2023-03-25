import React from "react";
import Fallback from "../../common/fallback";
import RequireAuth from "../require_auth";

function AuthWithSuspenseWrapper(Component:React.ComponentType<any>|null):any {
    const COMP = () => (
    //   <RequireAuth>
          <React.Suspense fallback={<Fallback/>}>
              {!Component?null:<Component />}
          </React.Suspense>
    //   </RequireAuth>
    );
    return <COMP />;
};



export default AuthWithSuspenseWrapper;