import { Component } from '@angular/core';
import { MessageService } from '../../services/message.service';
import Swal from 'sweetalert2'

// CommonJS

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  constructor(public _MessageService: MessageService) {  }
  contactForm(form) {
    if(form.valid) {
      this._MessageService.sendMessage(form.value).subscribe(() => {
        Swal.fire({
        title: "Formulario de contacto", 
        text: "Mensaje enviado correctamente", 
        icon:'success',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 2500});
  
    }),(error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo salió mal!'
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!',
        showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        timer: 2000
      })
    }
  }
}
