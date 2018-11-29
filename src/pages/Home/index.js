import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k])

const events = [
  {
    'title': 'Processo Seletivo - Prova 01',
    'allDay': true,
    'start': new Date(2019, 0, 7),
    'end': new Date(2019, 0, 7)
  },
  {
    'title': 'Processo Seletivo - Prova 01',
    'start': new Date(2019, 0, 11),
    'end': new Date(2017, 0, 11)
  },

  {
    'title': 'Processo seletivo - Prova 01',
    'start': new Date(2019, 0, 13, 0, 0, 0),
    'end': new Date(2019, 0, 13, 0, 0, 0)
  },

  {
    'title': 'Processo seletivo - Dinâmica Árvore',
    'start': new Date(2019, 0, 6, 0, 0, 0),
    'end': new Date(2019, 0, 6, 0, 0, 0)
  },

  {
    'title': 'Processo seletivo - Dinâmica Árvore',
    'start': new Date(2019, 0, 9, 0, 0, 0),
    'end': new Date(2019, 0, 9, 0, 0, 0)
  },
  {
    'title': 'Processo Seletivo - Prova 02',
    'start': new Date(2019, 0, 11),
    'end': new Date(2019, 0, 13)
  },
  {
    'title': 'Processo seletivo - Dinâmica Robô',
    'start': new Date(2019, 0, 12, 10, 30, 0, 0),
    'end': new Date(2019, 0, 12, 12, 30, 0, 0)
  },
  {
    'title': 'Matrículas',
    'start':new Date(2019, 1, 1, 12, 0, 0, 0),
    'end': new Date(2019, 1, 15, 13, 0, 0, 0)
  },
  {
    'title': 'Início das Aulas',
    'start':new Date(2019, 1, 18, 13, 0, 0, 0),
    'end': new Date(2019, 1, 18, 19, 0, 0, 0)
  }
]

const Home = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <BigCalendar
            events={events}
            views={allViews}
            defaultDate={new Date(2019, 1, 1)} />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
