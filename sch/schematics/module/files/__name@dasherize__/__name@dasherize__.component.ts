import { Component } from '@angular/core';

@Component({
  selector: '<%= dasherize(prefix) %>-<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component {

}
