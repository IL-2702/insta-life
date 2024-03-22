import { Profile } from '@/shared/types/profile'
import { Button } from '@/shared/ui/Button'
import { Typography } from '@/shared/ui/Typography'
import { Description } from '@/widgets/profile/profileHeader/ui/ProfileInfo/Description'
import { UserStat } from '@/widgets/profile/profileHeader/ui/ProfileInfo/UserStat'

import s from './ProfileInfo.module.scss'

export const ProfileInfo = ({ aboutMe, userName }: Props) => {
  const SettingsButton = 'Profile Settings'

  return (
    <div>
      <div className={s.mainWrapper}>
        <div className={s.titleAndStat}>
          <Typography variant={'h1'}>{userName}</Typography>
          <div className={s.stat}>
            <UserStat count={2218} title={'Following'} />
            <UserStat count={2218} title={'Followers'} />
            <UserStat count={2218} title={'Publications'} />
          </div>
        </div>
        <Button as={'a'} href={'/profile/settings'} variant={'secondary'}>
          {SettingsButton}
        </Button>
      </div>
      <Description text={aboutMe} />
    </div>
  )
}

type Props = Pick<Profile, 'aboutMe' | 'userName'>
