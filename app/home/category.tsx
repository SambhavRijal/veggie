"use client";

import { Carousel } from '@mantine/carousel';
import { Card, Image, Group } from '@mantine/core';
import { createStyles, Text, Button, rem } from '@mantine/core';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import * as menu from '../../public/menu.json';
import { useDispatch } from 'react-redux';
import { addToCart,selectItems } from '@/redux/cart.slice';
import { useAppSelector } from '@/redux/hooks';


const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  carousel:{
    [theme.fn.smallerThan('sm')]: {
      margin: `calc(${theme.spacing.xs} * 2)`,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

export function CardsCarousel() {
  const { classes } = useStyles();

  const dispatch = useDispatch();

  const cart = useAppSelector(selectItems);

  console.log(cart);

  const isItemInCart = (itemId:number) => {
    return cart.some((cartItem) => cartItem.id === itemId);
  };

  const getQuantity = (itemId:number) => {
    const cartItem = cart.find((cartItem) => cartItem.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <>
    <Text size={30} className='text-center mt-0 lg:mt-20'>Our Fruits</Text>
    <Carousel
    withIndicators
    height={370}
    slideSize="25%"
    slideGap="lg"
    align="start"
    loop
    className={`${classes.carousel} lg:m-10 relative`}
    nextControlIcon={<IconArrowRight size={20}/>}
    previousControlIcon={<IconArrowLeft size={20} />}
    slidesToScroll={2}
    breakpoints={[
      { maxWidth: 'md', slideSize: '50%' },
      { maxWidth: 'sm', slideSize: '50%', slideGap: 10 },
    ]}
  >

    {
    menu.fruit.map((item) => (
  
      <Carousel.Slide key={item.name} gap="xl" className=''>
        {/* Card */}
          <Card shadow="xl" padding="lg" radius="md" withBorder style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
          <Card.Section>
            <Image
              src={item.image}
              height={180}
              alt="Norway"
            />
          </Card.Section>
  
          <Group position="apart" mt="md" mb="xs">
            <Text weight={500}>{item.name}</Text>
          </Group>
  
          <Text size="sm">
            $ {item.price}
          </Text>


          <Button style={{ backgroundColor: 'red' }} fullWidth mt="md" radius="md" 
          onClick={() => {
            dispatch(addToCart(item));
            }}>
            {isItemInCart(item.id) ? `In cart (${getQuantity(item.id)})` : 'Add to cart'}
          </Button>
        </Card>
      </Carousel.Slide>
      
    ))
  }
  </Carousel>
  </>
  );
}