import { Component } from '@angular/core';

interface RowData {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
    displayedColumns: string[] = ['col1', 'col2', 'col3', 'col4', 'col5', 'action'];
    dataSource: RowData[] = [
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'},
      { col1: 'Alarma 1', col2: '25/01/2025', col3: 'Arriendo', col4: '$2 000 000', col5: 'Bancolombia'}
  ];

}
