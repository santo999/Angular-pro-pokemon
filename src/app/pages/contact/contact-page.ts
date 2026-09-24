import { Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-contact-page',
  styleUrl: './contact-page.css',
  templateUrl: './contact-page.html',
})
export default class ContactPage {
  private title = inject(Title);
  private meta = inject(Meta);


  effect = effect(() => {
    this.title.setTitle('contact page');
    this.meta.updateTag({name:'description',content:'esta es la pagina de contact page'});
    this.meta.updateTag({name:'og:title',content:'contact page'});
    this.meta.updateTag({name:'keywords',content:'the punisher santofimio,monga,santofimio'});
  });
}
