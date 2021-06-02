import { Component } from '@angular/core';
import moment from 'moment';
import * as CryptoJS from 'crypto-js';
import { Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-example';
  date = moment().format('MMM Do YY');
  ciphertext = CryptoJS.AES.encrypt(
    Constants.message,
    Constants.key
  ).toString();

  bytes = CryptoJS.AES.decrypt(this.ciphertext, Constants.key);
  originalText = this.bytes.toString(CryptoJS.enc.Utf8);
}
