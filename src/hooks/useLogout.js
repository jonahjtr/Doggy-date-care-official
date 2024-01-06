const useLogout = (dog_id) => {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("token");
  window.location.href = "/";
};

export default useLogout;
