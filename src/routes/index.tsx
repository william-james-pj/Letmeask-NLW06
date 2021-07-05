import { Switch } from 'react-router-dom';

import { MyRoute } from './MyRoute';

import { Home } from '../pages/Home';
import { NewRoom } from '../pages/NewRoom';
import { Room } from '../pages/Room';
import { AdminRoom } from '../pages/AdminRoom';

export function Routes() {
  return (
    <Switch>
      <MyRoute exact path="/" component={Home} />
      <MyRoute exact path="/rooms/new" component={NewRoom} />
      <MyRoute exact path="/rooms/:id" component={Room} />
      <MyRoute exact path="/admin/rooms/:id" component={AdminRoom} />
      <MyRoute path="*" component={Home} />
    </Switch>
  );
}
