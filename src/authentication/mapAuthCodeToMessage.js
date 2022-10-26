const mapAuthCodeToMessage = (authCode) => {
  const message = authCode.match(/\((.*?)\)/)[1];
  switch (message) {
    case "auth/wrong-password":
      return "Wrong password";
    case "auth/user-not-found":
      return "This email has not been registered";
    case "auth/too-many-requests":
      return "Too many failed login attemps";
    case "auth/email-already-in-use":
      return "Email already in use"
    default:
      return "error";
  }
};

export default mapAuthCodeToMessage;