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
import { ChangeEvent, FormEvent, useState } from 'react'
import { sendRequest } from '~/service/request'
import styles from './styles.module.css'

type ValuesType = {
  subject: string
  description?: string
  ticketType?: string
}

export const FormComponent = () => {
  const ticketsType = ['Internet', 'Hardware', 'Software']
  const [formValues, setFormValues] = useState<ValuesType>({} as ValuesType)

  const handleFormValues = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendRequest('/api/help-desk', {
      ...formValues
    })
  }

  return (
    <Container maxW="container.lg" m="2rem auto ">
      <Flex justifyContent="center" flexDir="column">
        <Heading color="fontColor" as="h1" size="3xl" textAlign="center">
          Help Desk
        </Heading>

        <Text color="fontColor" as="h5" size="sm" textAlign="center" mt="2rem">
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
                type="text"
                color="fontColor"
                name="subject"
                placeholder="Type the subject"
                onChange={handleFormValues}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description" color="fontColor">
                Description
              </FormLabel>
              <Input
                id="description"
                type="text"
                name="description"
                color="fontColor"
                placeholder="Type a description if necessary"
                onChange={handleFormValues}
              />
            </FormControl>

            <Flex mt="0.8rem" justifyContent="space-between">
              <Select
                placeholder="Select ticket type"
                color="fontColor"
                w="20vw"
                name="ticketType"
                onChange={handleFormValues}
              >
                {ticketsType.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>

              <Button type="submit" disabled={!formValues.subject}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Container>
  )
}
