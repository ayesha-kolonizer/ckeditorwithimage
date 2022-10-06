import { Component, OnInit } from '@angular/core';
import *as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  Adapter from '../ckadapter';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  public Editor = ClassicEditor;
  

  public isDisabled = false;
  ckconfig: any;
  
  constructor() { }

  ngOnInit(): void {
    this.ckconfig = {
      // include any other configuration you want
      extraPlugins: [ ]
    };
  }
  onReady(editor:any){
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader:any ) => {

    return new Adapter(loader, editor.config);;
};
  
  }
}
