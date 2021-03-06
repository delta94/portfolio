import clsx from 'clsx';
import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
import { InformationsContext } from '../../App';
import { AboutInfo, Avatar, ThreeDAnimation, VanishAnimation } from '../../components';
import { CustomTheme } from '../../theme';
import { MemoizedComponent } from '../../utils/custom-hook';
import { Informations } from '../../utils/informations';

interface AboutProps {}

const useStyles = createUseStyles((theme: CustomTheme) => ({
  header: {
    color: theme.colors.white,
    marginLeft: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: theme.spacing(1.5),
  },
  avatar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutInfo: {
    flex: 3,
    paddingRight: theme.spacing(3.75),
  },
  aboutInfoMobile: {
    paddingRight: theme.spacing(2.5),
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(2.5),
  },
  aboutContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '98%',
  },
  aboutContainerMobile: {
    flexDirection: 'column',
    width: '100%',
  },
  mainContainer: {
    marginTop: theme.spacing(1.5),
  },
}));

const About: React.FC<AboutProps> = () => {
  const classes: Record<
    'header' | 'avatar' | 'mainContainer' | 'aboutInfo' | 'aboutContainer' | 'aboutContainerMobile' | 'aboutInfoMobile',
    string
  > = useStyles();
  const isMobile: boolean = useMediaQuery({ maxWidth: 780 });
  const context: Informations | undefined = useContext<Informations | undefined>(InformationsContext);

  return (
    <Element className={classes.mainContainer} name='About'>
      <div className={classes.header}>{MemoizedComponent(<VanishAnimation words={['About', 'Me']} />)}</div>
      <div className={clsx([classes.aboutContainer, isMobile && classes.aboutContainerMobile])}>
        <div className={classes.avatar}>
          {context?.avatar.avatarTwo && (
            <ThreeDAnimation>
              <Avatar url={context.avatar.avatarTwo as string} />
            </ThreeDAnimation>
          )}
        </div>
        <div className={clsx([classes.aboutInfo, isMobile && classes.aboutInfoMobile])}>
          {MemoizedComponent(<AboutInfo />)}
        </div>
      </div>
    </Element>
  );
};

export { About };
