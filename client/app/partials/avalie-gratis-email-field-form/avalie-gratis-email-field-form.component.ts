import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

import { TryOctadeskModalComponent } from '../modals/try-octadesk-modal/try-octadesk-modal.component';

interface KeyValue {
  value: String,
  label: String,
  disabled: Boolean
};

interface StatusField {
  email: Boolean
};

@Component({
  moduleId: module.id,
  selector: 'octadesk-avalie-form-email-field',
  templateUrl: './avalie-gratis-email-field-form.html',
  providers: [TryOctadeskModalComponent]
})
export class AvalieGratisEmailFormFieldComponent implements OnInit {


  @Output() onSubmitted = new EventEmitter<boolean>();
  @ViewChild(TryOctadeskModalComponent) trialModal: TryOctadeskModalComponent;



  openTrialModal() {
    this.trialModal.open();
  }

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,  private http: Http) { }

  hasSuccess: StatusField = {
    email: undefined
  };

  hasDanger: StatusField = {
    email: undefined
  };

  email: any;

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: '',
      utm_source: '',
      utm_medium: '',
      utm_term: '',
      utm_content: '',
      utm_campaign: '',
      conversion_page: '',
      traffic_source: '',
      token_rdstation: 'a11b684a12a26ae8ba527c428c822f07',
      identificador: 'form-trial-experimente-o-octadesk-email'
    });

  }



  //
  // Validação do campo "Email"
  //

  validateEmailregEx(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateEmail(elem) {
    if (elem.target.checkValidity() && this.validateEmailregEx(this.email)) {
      this.hasDanger.email = false;
      this.hasSuccess.email = true;
    }
    else {
      this.hasSuccess.email = false;
      this.hasDanger.email = true;
    }
  }

  //
  // Submit
  //

  onSubmit(event: Event) {

    event.preventDefault();
    this.openTrialModal();
    console.log(this.form.value);

  }
}
