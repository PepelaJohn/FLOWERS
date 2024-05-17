export default (loading = true, action) => {
  switch (action) {
    case "LOAD":
      return true;
    case "STOP":
      return false;
  
    default:
      return loading;
  }
};


