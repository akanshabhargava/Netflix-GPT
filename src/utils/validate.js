export const checkValidateData = (
  email,
  password,
  isSignInForm = true,
  name
) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid) return "Email Is Not Valid";
  if (!isPasswordValid) {
    return "Password Is Not Valid";
  }
  if (!isSignInForm) {
    if ((name ?? "") === "") return "Name Is Required";
  }
  return null;
};
