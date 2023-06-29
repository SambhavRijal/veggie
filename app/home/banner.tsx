"use client";

import { Button, createStyles, Text, Title} from '@mantine/core';



const useStyles = createStyles((theme) => ({
  wrapper: {
    color:'white',
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    backgroundImage:
    'url(/img/bannerimg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom:`calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: 'white',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  shopbutton:{
    color:'white',
    backgroundColor:'red',
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function EndBanner() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Wait a minute...</Title>
        <Text fw={700} fz="xl" mb={5}>
          Buy 2 and get 20% off
        </Text>
        <Text fz="sm" c="white">
          Browse our store for the best offers you can find on groceries and organic food.
        </Text>

        <div className={classes.controls}>
        <Button style={{ backgroundColor: 'red' }}>
            Shop Now
        </Button>
        </div>
      </div>
    </div>
  );
}