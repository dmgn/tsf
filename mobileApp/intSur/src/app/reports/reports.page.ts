import { Component, OnInit } from '@angular/core';
import { AwsService } from '../aws.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  providers:[AwsService]
})

export class ReportsPage implements OnInit {

  constructor(public awsService : AwsService) {  }
  images = [];

  ngOnInit() {

    this.awsService.getFileList().subscribe(
      res => {
       // console.log('HTTP response' + res['Contents'].values());
        for (let name of res['Contents'].values()) {

          console.log(" Key :: " +name.Key);
          this.awsService.getSignedFileRequest(name.Key).subscribe(innerres => {
            this.images.push({key: name.Key, url: innerres})
          });
        }
        res['Contents'].map(val => val.Key);
       // console.log('HTTP response' +  JSON.stringify({ data: res}, null, 4));
      }
    );

     /*this.awsService.getFileList()
      .subscribe(files => {
        for (let name of files) {
          this.awsService.getSignedFileRequest(name).subscribe(res => {
            this.images.push({key: name, url: res})
          });
        }
      }
    )*/
  }

}
