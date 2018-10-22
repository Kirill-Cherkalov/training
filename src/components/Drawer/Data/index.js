
import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { NeckIcon, EyeIcon } from './styled';

const mailFolderListItems = (
  <div>
    <Link href="/neckTraining/:1" to="/neckTraining/:1">
      <ListItem button>
        <ListItemIcon>
          <NeckIcon />
        </ListItemIcon>
        <ListItemText primary="Exercise for neck №1" />
      </ListItem>
    </Link>
    <Link href="/neckTraining/:2" to="/neckTraining/:2">
      <ListItem button>
        <ListItemIcon>
          <NeckIcon />
        </ListItemIcon>
        <ListItemText primary="Exercise for neck №2" />
      </ListItem>
    </Link>
    <Divider />
    <Link href="/eyesTraining/:1" to="/eyesTraining/:1">
      <ListItem button>
        <ListItemIcon>
          <EyeIcon />
        </ListItemIcon>
        <ListItemText primary="Exercise for eyes №1" />
      </ListItem>
    </Link>
  </div>
);

export default mailFolderListItems;
