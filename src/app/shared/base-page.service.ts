import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class BasePageService {
  constructor(private meta: Meta, private title: Title) {
  }

  public updateTitleDescription(title: string, description: string) { 
  }
}
