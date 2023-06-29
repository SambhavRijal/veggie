"use client";

import { useDispatch, useSelector } from "react-redux";
import { ActionIcon, Avatar, Group, ScrollArea, Table, Text, createStyles, useMantineTheme } from "@mantine/core";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { useAppSelector } from "@/redux/hooks";
import { decrementQuantity, incrementQuantity, removeFromCart, selectItems } from "@/redux/cart.slice";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image:string;
    total:number;
    // Add other properties as needed
  }
  
  interface RootState {
    cart: CartItem[];
    // Add other state properties as needed
  }

  const useStyles = createStyles((theme) => ({
    cartTable:{
      width: 1000,
      [theme.fn.smallerThan('sm')]: {
        width:400,
      },
    },

    itemimg:{
      display:"flex",
      [theme.fn.smallerThan('sm')]: {
        flexDirection:"column"
      },
    },

    centerText:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    }
  }))
  
  
  export default function CartItems() {
    const { classes } = useStyles();

    const cart = useAppSelector(selectItems);

    console.log(cart);
    const dispatch = useDispatch();

    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );
    };

    const rows = cart.map((item) => (
      item.quantity >0 && 
      <tr key={item.id}>
        <td>
          <Group spacing="sm" className={classes.itemimg}>
            <Avatar size={30} src={item.image} radius={30} />
            <Text fz="sm" fw={500} className={classes.centerText}  style={{color:'red'}}>
              {item.name}
            </Text>
          </Group>
        </td>
  
        <td>
          <Text size="sm" className={classes.centerText} >
            $ {item.price}
          </Text>
        </td>
        <td>
        <Text size="sm" className={classes.centerText} >
            {item.quantity}
          </Text>
        </td>
        <td >
          <Group spacing={0} position="left" style={{display:'flex',justifyContent:'center'}} className=''>
              <ActionIcon onClick={() => dispatch(decrementQuantity(item.id))}>
                    <IconMinus
                      size="1rem"
                      stroke={1.5} 
                    />
                </ActionIcon>
                <ActionIcon onClick={() => dispatch(incrementQuantity(item.id))}>
                    <IconPlus
                      size="1rem"
                      stroke={1.5}
                    />
                </ActionIcon>
                <ActionIcon color="red" onClick={() => dispatch(removeFromCart(item.id))}>
                  <IconTrash size="1rem" stroke={1.5} />
                </ActionIcon>
          </Group>
        </td>
        <td>
        <Text size="sm" className={classes.centerText} >
            $ {item.quantity * item.price}
          </Text>
        </td>
      </tr>
    )
    );
  
    return (
      <div className="flex flex-col mt-20">
        <Text size={28} className={`mb-4 pl-md ${classes.centerText}`} >My Cart</Text>
        <ScrollArea>
          <Table className={classes.cartTable} verticalSpacing="sm">
            <thead>
              <tr>
                <th><Text className={classes.centerText}>Item</Text></th>
                <th><Text className={classes.centerText}>Price</Text></th>
                <th><Text className={classes.centerText}>Quantity</Text></th>
                <th><Text className={classes.centerText}>Actions</Text></th>
                <th><Text className={classes.centerText}>Total</Text></th>
                <th/>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
          {getTotalPrice() < 1 ? (
          <h1 className={`mt-5 text-red-500 ${classes.centerText}`}>Cart Empty</h1>
        ) : (
          <Text  size={16} className={`mt-5 text-red-600 ${classes.centerText}`}>Grand Total: $ {getTotalPrice()}</Text>
        )}
        </ScrollArea>
      </div>
    );
  }