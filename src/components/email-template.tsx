interface EmailTemplateProps {
  message: string
  email: string
}

export const EmailTemplate = ({ message, email }: EmailTemplateProps) => (
  <div>
    <p>The following is a message from your portfolio:</p>
    <p>{message}</p>
    <p>
      From <a href={`mailto:${email}`}>{email}</a>
    </p>
  </div>
)
