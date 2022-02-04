import {
  Heading,
  Text,
  Flex,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FormEvent, useState } from 'react'
import { sendRequest } from '../service/request'
import styles from './styles.module.css'

export const FormComponent = () => {
  const [subjectText, setSubjectText] = useState()
  const [descriptionText, setDescriptionText] = useState()
  const [ticketType, setTicketType] = useState<String>()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    //sendRequest('api/help-desk', {})
    console.log(event)
  }

  const ticketsType = ['Internet', 'Hardware', 'Software']

  return (
    <Container maxW="container.lg" m="0 auto">
      <Flex justifyContent="center" flexDir="column">
        <Heading color="fontColor" as="h1" size="3xl" textAlign="center">
          Help Desk
        </Heading>

        <Text color="fontColor" as="h5" size="sm" textAlign="center">
          Register your problem to our help desk team
        </Text>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Flex flexDir="column" gap="0.8rem" p="2">
            <FormControl isRequired>
              <FormLabel htmlFor="subject" color="fontColor">
                Subject
              </FormLabel>
              <Input
                id="subject"
                type="subject"
                color="fontColor"
                placeholder="Type the subject"
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description" color="fontColor">
                Description
              </FormLabel>
              <Input
                id="description"
                type="description"
                color="fontColor"
                placeholder="Type a description if necessary"
              />
            </FormControl>

            <Flex mt="0.8rem" justifyContent="space-between">
              <Select
                placeholder="Select ticket type"
                color="fontColor"
                w="20vw"
                onChange={(value) => setTicketType(value.target.value)}
              >
                {ticketsType.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>

              <Button type="submit">Submit</Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Container>
  )
}
