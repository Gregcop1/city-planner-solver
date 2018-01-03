import {Component, HostBinding, OnInit} from '@angular/core';
import {PiecesService} from '../../services/pieces.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @HostBinding('class.solved')
  private solved: boolean = false;

  constructor(private piecesService: PiecesService) {}

  ngOnInit() {
    this.piecesService.solved
      .subscribe((solved: boolean) => this.solved = solved);
  }

}
