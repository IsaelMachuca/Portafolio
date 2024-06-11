// src/app/info/info.component.ts
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/Api/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  skills: any[] = [];
  strengths: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getSkills().subscribe(data => {
      this.skills = Object.values(data).map((item: any) => item.skills || item.skill);
    });

    this.apiService.getStrengths().subscribe(data => {
      this.strengths = Object.values(data).map((item: any) => item.strengths || item.strength);
    });
  }
}
