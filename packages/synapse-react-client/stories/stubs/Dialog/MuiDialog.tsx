import {
  Box,
  Button,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogProps as MuiDialogProps,
  DialogTitle,
  IconButton,
  Stack,
} from '@mui/material'
import { ReactNode } from 'react'
import { HelpPopover } from '../../../src/components/HelpPopover/HelpPopover'
import IconSvg from '../../../src/components/IconSvg/IconSvg'

export interface DialogProps extends Omit<MuiDialogProps, 'content'> {
  title: string
  content: ReactNode
  helpText?: string
}

export const Dialog = (props: DialogProps) => {
  const { title, content, helpText, ...rest } = props

  return (
    <MuiDialog {...rest}>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          {title}
          {helpText && <HelpPopover markdownText={helpText} />}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained">OK</Button>
      </DialogActions>
    </MuiDialog>
  )
}
