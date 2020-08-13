import { Injectable } from '@angular/core';
// When a module is imported but never use any of the imported values
// other than as TypeScript types, the resulting JS file
// will look as if you never imported the module at all.
// How did Robert even found this?
import { ipcRenderer, remote, webFrame, IpcRendererEvent, app, shell } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  private ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  child_process: any;
  fs: any;
  tmp: any;
  path: any;
  systemPreferences: any;
  app: typeof app;
  shell: typeof shell;

  constructor() { 
    this.ipcRenderer = window.require('electron').ipcRenderer;
    this.webFrame = window.require('electron').webFrame;
    this.remote = window.require('electron').remote;
    this.child_process = window.require('child_process');
    this.fs = this.remote.require('fs');
    this.tmp = this.remote.require('tmp');
    this.path = this.remote.require('path');
    this.systemPreferences = this.remote.require('electron').systemPreferences;
    this.app = this.remote.require('electron').app;
    this.shell = this.remote.require('electron').shell;
  }

  send(channel: string, ...args: any[]) {
    this.ipcRenderer.send(channel, args);
  }

  on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) {
    this.ipcRenderer.on(channel, listener);    
  }
}