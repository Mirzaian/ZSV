import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  profileForm = new FormGroup({
    schoolname: new FormControl({value: 'Heinrich-Emanuel-Merck Schule, Darmstadt', disabled: true}),
    schoolkind: new FormControl({value: 'Berufsschule', disabled: true}),
    firstname: new FormControl({value: 'Max', disabled: true}),
    lastname: new FormControl({value: 'Mustermann', disabled: true}),
    email: new FormControl({value: 'max@mustermann.de', disabled: true}),
    birthday: new FormControl({value: '01.01.1996', disabled: true}),
    birthcountry: new FormControl({value: 'Dieburg, Deutschland', disabled: true}),
    gender: new FormControl({value: 'male', disabled: true}),
    country: new FormControl({value: 'germany', disabled: true}),
    street: new FormControl({value: 'mustermannstr. 10', disabled: true}),
    city: new FormControl({value: 'Musterstadt', disabled: true}),
    region: new FormControl({value: 'Hessen', disabled: true}),
    zip: new FormControl({value: '64285', disabled: true}),
    religion: new FormControl({value: 'Katholisch', disabled: true}),
    mobile: new FormControl({value: '+49 152 12304920', disabled: true}),
    apprenticeship: new FormControl({value: 'fiae', disabled: true}),
    factory: new FormControl({value: 'Max Mustermann AG', disabled: true}),
    vstatus: new FormControl({value: 'masern', disabled: true}),

  });

}
