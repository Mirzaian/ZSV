import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ansprechpartner',
  templateUrl: './ansprechpartner.component.html',
  styleUrls: ['./ansprechpartner.component.css']
})
export class AnsprechpartnerComponent implements OnInit {

  sekretariats = [
    {
      img: "http://hems.de/fileadmin/_processed_/1/1/csm_20190401a7__DSC8462_0ea5446326.jpg",
      name: "Herr Fernandez"
    },
    {
      img: "http://hems.de/fileadmin/_processed_/b/d/csm_Maiello_01_7b0249f993.jpg",
      name: "Frau Oliviero"
    }
  ];

  leaders = [
    {
      img: "http://hems.de/fileadmin/user_upload/Hubacek_Gerald__1__bearbeitet_2.jpg",
      name: "StD Dr. Gerald Hubacek",
      position: "Stellvertretender Schulleiter"
    },
    {
      img: "http://hems.de/fileadmin/_processed_/7/1/csm_Sof_896b96dcd1.jpg",
      name: "StD'in Christina Sorgenfrei",
      position: "Koordinatorin Fachoberschule, Berufliches Gymnasium (Einführungsphase)"
    },
    {
      img: "http://hems.de/fileadmin/_processed_/2/f/csm__S3A0909_63ca96da9f.jpg",
      name: "StD GWL Andreas Voigtländer",
      position: "Koordinator Berufsschule IT-Berufe, Höhere Berufsfachschule, Fachschule"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
