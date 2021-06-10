import { useEffect } from 'react'
import { useHeader } from 'contexts/general'
import TermsConditionContent from '@/components/specific/others/cookies'

function TermsConditions(): JSX.Element {
  const currentHeader = useHeader()
  useEffect(() => {
    currentHeader.changeClass('solid')
  }, [])
  return <TermsConditionContent />
}

export default TermsConditions
