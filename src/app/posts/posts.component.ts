import { Component, OnInit } from '@angular/core';
import { posts } from '../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = posts;
  constructor() { }

  ngOnInit(): void {
  }

}
