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
import { FormEvent, useState } from 'react'
import { sendRequest } from '../service/request'
import styles from './styles.module.css'

type ValuesType = {
  subjectText: string
  descriptionText?: string
  ticketType?: string
}

type FormComponentProps = {
  onSubmitForm: ({
    subjectText,
    descriptionText,
    ticketType
  }: ValuesType) => void
}

export const FormComponent = ({ onSubmitForm }: FormComponentProps) => {
  const [subjectText, setSubjectText] = useState('')
  const [descriptionText, setDescriptionText] = useState<string>()
  const [ticketType, setTicketType] = useState<string>()

  const [formValue, serFormValue] = useState<ValuesType>({
    ticketType: '',
    descriptionText: '',
    subjectText: ''
  })
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    sendRequest('/api/help-desk', {
      subjectText,
      descriptionText,
      ticketType
    })
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
                onChange={(event) => setSubjectText(event.target.value)}
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
                onChange={(event) => setDescriptionText(event.target.value)}
              />
            </FormControl>

            <Flex mt="0.8rem" justifyContent="space-between">
              <Select
                placeholder="Select ticket type"
                color="fontColor"
                w="20vw"
                onChange={(event) => setTicketType(event.target.value)}
              >
                {ticketsType.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>

              <Button type="submit" disabled={!subjectText}>
                Submit
              </Button>
            </Flex>
          </Flex>
        </form>
      </Flex>
    </Container>
  )
}
