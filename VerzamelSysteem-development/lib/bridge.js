// eslint-disable-next-line import/no-extraneous-dependencies
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('ipc', {
  getProviders: () => ipcRenderer.invoke('getProviders'),
  createWebsite: (website) => ipcRenderer.invoke('createWebsite', website),
  deleteWebsite: (id) => ipcRenderer.invoke('deleteWebsite', id),
  getAllWebsites: () => ipcRenderer.invoke('getAllWebsites'),
  initBrowser: () => ipcRenderer.invoke('initBrowser'),
  fetchInvoices: (dateRange) => ipcRenderer.invoke('fetchInvoices', dateRange),
  getAllInvoices: () => ipcRenderer.invoke('getAllInvoices'),
  deleteAllInvoices: () => ipcRenderer.invoke('deleteAllInvoices'),
  downloadInvoice: (ctx) => ipcRenderer.invoke('downloadInvoice', ctx),
  getInvoicePathForMail: (id) => ipcRenderer.invoke('getInvoicePathForMail', id),
  deleteSelectedInvoices: (ids) => ipcRenderer.invoke('deleteSelectedInvoices', ids),
  getSettings: () => ipcRenderer.invoke('getSettings'),
  saveSettings: (settings) => ipcRenderer.invoke('saveSettings', settings),
  resolve2FA: (payload) => ipcRenderer.invoke('resolve2FA', payload),
  on2FA: (cb) => ipcRenderer.on('on2FA', cb),
  onFetchWsChange: (cb) => ipcRenderer.on('onFetchWsChange', cb),
  onNotification: (cb) => ipcRenderer.on('onNotification', cb),
  getOAuthCredentials: (key) => ipcRenderer.invoke('getOAuthCredentials', key),
  checkForUpdates: () => ipcRenderer.invoke('checkForUpdates'),
  downloadUpdate: () => ipcRenderer.invoke('downloadUpdate'),
  onUpdateCheck: (cb) => ipcRenderer.on('onUpdateCheck', cb),
  onUpdateAvailable: (cb) => ipcRenderer.on('onUpdateAvailable', cb),
  onUpdateNotAvailable: (cb) => ipcRenderer.on('onUpdateNotAvailable', cb),
  onUpdateError: (cb) => ipcRenderer.on('onUpdateError', cb),
  onUpdateDownloadProgress: (cb) => ipcRenderer.on('onUpdateDownloadProgress', cb),
  onUpdateDownloaded: (cb) => ipcRenderer.on('onUpdateDownloaded', cb),
  getLicenseStatus: () => ipcRenderer.invoke('getLicenseStatus'),
  getCurrentVersion: () => ipcRenderer.invoke('getCurrentVersion'),
  ensureDocumentsDir: () => ipcRenderer.invoke('ensureDocumentsDir'),
  sendMail: (settings) => ipcRenderer.invoke('sendMail', settings),
});