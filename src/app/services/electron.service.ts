import { Injectable } from '@angular/core';
import { ipcRenderer, IpcRendererEvent } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  private ipcRenderer: typeof ipcRenderer;

  constructor() { 
    this.ipcRenderer = window.require('electron').ipcRenderer;
  }

  send(channel: string, ...args: any[]) {
    ipcRenderer.send(channel, args);
  }

  on(channel: string, listener: (event: IpcRendererEvent, ...args: any[]) => void) {
    ipcRenderer.on(channel, listener);    
  }
}