import { Appwrite } from "appwrite";
import { Server } from "./server";

let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) {
      return api.sdk;
    }
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    api.sdk = appwrite;
    return appwrite;
  },

  // User APIs 👨🏿‍🤝‍👨🏿
  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()", email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createSession(email, password);
  },
  getSession: () => {
    return api.provider().account.getSessions();
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession('current');
  },
  // Database APIs 🔔
  createDocument: (data, read, write) => {
    return api
      .provider()
      .database.createDocument(Server.collectionID, "unique()", data, read, write);
  },

  listDocuments: async () => {
    console.log("Listing documents FIRED")
    const returnList = await api.provider().database.listDocuments(Server.collectionID, [], 100, 0);
    console.log("Listing documents", returnList)
    return returnList
  },

  updateComment: async (documentId, data) => {
    return await api
      .provider()
      .database.updateDocument(Server.collectionID, documentId, data);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },

  // Storage APIs 📀
  createFile: async (file) => {
    const uplResult = await api.provider().storage.createFile(Server.bucketID, "unique()", file);
    console.log("&&return from appwrite%%%%", uplResult.$id);
    return uplResult
  },

  getVideosList: async () => {
    console.log("appwrite getVideoList fired")
    const videosList = await api.provider().storage.listFiles(Server.bucketID);
    console.log("Return from appwrite videos list", videosList)
    return videosList
  },

  getVideoView: async (id) => {
    const viewLink = await api.provider().storage.getFileView(Server.bucketID, id);
    console.log("Return from viewLink &&&&&", viewLink)
    return viewLink
  }


};

export default api;