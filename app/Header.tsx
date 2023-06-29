"use client";

import { selectItems } from '@/redux/cart.slice';
import { useAppSelector } from '@/redux/hooks';
import { selectActiveLink, setActive } from '@/redux/nav.slice';
import {
    createStyles,
    Header,
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    Text,
    SimpleGrid,
    ThemeIcon,
    Anchor,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    Input,
    Avatar,
    Indicator,
  } from '@mantine/core';

  import { useDisclosure } from '@mantine/hooks';
  import {
    IconNotification,
    IconCode,
    IconBook,
    IconChartPie3,
    IconFingerprint,
    IconCoin,
    IconChevronDown,
    IconAt,
    IconShoppingCart,
  } from '@tabler/icons-react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
  
  const useStyles = createStyles((theme) => ({
    link: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: 'none',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.md,
  
      [theme.fn.smallerThan('sm')]: {
        height: rem(42),
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
  
      ...theme.fn.hover({
        backgroundColor: '#fb4e52',
        color:'white',
      }),
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor: "#fa0f15",
        color:'white',
      },
    },
  
    subLink: {
      width: '100%',
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,
  
      ...theme.fn.hover({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      }),
  
      '&:active': theme.activeStyles,
    },
  
    dropdownFooter: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    hiddenMobile: {
      [theme.fn.smallerThan('md')]: {
        display: 'none',
      },
    },
  
    hiddenDesktop: {
      [theme.fn.largerThan('md')]: {
        display: 'none',
      },
    },
  }));
  

  const mockdata = [
    {
      icon: IconCode,
      title: 'Open source',
      description: 'This Pokémon’s cry is very loud and distracting',
    },
    {
      icon: IconCoin,
      title: 'Free for everyone',
      description: 'The fluid of Smeargle’s tail secretions changes',
    },
    {
      icon: IconBook,
      title: 'Documentation',
      description: 'Yanma is capable of seeing 360 degrees without',
    },
    {
      icon: IconFingerprint,
      title: 'Security',
      description: 'The shell’s rounded shape and the grooves on its.',
    },
    {
      icon: IconChartPie3,
      title: 'Analytics',
      description: 'This Pokémon uses its flying ability to quickly chase',
    },
    {
      icon: IconNotification,
      title: 'Notifications',
      description: 'Combusken battles with the intensely hot flames it spews',
    },
  ];
  
  export function NavHeader() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();
    const dispatch = useDispatch();

    const cart = useAppSelector(selectItems);

    const link = useAppSelector(selectActiveLink);

    console.log(link);
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Group noWrap align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
          </ThemeIcon>
          <div>
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            <Text size="xs" color="dimmed">
              {item.description}
            </Text>
          </div>
        </Group>
      </UnstyledButton>
    ));
  
    return (
      <Box className='fixed top-0 left-0 right-0 z-30'>
        {/* <Header height={50} px="xl" pt="xs" className={`${classes.hiddenMobile}`}>
            <Group className='justify-between'>
                <Text size={16} className='w-1/4'>info@veggie.com</Text>
                <Text size={30} >VEGGIE</Text>
                <Text size={16} className='w-1/4 text-right'>+9866045875</Text>
            </Group>
        </Header> */}
        <Header height={60} px="xl">
          <Group  className='justify-between ' sx={{ height: '100%' }}>


            <Link href="/" onClick={() => {dispatch(setActive('home')); }} className={`w-1/4 ${classes.hiddenMobile} `}>
              <Text size={30}  style={{color:'red'}}> Veggie </Text>
            </Link>

            <Link href="/" onClick={() => {dispatch(setActive('home')); }}  className={`${classes.hiddenDesktop}`}>
              <Text size={30} style={{color:'red'}}> Veggie </Text>
            </Link>


            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
              <Link href="/" className={`${classes.link} ${link === 'home' ? classes.linkActive : ''}`}
              onClick={() => {dispatch(setActive('home')); }}>
                Home
              </Link>
              <a href="#" className={classes.link}>
                Products
              </a>
              <a href="#" className={classes.link}>
                About Us
              </a>
              <Link href="/cart" className={`${classes.link} ${link === 'cart' ? classes.linkActive : ''}` }
              onClick={() => {dispatch(setActive('cart')); }}>
                Cart
              </Link>
              <a href="#" className={classes.link}>
                Contact Us
              </a>

              
            </Group>
            

            <Group className={`${classes.hiddenMobile} w-1/4 justify-end`}>
            <Link href="/cart"
                onClick={() => {dispatch(setActive('cart')); }} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Indicator inline label={cart.reduce((total, item) => total + item.quantity, 0)} size={16}>
                <IconShoppingCart radius="xl" size={30} color="red" style={{color:'red'}}/>
              </Indicator>
            </Link>
              <Input
                icon={<IconAt />}
                variant="filled"
                placeholder="Search"
                radius="xl"
                className='border-solid border border-black rounded-3xl'
              />
            </Group>
  

            <Group className={`${classes.hiddenDesktop} `}>
              <Link href="/cart" 
                  onClick={() => {dispatch(setActive('cart')); }} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Indicator inline label={cart.reduce((total, item) => total + item.quantity, 0)} size={16}>
                  <IconShoppingCart radius="xl" size={30} color="red" style={{color:'red'}}/>
                </Indicator>
              </Link>
              <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
            </Group>
          </Group>
        </Header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Navigation"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Link href="/" className={`${classes.link} ${link === 'home' ? classes.linkActive : ''}`}
              onClick={() => {dispatch(setActive('home')); }}>
                Home
              </Link>
            <a href="#" className={classes.link}>
              Products
            </a>
            <a href="#" className={classes.link}>
              About Us
            </a>
            <Link href="/cart" className={`${classes.link} ${link === 'cart' ? classes.linkActive : ''}` }
              onClick={() => {dispatch(setActive('cart')); }}>
                Cart
            </Link>
            <a href="#" className={classes.link}>
              Contact Us
            </a>

            <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
  
            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button variant="default">Sign up</Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }