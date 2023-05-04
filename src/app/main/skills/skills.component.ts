import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    {
      name: 'HTML',
      text: '4 Years Experience'
    },
    {
      name: 'CSS',
      text: '4 Years Experience'
    }, {
      name: 'Javascript',
      text: '4 Years Experience'
    }, {
      name: 'Accessibility',
      text: '4 Years Experience'
    }, {
      name: 'React',
      text: '3 Years Experience'
    },{
      name: 'Sass',
      text: '3 Years Experience'
    },
  ]
}
