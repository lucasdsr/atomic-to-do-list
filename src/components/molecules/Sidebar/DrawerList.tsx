import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import { SidebarItems } from './interfaces'

export const DrawerList = ({ items }: { items: SidebarItems }) => (
  <Box sx={{ maxWidth: 250 }} role='presentation'>
    <List>
      {items.map(({ title, Icon }, index) => (
        <ListItem key={`${title}_${index}`} disablePadding>
          <ListItemButton>
            {Icon && (
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
            )}
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
)
