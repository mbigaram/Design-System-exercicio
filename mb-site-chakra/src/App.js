import { ChakraProvider, Flex } from '@chakra-ui/react'
import { Button, Stack } from '@chakra-ui/react'
import Card from "./components/Card"





function App() {
  

  return (
    <ChakraProvider>




      <Flex>
      {/* {produto && 
      produto.map((users)=>{
        return <Card users={users} key = {users.id}/>
      })} */}
      <Card/>
      </Flex>



      <Stack direction='row' spacing={4} align='center'>
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
