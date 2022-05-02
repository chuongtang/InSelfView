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

  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()",email, password, name);
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

  createDocument: (collectionId, data, read, write) => {
    return api
      .provider()
      .database.createDocument(collectionId, data, read, write);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(collectionId);
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return api
      .provider()
      .database.updateDocument(collectionId, documentId, data, read, write);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },

  createFile: async (file) => {
    // return api.provider().storage.createFile('[626f430157c288bb80eb]', 'unique()', file, ["*"], ["*"]);
    const resultUpl = await api.provider().storage.createFile(file, ["*"], ["*"]);
    console.log(resultUpl)
    return resultUpl
    // return api.provider().storage.createFile(file, ["*"], ["*"]);
  },

  getFileView: (id) => {
    return api.provider().storage.getFileView(id);
  }


};

export default api;