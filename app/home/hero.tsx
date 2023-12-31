"use client";

import { createStyles, Overlay, Container, Title, Button, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundImage:
      'url(/img/herobg.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.fn.smallerThan('sm')]: {
      margin: `calc(${theme.spacing.xs} * 2)`,
    },
  },

  container: {
    height: rem(650),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingBottom: `calc(${theme.spacing.xl} * 6)`,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: rem(500),
      paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    },
  },

  title: {
    color: theme.white,
    fontSize: rem(60),
    fontWeight: 900,
    lineHeight: 1.1,

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(40),
      lineHeight: 1.2,
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
      lineHeight: 1.3,
    },
  },

  description: {
    color: theme.white,
    maxWidth: 600,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm,
    },
  },

  control: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,

    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();

  return (
    <div className={`${classes.hero} `}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 60%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={`${classes.container} m-0`}>
        <Text className={classes.description} size={20} mt="xl" mb="xl">
          Now Offering
        </Text>

        <Title className={classes.title}>FREE HOME DELIVERIES</Title>
          
        <Text className={classes.description} size={20} mt="lg">
          Fresh Products to your door
        </Text>

        <Button variant="gradient" size="xl" radius="xl" className={classes.control} style={{ backgroundColor: 'red' }}>
          Get started
        </Button>
      </Container>
    </div>
  );
}