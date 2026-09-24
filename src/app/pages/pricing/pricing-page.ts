import { isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  imports: [],
  selector: 'app-pricing-page',
  styleUrl: './pricing-page.css',
  templateUrl: './pricing-page.html',
})
export default class PricingPage {
  private title = inject(Title);
  private meta = inject(Meta);
  private navegator = inject(PLATFORM_ID)


  effect = effect(() => {

    // if (isPlatformBrowser(this.navegator)) {

    // document.title="hola"
      
    // }


    this.title.setTitle('pricing page');
    this.meta.updateTag({name:'description',content:'esta es la pagina de pricing page'});
    this.meta.updateTag({name:'og:title',content:'pricing page'});
    this.meta.updateTag({name:'keywords',content:'the punisher santofimio,monga,santofimio'});
  });
}
