import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


interface Option {
  id  : string;
  text: string;
}

export interface TextMessageBoxEvent {
  prompt        : string;
  selectedOption: string;
}

@Component({
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxSelect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent { 
  @Input() placeholder: string = '';
  @Input() disableCorretions: boolean = false;
  @Input({ required: true }) options!: Option[];

  @Output() onMessage = new EventEmitter<TextMessageBoxEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: [ '', Validators.required ],
    selectedOption: ['', Validators.required]
  });

  handleSubmit() {
    if ( this.form.invalid ) return;

    const { prompt, selectedOption } = this.form.value;
    console.log( { prompt });
    

    this.onMessage.emit({ prompt: prompt!, selectedOption:selectedOption! });

    this.form.reset();
    
  }

}
