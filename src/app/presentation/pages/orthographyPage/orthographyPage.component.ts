import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent, MyMessageComponent, TextMessageBoxComponent, TextMessageBoxEvent, TextMessageBoxFileComponent, TextMessageBoxSelectComponent, TextMessageEvent, TypingLoaderComponent } from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAiService } from 'app/presentation/services/openai.service';


// import { MyMessageComponent } from '@components/chat-bubbles/MyMessage/MyMessage.component';
// import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,

    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  public messages = signal<Message[]>([ { text: 'Hola mundo', isGpt: true } ]);
  public isLoading = signal(false);
  public openAiService = inject( OpenAiService );


  handleMessage( prompt: string ) {
    console.log( {prompt} );
    
  }

  handleMessageWithFile( { prompt, file }: TextMessageEvent ) {
    console.log( { prompt, file } );
    
  }

  handleMessageWithSelect(e: TextMessageBoxEvent) {
    console.log(e);
    
  }

 }
