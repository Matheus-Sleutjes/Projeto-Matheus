import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExtensaoModel } from 'src/app/models/upload/extensao.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  public token: string;
  public form: FormGroup;
  public files: any[] = [];
  public extensoes: ExtensaoModel[] = [];

  constructor(
    // private toastrs: ToastrService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    // private uploadService: UploadService,
  ) { }

  ngOnInit(): void {
  //   this.token = localStorage.getItem('cge-auth_token');
  //   this.uploadService.getExtensoes().subscribe((extensoes=>{
  //   this.extensoes = extensoes;
  // }));

  // this.form = this.formBuilder.group({
  //   descricao: new FormControl(null, [Validators.required,Validators.maxLength(200)]),
  //   identificacaoProcesso: new FormControl(null, []),
  //   sigilo: new FormControl(null, []),
  //   isSigilo: new FormControl(null, [Validators.required,]),
  //   tusFileId: new FormControl(null, []),
  //   nome: new FormControl(null, []),
  //   pasta: new FormControl(null, []),
  //   tamanhoByte: new FormControl(null, []),
  // });
  }

  // onFileDropped($event:any) {
  //   if(this.files.length == 0){
  //     this.prepareFilesList($event);
  //   }else{
  //     this.toastrs.error("Para adicionar uma novo arquivo, remova o arquivo selecionado", "Erro");
  //   }
  // }

  // fileBrowseHandler(files:any) {
  //   if(this.files.length == 0){
  //     this.prepareFilesList(files);
  //   }else{
  //     this.toastrs.error("Para adicionar uma novo arquivo, remova o arquivo selecionado", "Erro");
  //   }
  // }

  // prepareFilesList(files: Array<any>) {
  //   for (const item of files) {
  //     let extensao = item.name.split('.').pop();

  //     if(this.extensoes.some(x=> x.extensaoNome === extensao)){
  //       let ext = this.extensoes.find(x=> x.extensaoNome === extensao);
  //       var sizeFileMb = parseFloat((item.size / 1048576).toFixed(2))

  //       if(sizeFileMb > ext.tamanhoMB){
  //         this.toastrs.error(`Tamanho de arquivo não permitido, para arquivos com extensão .${extensao} o maximo permitido é ${ext.tamanhoMB}MB`, "Erro");
  //       }else{
  //         item.progress = 0;
  //         item.deleteVisible = false;
  //         this.files.push(item);
  //         this.uploadFile(item, this.token, this.toastrs);
  //       }
  //     }else{
  //       this.toastrs.error("Arquivo não permitido", "Erro");
  //     }
  //   }

  //   this.fileDropEl.nativeElement.value = "";
  // }

  // uploadFile(file: any, token: string, toastrs: ToastrService) {

  //   const upload = new tus.Upload(file,
  //       {
  //           chunkSize:200000000,
  //           headers: {
  //             'Authorization': `Bearer ${token}`
  //           },
  //           removeFingerprintOnSuccess:true,
  //           endpoint: `${environment.backend}files`,
  //           //retryDelays: [0, 3000, 5000, 10000, 20000],
  //           onError: function(error) {
  //             toastrs.error('Falha ao enviar arquivo', 'Erro')
  //             file.deleteVisible = true;
  //         },
  //           onProgress: function(bytesUploaded:any , bytesTotal:any) {
  //             var percentage = (bytesUploaded / bytesTotal * 100).toFixed(0)

  //             file.progress = percentage;
  //         },
  //           onSuccess: function() {
  //             file.id = upload.url.split(`${environment.backend}files/`)[1];
  //             file.deleteVisible = true;
  //         },
  //           metadata: {
  //               name: file.name,
  //               contentType: file.type || 'application/octet-stream'
  //           }
  //       });

  //       upload.findPreviousUploads().then(function (previousUploads:any) {
  //         if (previousUploads.length) {
  //           upload.resumeFromPreviousUpload(previousUploads[0])
  //         }

  //         upload.start()
  //     })
  //   }
}

