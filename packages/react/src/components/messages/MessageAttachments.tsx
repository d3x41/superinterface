import { SerializedMessage } from '@/types'
import {
  Flex,
  Badge,
} from '@radix-ui/themes'
import {
  FileIcon,
} from '@radix-ui/react-icons'

export const MessageAttachments = ({
  message,
}: {
  message: SerializedMessage
}) => {
  if (!message.attachments?.length) return null

  return (
    <Flex
      align="start"
      pb="1"
    >
      <Badge
        color="gray"
        variant="surface"
      >
        <FileIcon />
        {message.attachments.length} file{message.attachments.length > 1 ? 's' : ''}
      </Badge>
    </Flex>
  )
}
