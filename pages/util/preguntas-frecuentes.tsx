import { useEffect } from 'react'
import { useHeader } from 'contexts/general'
import FAQContent from '@/components/specific/others/faq'

function FAQ(): JSX.Element {
  const currentHeader = useHeader()
  useEffect(() => {
    currentHeader.changeClass('solid')
  }, [])
  return <FAQContent />
}

export default FAQ
