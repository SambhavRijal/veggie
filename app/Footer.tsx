import { createStyles, Text, Container, ActionIcon, Group, rem, TextInput, Button } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(20),
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    [theme.fn.smallerThan('sm')]: {
  
    },
  },

  logo: {
    maxWidth: rem(200),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: rem(300),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  description: {
    marginTop: rem(5),

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    maxWidth:'100%',
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.fn.smallerThan('sm')]: {
      marginTop:`calc(${theme.spacing.md} * 2)`,
      marginBottom:`calc(${theme.spacing.md} * 2)`,
      justifyContent:'center',
      alignItems: 'center',
      gap: `calc(${theme.spacing.md}*2)`,
    },
  },

  wrapper: {
    width: rem(160),
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'center',
      textAlign: 'center',
    },
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: rem(3),
    paddingBottom: rem(3),

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: `calc(${theme.spacing.xs} / 2)`,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    margin:0,
    maxWidth:'100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));



export function MainFooter() {
  const { classes } = useStyles();

  const data = [
    {
      title: "About",
      links: [
        { label: "Features", link: "/features" },
        { label: "Pricing", link: "/pricing" },
        { label: "Support", link: "/support" },
        { label: "Forums", link: "/forums" },
      ],
    },
    {
      title: "Community",
      links: [
        { label: "Facebook", link: "/discord" },
        { label: "Twitter", link: "/twitter" },
        { label: "Newsletter", link: "/newsletter" },
        { label: "Blog", link: "/github-discussions" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "9804322323", link: "/discord" },
        { label: "info@veggie.com", link: "/twitter" },
        { label: "Lalitpur", link: "/newsletter" },
        { label: "Whatsapp", link: "/github-discussions" },
      ],
    },
    {
      title: "Inquiry",
      links: [
        { label: "Home Delivery", link: "/discord" },
        { label: "Employement", link: "/twitter" },
        { label: "History", link: "/newsletter" },
        { label: "Certifications", link: "/github-discussions" },
      ],
    },
  ];
  

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={`${classes.footer} lg:px-10 `}>
      <Container className={`${classes.inner}` }>
        <div className={classes.logo}>
          <Text size={30}>Veggie</Text>
          <Text size="xs" color="dimmed" className={classes.description}>
            Get the best organic food you can find.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
        <div className='flex flex-col'>
          <Text size="30">Subscribe to our newsletter</Text>
          <TextInput
            placeholder="Enter Email"
            size="md"
          />
          <Button style={{ backgroundColor: 'red' }} className='mt-3'>
            Subscribe
          </Button>
      </div>
      </Container>
      <Container className={`${classes.afterFooter}`}>
        <Text color="dimmed" size="sm">
          © 2023 veggie. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size="1.05rem" stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size="1.05rem" stroke={1.5} />
          </ActionIcon>
        </Group>


      </Container>
    </footer>
  );
}