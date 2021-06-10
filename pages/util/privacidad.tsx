import { useEffect } from 'react'
import PrivacityContent from '@/components/specific/others/privacity'
import { useHeader } from 'contexts/general'

function Privacidad(): JSX.Element {
  const currentHeader = useHeader()
  useEffect(() => {
    currentHeader.changeClass('solid')
  }, [])
  return <PrivacityContent />
}

export default Privacidad
