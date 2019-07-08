import { Component, OnInit, Input } from '@angular/core';
import { LanguagesService } from 'src/app/services/languages.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss']
})
export class CommentItemComponent implements OnInit {
  @Input() comment: any;

  constructor(
    public _languagesService: LanguagesService,
    private _translateService: TranslateService
  ) {}

  ngOnInit() {}
}
