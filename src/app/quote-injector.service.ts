import { Injectable } from '@angular/core';
import { QuoteFetcherService, IQuote } from './quote-fetcher.service';

@Injectable()
export class QuoteInjectorService {
  constructor() {
    /*tslint:disable*/
    window['chrome'].tabs.executeScript(null, {
      code: `(function () {
        //document.querySelectorAll('h1').forEach((heading) => { heading.innerText = 'blah'; });
      })()`,
      runAt: 'document_start'
    }, () => {
      console.log('installed');
    });

    console.log(window['chrome']);
    window['chrome'].tabs.onCreated.addListener(function(tab) {
      const quote: IQuote = QuoteFetcherService.getQuote();

        window['chrome'].tabs.executeScript(tab.id, {
          code: `(function () {
            document.querySelectorAll('h1').forEach((heading) => {
              const blockquote = document.createElement('blockquote');
              const quoteParagraph = document.createElement('p');
              const blockQuoteFooter = document.createElement('footer');
              const authorCite = document.createElement('cite');

              quoteParagraph.innerText = '${quote.quote}';
              authorCite.innerText = '${quote.author}';

              blockQuoteFooter.innerText = ' - ';
              blockQuoteFooter.appendChild(authorCite);

              blockquote.appendChild(quoteParagraph);
              blockquote.appendChild(blockQuoteFooter);

              heading.parentNode.insertBefore(blockquote, heading.nextSibling);
            });
          })()`,
        });
    });

    console.log('tab run');
    /*tslint:enable*/
  }
}
