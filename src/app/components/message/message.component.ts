import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  contactForm = this.fb.group({
    from: new FormControl('', [Validators.email, Validators.required]),
    subject: '',
    message: ''
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ui: UiService
  ) { }

  onSubmit(): void {
    const payload = JSON.parse(JSON.stringify(this.contactForm.value))
    payload.subject = `${payload.from} ${payload.subject}`
    this.http.post<any>('https://contact-form-2fl3kwprxq-uc.a.run.app', payload).pipe(take(1)).subscribe({
      next: (response) => this.ui.prompt(response["message"]),
      error: (error) => {this.ui.prompt('Submission failed.'); console.log(error)}
    })
    console.log(this.contactForm.value)
    this.contactForm.reset();
  }

}
