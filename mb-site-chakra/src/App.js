import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Button, Stack } from '@chakra-ui/react'
import Card from "./components/Card"
import { users } from "./users"


function App() {



  return (

    <ChakraProvider>

    

      <Flex gap="16px" wrap="wrap">
        {users && users.map((user) => {
          console.log(users)
          return <Card user={user} key={user.id} />
        })}
      </Flex>

      
      <Stack gap="160px" wrap="wrap" direction='row' spacing={6} align='center'>
        <Button colorScheme='teal' variant='solid'>
          Button
        </Button>
        <Button colorScheme='teal' variant='outline'>
          Button
        </Button>
        <Button colorScheme='teal' variant='ghost'>
          Button
        </Button>
        <Button colorScheme='teal' variant='link'>
          Button
        </Button>
      </Stack>
      

    </ChakraProvider>
    
  );
}

export default App;
