import { Box } from '@chakra-ui/react';
import { Flex, Spacer, Center } from '@chakra-ui/react';
import MenuLink from './MenuLink';

const Menu = () => {
  return (
    <section className='menu'>
      <Flex color='white'>
        <Center flex='1' m={4}>
          <Box bg='black' w='50%' p={4} color='white'>
            <MenuLink text='Get Started' />
            <MenuLink text='Portfolio' />
            <MenuLink text='About Us' />
            <MenuLink text='Dark Mode' />
          </Box>
        </Center>
        <Center w='50vw'>
          <h2></h2>
        </Center>
      </Flex>
    </section>
  );
};

export default Menu;
