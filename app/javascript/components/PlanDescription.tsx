import React, { useState } from 'react'
import styled from 'styled-components'

import {Base, Heading, TextButton, FaPencilAltIcon, DialogBase, ActionDialog, Textarea, HeadlineArea} from 'smarthr-ui'

interface Props {
  description: string
  form: SubmitForm
  i18n: {
    title: string
    notice: string
    button: string
  }
}

interface SubmitForm {
  action: string
  method: string
  authenticityToken: string
  i18n: {
    title: string
    save: string
    close: string
  }
}


export const PlanDescription: React.VFC<Props> = (props) => {
  const { description, form, i18n } = props

  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [desc, setDesc] = useState(description)

  const handleTextChange = (text) => {
    setDesc(text)
  }

  const handleAction = () => {
    const body = {
      _method: form.method,
      authenticity_token: form.authenticityToken,
      description: desc
    }

    fetch(form.action, {
      method: 'post',
      credentials: 'same-origin',
      body: Object.keys(body).reduce((o,key)=>(o.set(key, body[key]), o), new FormData())
    }).then(r => {
      document.location.reload()
    })
  }

  const handleClose = () => {
    setDesc(description)
    setIsDialogOpen(false)
  }

  return (
    <Container>
      <DescriptionBase>
        <HeadlineArea
          heading={{ children: i18n.title, tag: "h1"}}
          description={i18n.notice}
        />
        <TextContainer>
          {description}
          <TextButton size="s" prefix={<FaPencilAltIcon size={11} />} onClick={() => setIsDialogOpen(true)}>
            {i18n.button}
          </TextButton>
        </TextContainer>
      </DescriptionBase>
      <ActionDialog
        title={form.i18n.title}
        actionText={form.i18n.save}
        closeText={form.i18n.close}
        isOpen={isDialogOpen}
        onClickOverlay={() => setIsDialogOpen(false)}
        onPressEscape={() => setIsDialogOpen(false)}
        onClickAction={() => handleAction()}
        onClickClose={() => handleClose()}
      >
        <DialogBody>
          <Textarea
            width="100%"
            onChange={(e) => handleTextChange(e.target.value)}
          >
            {desc}
          </Textarea>
        </DialogBody>
      </ActionDialog>
    </Container>
  )
}

const Container = styled.div`
  margin: 8px;
`

const TextContainer = styled.div`
  margin: 8px;
`

const DialogBody = styled(DialogBase)`
  width: 656px;
  padding: 24px;
`

const DescriptionBase = styled(Base)`
  width: 1220px;
  padding: 16px;
`

export default PlanDescription