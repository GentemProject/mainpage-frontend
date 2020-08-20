import { useState } from 'react'

// Material UI Check
import { withStyles, Theme, createStyles } from '@material-ui/core/styles'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch'

// Styles
import * as styles from '../../styles/onglist.module.scss'

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string
}

interface Props extends SwitchProps {
  classes: Styles
}
const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#237ed5',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#237ed5',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  )
})

export default function TextCheck({ title, desc, change, name }) {
  const [check, setCheck] = useState({
    checkedB: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheck({ ...check, [event.target.name]: event.target.checked })
    console.log(check.checkedB)
    change(event.target.checked, name)
  }

  return (
    <FormGroup>
      <div className={styles.textCheck}>
        <div className={styles.textCheckTop}>
          <h6>{title}</h6>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={check.checkedB}
                onChange={handleChange}
                name="checkedB"
              />
            }
            label=""
          />
        </div>
        <div className={styles.textCheckBottom}>{desc}</div>
      </div>
    </FormGroup>
  )
}
