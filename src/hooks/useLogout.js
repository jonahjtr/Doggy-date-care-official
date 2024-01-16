const useLogout = () => {
  localStorage.clear();
  window.location.href = "/";
};

export default useLogout;
