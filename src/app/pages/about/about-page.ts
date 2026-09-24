import { Component, effect, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-about-page',
  styleUrl: './about-page.css',
  templateUrl: './about-page.html',
})
export default class AboutPage {

  private title = inject(Title);
  private meta = inject(Meta);

  effect = effect(() => {
    this.title.setTitle('About page');
    this.meta.updateTag({name:'description',content:'esta es la pagina de about'});
    this.meta.updateTag({name:'og:title',content:'About page'});
    this.meta.updateTag({name:'keywords',content:'the punisher santofimio,monga,santofimio'});

  });

}
