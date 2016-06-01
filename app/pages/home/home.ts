import {Page} from 'ionic-angular';
import {GeneralService} from '../../services/general'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  title: string;
  constructor(private generalService: GeneralService) {
    this.title = this.generalService.appTitle;
  }
}
