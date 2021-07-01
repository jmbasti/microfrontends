import React, { useRef, useEffect } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // onNavigate: (location) => {
      //   console.log(location.pathname);
      // },
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        console.log(nextPathName);
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn: () => {
        onSignIn();
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};

export default AuthApp;
