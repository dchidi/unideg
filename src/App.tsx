import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Modal from "./components/layouts/modal/Modal";
import { useAppState } from "./store/AppContext";
import { Login, RetrievePassword } from "./components/login/Login";
import { Registration } from "./components/registration/Registration";
import PrivacyPolicy from "./components/privacy_policy/PrivacyPolicy";
import TermsConditions from "./components/terms_conditions/TermsConditions";
import ContactForm from "./components/contact_form/ContactForm";
import Cookies from "./components/cookies/Cookies";
import YoutubeVideoPlayer from "./components/ui/YoutubeVideoPlayer";

const App: React.FC = () => {
  const { dispatch, state } = useAppState();
  return (
    <>
      <AppRoutes />
      <Modal
        isOpen={state.login}
        onClose={() => dispatch({ type: "login", payload: false })}
        className="smModal"
      >
        <Login
          retrievePwdFn={() =>
            dispatch({ type: "forgotPassword", payload: true })
          }
          registerFn={() => dispatch({ type: "register", payload: true })}
        />
      </Modal>
      <Modal
        isOpen={state.forgotPassword}
        onClose={() => dispatch({ type: "forgotPassword", payload: false })}
        className="smModal"
      >
        <RetrievePassword
          loginFn={() => dispatch({ type: "login", payload: true })}
          registerFn={() => dispatch({ type: "register", payload: true })}
        />
      </Modal>
      <Modal
        isOpen={state.register}
        onClose={() => dispatch({ type: "register", payload: false })}
        className="smModal"
      >
        <Registration
          loginFn={() => dispatch({ type: "login", payload: true })}
          retrievePwdFn={() =>
            dispatch({ type: "forgotPassword", payload: true })
          }
        />
      </Modal>
      <Modal
        isOpen={state.privacy_policy}
        onClose={() => dispatch({ type: "privacy_policy", payload: false })}
        className="privacy_policy"
      >
        <PrivacyPolicy />
      </Modal>
      <Modal
        isOpen={state.terms_conditions}
        onClose={() => dispatch({ type: "terms_conditions", payload: false })}
        className="terms_conditions"
      >
        <TermsConditions />
      </Modal>
      <Modal
        isOpen={state.cookies}
        onClose={() => dispatch({ type: "cookies", payload: false })}
        hasCloseBtn={false}
        allowKeyCloseEvent={false}
      >
        {/* This implementation will need updating so it can handle instances where settings have a modal. */}
        <Cookies
          callbackFn={() => dispatch({ type: "cookies", payload: false })}
        />
      </Modal>
      <Modal
        isOpen={state.contact_us}
        onClose={() => dispatch({ type: "contact_us", payload: false })}
        className="smModal"
      >
        <ContactForm />
      </Modal>
      <Modal
        isOpen={state.demoVideo}
        onClose={() => dispatch({ type: "demoVideo", payload: false })}
        className="videoModal"
      >
        <YoutubeVideoPlayer videoId="cqTu-lmBVko" />
      </Modal>
    </>
  );
};

export default App;
