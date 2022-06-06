import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  rows = [
    {
      titulo: '...And Justice For All',
      annio: '1979',
      director: 'Norman Jewison',
      escritor: 'Barry Levinson, Valerie Curtin',
      genero: 'Crimen, Drama, Thriller',
      duracion: '119',
      reparto: 'Al Pacino, Jack Warden, John Forsythe',
    },
    {
      titulo: 'The Verdict',
      annio: '1982',
      director: 'Sidney Lumet',
      escritor: 'David Mamet',
      genero: 'Drama',
      duracion: '129',
      reparto: 'Paul Newman, Charlotte Rampling, Jack Warden',
    },
    {
      titulo: 'The People vs. Larry Flynt',
      annio: '1996',
      director: 'Miloš Forman',
      escritor: 'Scott Alexander, Larry Karaszewski',
      genero: 'Drama',
      duracion: '130',
      reparto: 'Woody Harrelson, Courtney Love, Edward Norton',
    },
    {
      titulo: '12 Angry Men',
      annio: '1957',
      director: 'Sidney Lumet',
      escritor: 'Reginald Rose',
      genero: 'Drama',
      duracion: '97',
      reparto: 'Henry Fonda, Lee J. Cobb, Ed Begley',
    },
    {
      titulo: 'The Trial of the Chicago 7',
      annio: '2020',
      director: 'Aaron Sorkin',
      escritor: 'Aaron Sorkin',
      genero: 'Drama, Historia',
      duracion: '130',
      reparto: 'Yahya Abdul-Matten II, Sacha Baron Cohen, Daniel Flaherty',
    },
    {
      titulo: 'Philadelphia',
      annio: '1993',
      director: 'Jonathan Demme',
      escritor: 'Ron Nyswamer',
      genero: 'Drama',
      duracion: '126',
      reparto: 'Tom Hanks, Denzel Washington, Jason Robards'
    },
    {
      titulo: 'The Client',
      annio: '1994',
      director: 'Joel Schumacher',
      escritor: 'Akiva Goldsman, Robert Getchell',
      genero: 'Drama, Thriller, Crimen, Misterio',
      duracion: '119',
      reparto: 'Susan Sarandon, Tommy Lee Jones, Brad Renfro',
    },
    {
      titulo: 'Judgement at Nuremberg',
      annio: '1961',
      director: 'Stanley Kramer',
      escritor: 'Abby Mann',
      genero: 'Drama, Historia, Guerra',
      duracion: '179',
      reparto: 'Spencer Tracy, Burt Lancaster, Richard Widmark'
    },
    {
      titulo: 'The Pelican Brief',
      annio: '1993',
      director: 'Alan J. Pakula',
      escritor: 'Alan J. Pakula',
      genero: 'Misterio, Drama, Thriller, Crimen',
      duracion: '141',
      reparto: 'Julia Roberts, Denzel Washington, Sam Shepard'
    },
    {
      titulo: 'Presumed Innocent',
      annio: '1990',
      director: 'Alan J. Pakula',
      escritor: 'Alan J. Pakula, Frank Pierson',
      genero: 'Misterio, Drama, Thriller, Crimen',
      duracion: '127',
      reparto: 'Harrison Ford, Brian Dennehy, Raul Julia'
    },
    {
      titulo: 'JFK',
      annio: '1991',
      director: 'Oliver Stone',
      escritor: 'Oliver Stone, Zachary Skylar',
      genero: 'Drama, Thriller, Historia',
      duracion: '189',
      reparto: 'Kevin Costner, Kevin Bacon, tommy Lee Jones'
    },
    {
      titulo: 'The Judge',
      annio: '2014',
      director: 'David Dobkin',
      escritor: 'David Dobkin, Nick Schenk',
      genero: 'Drama',
      duracion: '141',
      reparto: 'Robert Downey Jr., Robert Duvall, Vera Farmiga'
    },
    {
      titulo: 'Anatomy of a Murder',
      annio: '1959',
      director: 'Otto Preminger',
      escritor: 'Wendell Mayes',
      genero: 'Crimen, Drama, Misterio, Thriller',
      duracion: '161',
      reparto: 'James Stewart, Lee Remick, Ben Gazzara'
    },
    {
      titulo: 'Michael Clayton',
      annio: '2007',
      director: 'Tony Gilroy',
      escritor: 'Tony Gilroy',
      genero: 'Drama, Thriller',
      duracion: '119',
      reparto: 'George Clooney, Tom Wilkinson, Tilda Swinton'
    },
    {
      titulo: 'The Lincoln Lawyer',
      annio: '2011',
      director: 'Brad Furman',
      escritor: 'John Romano',
      genero: 'Crimen, Drama, Thriller',
      duracion: '119',
      reparto: 'Matthew McConaughey, Marisa Tomei, Ryan Phillippe'
    },
  ];

  columns = [
    { name: 'Título', prop: 'titulo', width: 200 },
    { name: 'Año', prop: 'annio', width: 125 },
    { name: 'Director', prop: 'director', width: 150 },
    { name: 'Escritor', prop: 'escritor', width: 250 },
    { name: 'Género', prop: 'genero', width: 200 },
    { name: 'Duración (min)', prop: 'duracion', width: 100 },
    { name: 'Reparto', prop: 'reparto', width: 400}
  ];

  tamannios = [
    {name: 'Tres', value: 3},
    {name: 'Cuatro', value: 4},
    {name: 'Seis', value: 6},
    {name: 'Doce', value: 12}
  ];

  tamannio?: any;

  constructor() {}

  ngOnInit(): void {
    this.tamannio = this.tamannios[0].value;
  }
}
