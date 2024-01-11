const useLogout = () => {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("token");
  window.location.href = "/";
};

export default useLogout;
