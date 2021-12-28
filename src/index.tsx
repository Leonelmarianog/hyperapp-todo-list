import { app } from 'hyperapp';
import html from 'hyperlit';
import { toggleHighlight } from './ui/actions/actions';
import IState from './ui/state/IState';
import person from './ui/components/person';

const baseState: IState = {
  names: [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Chelsey Dietrich',
  ],
  highlight: [false, true, false, false, false],
};

app({
  init: baseState,
  view: (state) => html`
    <main>
      <ul class="person-list" data-cy="person-list">
        ${state.names.map((name, index) =>
          person({
            name,
            highlight: state.highlight[index],
            ontoggle: [toggleHighlight, index],
          })
        )}
      </ul>
    </main>
  `,
  node: document.getElementById('root')!,
});
