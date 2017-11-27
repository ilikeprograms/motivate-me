import { Injectable } from '@angular/core';

export interface IQuote {
  quote: string;
  author: string;
}

const quotes: Array<IQuote> = [{
    quote: 'If you can dream it you can do it',
    author: 'Walt disney'
  }, {
    quote: 'Where there is a will there is a way',
    author: 'Pauline Kael'
  }, {
    quote: 'Press forward. Do not stop, do not longer in your journey, but strive for the mark set before you',
    author: 'George Whitefield'
  }, {
    quote: 'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt'
  }, {
    quote: 'Aim for the moon. if you miss you may hit a star',
    author: 'W. Clement Stone'
  }, {
    quote: 'Dont watch the clock; Do what it does. Keep going',
    author: 'Sam Levenson'
  }, {
    quote: 'There will be obstacles. There will be doubters. There will be mistakes. But with hard work, there are no limits',
    author: 'Michael Phelps'
  }, {
    quote: 'Keep your eyes on the stars, and your feet on the ground',
    author: 'Theodore Rosevelt'
  }, {
    quote: 'We aim above the mark to hit the mark',
    author: 'Ralph Waldo Emerson'
  }, {
    quote: 'One way to keep momentum going is to have constantly greater goals',
    author: 'Michael Korda'
  }, {
    quote: 'Change your life today. Dont gamble on the future, act now without delay',
    author: 'Simone De Beauvoir'
  }, {
    quote: 'You just cant beat the person who never gives up',
    author: 'Babe Ruth'
  }];

export class QuoteFetcherService {
  public static getQuote(): IQuote {
    const quoteNumber: number = Math.floor(Math.random() * quotes.length);

    return quotes[quoteNumber];
  }
}
