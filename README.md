# Date Pipe pt-Br

Simples projeto de como utilizar um `DatePipe` no **angular 9** com `angular2-moment`.

###

Primeiramente precisaremos importar o **angular2-moment**:
```bash
npm i angular2-moment
```

Precisaremos importar os módulos no ***app.modules.ts*** ficando como abaixo:

```ts
import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-br';
```
No meu `component` que nesse projeto será o ***datepipe.component.ts*** terá o seguinte código:

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepipe',
  templateUrl: './datepipe.component.html',
  styleUrls: ['./datepipe.component.css']
})
export class DatepipeComponent implements OnInit {

  today: Date;
  hoje: Date;

  constructor() { }

  ngOnInit() {
    const now = new Date(Date.now());
    this.today = now;
    this.hoje = now;
  }
}
```
E por fim o arquivo ***datepipe.component.html*** ficará:

```html
<section>
  <div>
    <h3>Default: en-US</h3>
    <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate' }}</p>
    <p>The time is {{today | date:'h:mm a z'}}</p>
  </div>


  <div>
    <h3>Custom: pt-BR</h3>
    <p>Hoje é {{hoje |  amDateFormat:'LL'  }}</p>
    <p>Ou se preferir, {{hoje | amDateFormat:'dddd, d MMMM, y'}}</p>
    <p>A hora é {{hoje | amDateFormat:'HH:mm Z'}}</p>
  </div>
</section>
```


## Referências
* [angular2-moment](https://www.npmjs.com/package/angular2-moment)
* [ngx-moment](https://github.com/urish/ngx-moment)
* [momentjs](https://momentjs.com/docs/#/displaying/calendar-time/)


#


![](src/assets/face-notebook_300x292.jpg)





