import ptBR from './pt-BR.json'
import enUS from './en-US.json'

const TranslateText = (props) => {
    const translationsJsonFile = props.language === 'pt-BR' ? ptBR : enUS

    let translation = translationsJsonFile[props.id]
    if (translation?.includes('<b>')) {
      let start = translation.indexOf("<b>")
      let end = translation.indexOf("</b>")

      translation = <>{`${translation.slice(0, start)}`} <b>{`${translation.slice(start + 3, end)}`}</b> {`${translation.slice(end + 4, translation.length)}`}</>
    }

    return translation
  }

export default TranslateText
