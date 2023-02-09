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
    reply_to: new FormControl('', [Validators.email, Validators.required]),
    from_name: new FormControl('', Validators.required),
    subject: '',
    message: ''
  });

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private ui: UiService
  ) { }

  onSubmit(): void {
    const params = JSON.parse(JSON.stringify(this.contactForm.value))
    const payload = {
      service_id: 'service_gnjy0yg',
      template_id: 'template_d89aw48',
      user_id: 'qgjhjAkj9FEaVZUV6',
      template_params: params
    }

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', payload, { responseType: 'text' }).pipe(take(1)).subscribe({
      next: (response) => { this.ui.prompt('Message Sent'); console.log(response)},
      error: (error) => { this.ui.prompt('Submission failed.'); console.log(error) }
    })
    console.log(this.contactForm.value)
    this.contactForm.reset();
  }

}
