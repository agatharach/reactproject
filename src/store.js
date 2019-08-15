import createStore from "unistore";

export const store = createStore({
  is_login: false,
  user_name: "",
  email: "",
  url_foto: ""
});

export const actions = store => ({
  login(state) {
    return { is_login: true };
  },

  logout(state) {
    return { is_login: false };
  },
  setUser(state, nama) {
    return { user_name: nama };
  },
  setEmail(state, email) {
    return { email: email };
  },
  setFoto(state, url) {
    return { url_foto: url };
  }
});
