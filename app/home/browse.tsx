"use client";

import { Button, createStyles, Text} from '@mantine/core';



const useStyles = createStyles((theme) => ({

maincontainer:{
    display:'flex',
    gap:`calc(${theme.spacing.md} * 2)`,
    [theme.fn.smallerThan('sm')]: {
        gap:`calc(${theme.spacing.xs} * 2)`,
      },
},

  wrapper: {
    maxWidth:'50%',
    width:'50%',
    height: 300,
    color:'white',
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginBottom:`calc(${theme.spacing.xl} * 2)`,

    [theme.fn.smallerThan('sm')]: {
      height:200,
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },

   
  },

  fruits:{
    backgroundImage:
    'url(/img/fruits.jpg)',
    backgroundColor: "grey",
   backgroundBlendMode: "multiply",
  },

  vegetables:{
    backgroundImage:
    'url(/img/vegetables.jpg)',
    backgroundColor: "grey",
    backgroundBlendMode: "multiply",
  },

  image: {
    maxWidth: '40%',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    margin:"auto",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
  },

  title: {
    color: 'white',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    fontSize:"3rem",
    marginBottom: theme.spacing.md,
    [theme.fn.smallerThan('sm')]: {
        fontSize:"1.3rem",
        marginBottom: 0,
      },
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.sm,
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

export function Browse() {
  const { classes } = useStyles();
  return (
    <div>
    <Text size={30} className='text-center mt-10 lg:mt-20 '>Browse Our Store</Text>
    <div className={`${classes.maincontainer} m-5 lg:m-10`}>
        
        <div className={`${classes.wrapper} ${classes.fruits}`} >
            <div className={classes.body}>
                <Text className={classes.title}>Fruits</Text>

                <div className={classes.controls}>
                <Button style={{ backgroundColor: 'red' }}>
                    Shop Now
                </Button>
                </div>
            </div>
        </div>
        <div className={`${classes.wrapper} ${classes.vegetables}`} >
                <div className={classes.body}>
                    <Text className={classes.title}>Veggies</Text>

                    <div className={classes.controls}>
                    <Button style={{ backgroundColor: 'red' }}>
                        Shop Now
                    </Button>
                </div>
            </div>
        </div>
  </div>
  </div>
  );
}