import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

/// O OnInit é antes de inicializar o componente, já o
/// OnChanges, sempre que o componente for alterado
/// ele executa seu método
@Component({
  selector: 'app-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  /// Quando uma variável nossa recebe uma informação
  /// de um componente externo, colocamos o @Input,
  /// e com isso, o "rating" passa a ser um atributo
  /// de tag do selector app-star
  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.starWidth = this.rating * 74 / 5;
  }
}
