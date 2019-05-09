# Button

```typescript
@Component({
  selector: 'poc-button',
  exportAs: 'pocButton',
  templateUrl: './button.html',
  styleUrls: ['./button.scss']
})
export class ButtonComponent {
  @Input()
  public classname = '';
  @Input()
  public placeholder = 'click me';
  @Input()
  public disabled = false;
}
```

## How to use 

```html
<poc-button
  classname="red"
  placeholder="Hello"
  [disabled]="true"
>
```
