import Vue from "vue";
import Vuex from "vuex";

import firebase from "firebase/app";
import "firebase/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Card 1",
        blogCoverPhoto: "stock-1",
        blogDate: "1 May, 2021",
      },
      {
        blogTitle: "Card 2",
        blogCoverPhoto: "stock-2",
        blogDate: "1 May, 2021",
      },
      {
        blogTitle: "Card 3",
        blogCoverPhoto: "stock-3",
        blogDate: "1 May, 2021",
      },
      {
        blogTitle: "Card 4",
        blogCoverPhoto: "stock-4",
        blogDate: "1 May, 2021",
      },
    ],
    editPost: false,
    user: null,
    profileId: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, doc) {
      (state.profileId = doc.id),
        (state.profileEmail = doc.data().email),
        (state.profileFirstName = doc.data().firstName),
        (state.profileLastName = doc.data().lastName),
        (state.profileUserName = doc.data().userName);
      console.log(this.state.email);
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    setProfileAdmin(state, payload) {
      state.profileAdmin = payload;
      console.log("profile is admin: ", state.profileAdmin);
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUserName(state, payload) {
      state.profileUserName = payload;
    },
  },
  actions: {
    async getCurrentUser({ commit }, user) {
      const database = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);

      const dbResult = await database.get();
      commit("setProfileInfo", dbResult);
      commit("setProfileInitials");
      const token = await user.getIdTokenResult();
      const admin = await token.claims.admin;
      commit("setProfileAdmin", admin);
    },
    async updateUserSettings({ commit, state }) {
      const database = await db.collection("users").doc(state.profileId);
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        userName: state.profileUserName,
      });
      commit("setProfileInitials");
    },
  },
  modules: {},
});
