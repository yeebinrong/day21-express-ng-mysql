import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Guest } from '../models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hide:boolean = true; // hide password
  form:FormGroup;

  constructor(private fb:FormBuilder, private apiSvc:ApiService) { }

  ngOnInit(): void {
    this.createForm();
  }

  onSubmit() {
    const r = this.form.value
    const val:Guest = {
      name: r.name,
      phone: r.phone,
      email: r.email,
      status: r.attending
    }
    this.apiSvc.postData(val);
    // this.form.reset()
  }

  // Generates the form
  private createForm () {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      phone: this.fb.control('', [Validators.required, Validators.pattern(/(\+65|65|\(65\)|\+\(65\))?\s?([6|8|9]{1}[0-9]{3})(-|\s)?([0-9]{4})/)]),
      email: this.fb.control('', [Validators.required]),
      attending: this.fb.control('', [Validators.required]),
    })
  }

}
