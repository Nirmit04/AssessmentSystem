import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ContentCreatorServiceService } from '../shared/content-creator-service';

@Component({
  selector: 'app-retrieve-question-bank',
  templateUrl: './retrieve-question-bank.component.html',
  styleUrls: ['./retrieve-question-bank.component.css']
})
export class RetrieveQuestionBankComponent implements OnInit {

  getQuestions: any = null;

  constructor(private service: ContentCreatorServiceService) { }

  ngOnInit() {
  }

  search(searchInput, difficulty) {
    console.log(searchInput);
    console.log(difficulty);

    if (searchInput === '') {
      searchInput = null;
    }
    console.log(searchInput);

    if (difficulty === '') {
      difficulty = null;
    }

    this.service.getQuestionsList(searchInput, difficulty).subscribe((data: any) => {
      console.log(data);
      this.getQuestions = data;
      console.log(this.getQuestions);
    });

  }

}
